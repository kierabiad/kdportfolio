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

test('theme choice persists and remains usable when storage is unavailable', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Switch to light theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } });
  });
  await page.reload();
  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('navigation works at the current screen size without horizontal overflow', async ({ page, isMobile }) => {
  await page.goto('/');
  if (isMobile) {
    const toggle = page.getByRole('button', { name: /^(Open|Close) navigation$/ });
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
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
  const light = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(light.violations).toEqual([]);
  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  const dark = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(dark.violations).toEqual([]);
});
