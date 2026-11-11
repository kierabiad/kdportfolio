import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon.jsx';
import useTheme from '../hooks/useTheme.js';

const NAV_ITEMS = [['About', 'about'], ['Experience', 'experience'], ['Work', 'work'], ['Toolkit', 'toolkit']];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuButton = useRef(null);
  const navLinks = useRef(null);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (!menuOpen) return undefined;
    // The links precede the toggle in the DOM, so move focus into the opened menu.
    navLinks.current?.querySelector('a')?.focus();
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  function closeMenu(id) {
    setMenuOpen(false);
    if (menuOpen) document.getElementById(id)?.focus({ preventScroll: true });
  }

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <a href="#home" className="wordmark" onClick={() => closeMenu('home')}>
          Kier Abiad<span aria-hidden="true">.</span>
        </a>
        <div id="navigation-links" ref={navLinks} className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => closeMenu(id)}>{label}</a>
          ))}
          <a href="#contact" className="mobile-contact" onClick={() => closeMenu('contact')}>
            Let’s talk <Icon size={18} />
          </a>
        </div>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            aria-label={`Switch to ${nextTheme} theme`}
            onClick={toggleTheme}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
          </button>
          <a href="#contact" className="nav-contact" onClick={() => closeMenu('contact')}>
            Let’s talk <Icon size={15} />
          </a>
          <button
            ref={menuButton}
            type="button"
            className="icon-button menu-button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="navigation-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  );
}
