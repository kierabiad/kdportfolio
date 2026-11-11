// Dark is the default. Apply a saved light preference before first paint.
// Keep the light colour in sync with THEME_COLORS in src/hooks/useTheme.js.
try {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.dataset.theme = 'light';
    document.querySelector('meta[name="theme-color"]').content = '#fafafa';
  }
} catch {
  // Privacy settings may block storage; the default dark theme is still fully usable.
}
