import { useLayoutEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
export const THEMES = [
  'Light', 'Dark', 'Nord', 'Forest', 'Coffee', 'Dracula',
  'Cupcake', 'Corporate', 'Emerald', 'Retro', 'Synthwave', 'Luxury', 'Winter', 'Night',
].map(label => ({ label, id: label.toLowerCase() }));

function readTheme() {
  const saved = document.documentElement.dataset.theme;
  return THEMES.find(option => option.id === saved)?.id ?? 'light';
}

export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    const background = getComputedStyle(root).getPropertyValue('--bg').trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
  }, [theme]);

  function selectTheme(next) {
    if (!THEMES.some(option => option.id === next)) return;
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage is optional; the theme still changes for the current page.
    }
  }

  return { theme, selectTheme };
}
