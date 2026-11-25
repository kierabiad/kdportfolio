import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { THEMES } from '../src/hooks/useTheme.js';

function themeControls(page) {
  const trigger = page.getByRole('button', { name: /Change theme/ });
  const menu = page.getByRole('menu', { name: 'Color themes' });

  async function choose(label) {
    if (await trigger.getAttribute('aria-expanded') === 'false') await trigger.click();
    await menu.getByRole('menuitemradio', { name: label, exact: true }).click();
    await expect(menu).toBeHidden();
  }

  return { trigger, menu, choose };
}

test('a visitor can review experience, education, and contact details', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Kier Daryl Abiad');
  await expect(page.getByRole('heading', { name: 'AI Software Engineer', exact: true })).toBeVisible();
  await expect(page.getByText('May 2026 — Dec 2026')).toBeVisible();
  await page.locator('summary').filter({ hasText: 'for Developer Intern' }).click();
  await expect(page.getByText(/standardized local and deployment configurations/)).toBeVisible();
  await expect(page.getByText('Bachelor of Science in Computer Science')).toBeVisible();
  await expect(page.getByRole('link', { name: 'kier.abiad@gmail.com' })).toHaveAttribute('href', 'mailto:kier.abiad@gmail.com');
  await expect(page.getByRole('link', { name: '+63 962 661 4618' })).toHaveAttribute('href', 'tel:+639626614618');
  await expect(page.getByRole('link', { name: 'kier-abiad', exact: true })).toHaveAttribute('href', 'https://www.linkedin.com/in/kier-abiad/');
  expect(errors).toEqual([]);
});

test('the theme picker changes the palette and remembers the choice', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const html = page.locator('html');
  const { trigger, menu, choose } = themeControls(page);

  await page.goto('/');
  await expect(trigger).toHaveAccessibleName('Change theme (current: Light)');
  await trigger.click();
  await expect(menu.getByRole('menuitemradio')).toHaveCount(THEMES.length);
  const backgrounds = new Set();
  for (const { id, label } of THEMES) {
    await choose(label);
    await expect(html).toHaveAttribute('data-theme', id);
    backgrounds.add(await page.locator('body').evaluate(body => getComputedStyle(body).backgroundColor));
  }
  expect(backgrounds.size).toBe(THEMES.length);
  await page.reload();
  await expect(trigger).toHaveAccessibleName('Change theme (current: Night)');
  await expect(html).toHaveAttribute('data-theme', 'night');

  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } });
  });
  await page.reload();
  await expect(trigger).toHaveAccessibleName('Change theme (current: Light)');
  await choose('Nord');
  await expect(html).toHaveAttribute('data-theme', 'nord');
  expect(errors).toEqual([]);
});

test('the theme menu supports keyboard navigation, Escape, and outside dismissal', async ({ page }) => {
  await page.goto('/');
  const { trigger, menu } = themeControls(page);
  await trigger.press('Enter');
  await expect(menu.getByRole('menuitemradio', { name: 'Light', checked: true })).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(menu.getByRole('menuitemradio', { name: 'Dark' })).toBeFocused();
  await page.keyboard.press('End');
  await expect(menu.getByRole('menuitemradio', { name: 'Night' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAccessibleName('Change theme (current: Night)');

  await trigger.press('Enter');
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.mouse.click(4, 4);
  await expect(menu).toBeHidden();
});

test('keyboard users can skip directly to the projects', async ({ page }) => {
  await page.goto('/');
  const skipLink = page.getByRole('link', { name: 'Skip to projects' });
  await expect(skipLink).not.toBeInViewport();
  await page.keyboard.press('Tab');
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
  await expect(page.getByRole('heading', { name: 'Featured Project', exact: true })).toBeInViewport();
});

test('Abiad Residences is featured with a working preview asset and a live-site link', async ({ page }) => {
  await page.goto('/');
  const featured = page.getByRole('region', { name: 'Featured Project' });
  await expect(featured.getByRole('heading', { name: 'Abiad Residences' })).toBeVisible();
  await expect(featured.getByRole('link', { name: 'Visit Abiad Residences' })).toHaveAttribute('href', 'https://abiadresidences.vercel.app/');
  const logo = featured.locator('img[src="/abiad-residences-logo.svg"]');
  await expect(logo).toBeVisible();
  await expect.poll(() => logo.evaluate(image => image.naturalWidth)).toBeGreaterThan(0);
  const tile = featured.locator('.panel-logo');
  await expect(tile).toHaveCSS('background-color', 'rgb(233, 233, 233)');
  await expect(logo).toHaveCSS('filter', 'none');
  await expect(featured.getByRole('img')).toHaveAttribute('src', '/abiad-residences.webp');
  await themeControls(page).choose('Dark');
  await expect(tile).toHaveCSS('background-color', 'rgb(58, 58, 58)');
  await expect(logo).toHaveCSS('filter', 'brightness(0) invert(1)');
  const screenshot = featured.getByRole('img');
  await expect(screenshot).toHaveAttribute('src', '/abiad-residences-dark.webp');
  await expect(screenshot).toBeVisible();
  await screenshot.scrollIntoViewIfNeeded();
  await expect.poll(() => screenshot.evaluate(image => image.naturalWidth)).toBeGreaterThan(0);
});

test('GitHub Projects links to four original repositories', async ({ page }) => {
  await page.goto('/');
  const projects = page.getByRole('region', { name: 'GitHub Projects' });
  await expect(projects.getByRole('article')).toHaveCount(4);
  for (const name of ['Mock_Logs', 'chatbot', 'zoho_aichat', 'kdportfolio']) {
    await expect(projects.getByRole('link', { name })).toHaveAttribute('href', `https://github.com/kierabiad/${name}`);
  }
});

test('all six LinkedIn credentials are listed immediately below More Projects', async ({ page }) => {
  await page.goto('/');
  const sections = page.getByRole('main').getByRole('region');
  await expect(sections.nth(2)).toHaveAccessibleName('More Projects');
  const credentials = sections.nth(3);
  await expect(credentials).toHaveAccessibleName('Licenses & Certifications');
  await expect(credentials.getByRole('article')).toHaveCount(6);
  await expect(credentials.getByText('Issued Oct 2026 · Expires Sep 2028')).toBeVisible();
  await expect(credentials.getByRole('link', { name: /View credential: Claude Academy: Claude Code 101/ })).toHaveAttribute('href', 'https://academy.claude.com/verify/5b702b7a7692be25204b16a820aca3a6');
  await expect(credentials.getByRole('link', { name: /View credential:/ })).toHaveCount(6);
});

test('project cards and contact details fit the current viewport and a 320px screen', async ({ page }) => {
  await page.goto('/');
  for (const width of [page.viewportSize().width, 320]) {
    await page.setViewportSize({ width, height: 800 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});

test('the latest résumé is a PDF download and the portrait loads', async ({ page, request }) => {
  await page.goto('/');
  const resume = page.getByRole('link', { name: 'Download résumé', exact: true });
  await expect(resume).toHaveAttribute('download', '');
  const response = await request.get(await resume.getAttribute('href'));
  expect(response.ok()).toBe(true);
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-');
  const portrait = page.getByRole('img', { name: 'Kier Daryl Abiad' });
  await expect(portrait).toBeVisible();
  await expect.poll(() => portrait.evaluate(image => image.naturalWidth)).toBeGreaterThan(0);
});

test('all themes and the open menu meet automated accessibility checks', async ({ page }) => {
  test.setTimeout(60_000);
  await page.goto('/');
  const { trigger, choose } = themeControls(page);
  for (const { label } of THEMES) {
    await choose(label);
    await trigger.click();
    const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(violations, label).toEqual([]);
  }
});
