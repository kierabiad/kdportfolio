import { useCallback, useState } from 'react';

const STORAGE_KEY = 'theme';
// Keep in sync with --bg in styles/tokens.css and public/theme-init.js.
const THEME_COLORS = { dark: '#0a0a0a', light: '#fafafa' };

function readTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

/**
 * Dark is the default. The choice is applied to <html data-theme> and, when
 * storage is available, remembered for the next visit.
 * @returns {{ theme: 'dark' | 'light', toggleTheme: () => void }}
 */
export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[next]);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage is optional; the theme still changes for the current page.
    }
    setTheme(next);
  }, [theme]);

  return { theme, toggleTheme };
}
