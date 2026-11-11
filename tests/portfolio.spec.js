import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('a visitor can review experience, education, and reach out', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Real-world');
  await expect(page.getByRole('heading', { name: 'AI Software Engineer', exact: true })).toBeVisible();
  await page.locator('summary').filter({ hasText: 'Developer Intern' }).click();
  await expect(page.getByText(/standardized local and deployment configurations/)).toBeVisible();
  await expect(page.getByText('Bachelor of Science in Computer Science')).toBeVisible();
  await expect(page.getByRole('link', { name: 'kier.abiad@gmail.com' })).toHaveAttribute('href', 'mailto:kier.abiad@gmail.com');
  await expect(page.getByRole('link', { name: '+63 962 661 4618' })).toHaveAttribute('href', 'tel:+639626614618');
  expect(errors).toEqual([]);
});

test('dark is the default; the theme choice persists and works when storage is unavailable', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const html = page.locator('html');

  await page.goto('/');
  await expect(html).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(html).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(html).toHaveAttribute('data-theme', 'light');

  // Storage now holds "light". With storage blocked it cannot be read, so the page must
  // fall back to dark (distinguishable from a stored "dark") and must not throw.
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } });
  });
  await page.reload();
  await expect(html).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(html).toHaveAttribute('data-theme', 'light');
  expect(errors).toEqual([]);
});

test('the palette stays strictly black and white in both themes', async ({ page }) => {
  await page.goto('/');
  for (const theme of ['dark', 'light']) {
    await page.evaluate(value => { document.documentElement.dataset.theme = value; }, theme);
    const offenders = await page.evaluate(() => {
      // Handles rgb()/rgba() (0-255) and color(srgb ...) (0-1) computed values.
      const isGray = value => {
        const [r, g, b] = (value.match(/-?\d*\.?\d+/g) ?? []).map(Number);
        if ([r, g, b].some(channel => channel === undefined)) return true;
        const tolerance = value.startsWith('color(') ? 0.004 : 1;
        return Math.abs(r - g) <= tolerance && Math.abs(g - b) <= tolerance;
      };
      const properties = ['color', 'backgroundColor', 'borderTopColor', 'fill', 'stroke'];
      const found = [];
      for (const element of document.querySelectorAll('body, body *')) {
        if (element.tagName === 'IMG') continue;
        const style = getComputedStyle(element);
        for (const property of properties) {
          const value = style[property];
          if (value && value !== 'none' && !isGray(value)) found.push(`${element.tagName}.${element.className} ${property}: ${value}`);
        }
      }
      return found;
    });
    expect(offenders, `non-gray colors in ${theme} theme`).toEqual([]);
  }
});

test('the skip link stays off-screen until it receives keyboard focus', async ({ page }) => {
  await page.goto('/');
  const skipLink = page.getByRole('link', { name: 'Skip to content' });
  await expect(skipLink).not.toBeInViewport();
  await page.keyboard.press('Tab');
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();
});

test('navigation works at the current screen size without horizontal overflow', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) {
    const toggle = page.getByRole('button', { name: /^(Open|Close) navigation$/ });
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    // Keyboard focus moves into the opened menu instead of skipping past it.
    await expect(page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'About' })).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.click();
  }
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.getByRole('heading', { name: 'A few things I’ve built.' })).toBeInViewport();
  if (isMobile) await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.setViewportSize({ width: 320, height: 800 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('resume download returns a real PDF and all local anchors resolve', async ({ page, request }) => {
  await page.goto('/');
  const resume = page.getByRole('link', { name: 'Download résumé', exact: true }).first();
  const response = await request.get(await resume.getAttribute('href'));
  expect(response.ok()).toBe(true);
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  const missing = await page.locator('a[href^="#"]').evaluateAll(links => links
    .map(link => link.getAttribute('href'))
    .filter(href => !document.getElementById(href.slice(1))));
  expect(missing).toEqual([]);
  const portrait = page.getByRole('img', { name: 'Kier Daryl Abiad' });
  await expect(portrait).toBeVisible();
  expect(await portrait.evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true);
});

test('light and dark themes meet automated accessibility checks', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const dark = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(dark.violations).toEqual([]);
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  const light = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(light.violations).toEqual([]);
});
