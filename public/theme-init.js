// Apply the saved preference before paint. The portfolio also works without storage.
try {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.dataset.theme = 'dark';
    document.querySelector('meta[name="theme-color"]').content = '#191c19';
  }
} catch {
  // Privacy settings may block storage; the default light theme is still usable.
}
