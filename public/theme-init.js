// Set the saved theme before first paint. Unknown names use the default CSS
// palette and are reset to Light when React initializes.
try {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.dataset.theme = saved;
} catch {
  // Storage is optional.
}
