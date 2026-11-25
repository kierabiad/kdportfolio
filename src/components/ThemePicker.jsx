import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import useTheme, { THEMES } from '../hooks/useTheme.js';
import Icon from '../Icon.jsx';

export default function ThemePicker() {
  const { theme, selectTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [focusedTheme, setFocusedTheme] = useState(theme);
  const pickerRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const activeTheme = THEMES.find(option => option.id === theme);

  useLayoutEffect(() => {
    if (open) menuRef.current.querySelector('[aria-checked="true"]')?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function dismissOutside(event) {
      if (!pickerRef.current.contains(event.target)) setOpen(false);
    }

    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('focusin', dismissOutside);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('focusin', dismissOutside);
    };
  }, [open]);

  function closeMenu() {
    triggerRef.current.focus();
    setOpen(false);
  }

  function handleMenuKey(event) {
    const { key } = event;
    if (key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) return;

    event.preventDefault();
    const items = Array.from(menuRef.current.querySelectorAll('[role="menuitemradio"]'));
    const current = items.indexOf(document.activeElement);
    const last = items.length - 1;
    let next;
    switch (key) {
      case 'Home': next = 0; break;
      case 'End': next = last; break;
      case 'ArrowUp': next = current <= 0 ? last : current - 1; break;
      default: next = current >= last ? 0 : current + 1;
    }
    items[next].focus();
  }

  return (
    <div className="card theme-card" ref={pickerRef}>
      <div className="theme-summary">
        <strong>Theme</strong>
        <span>{activeTheme.label}</span>
      </div>
      <button
        ref={triggerRef}
        type="button"
        className="theme-trigger"
        aria-label={`Change theme (current: ${activeTheme.label})`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="theme-menu"
        onClick={() => setOpen(!open)}
      >
        <Icon name="menu" size={21} />
      </button>
      <div
        ref={menuRef}
        id="theme-menu"
        className="theme-menu"
        role="menu"
        aria-label="Color themes"
        hidden={!open}
        onKeyDown={handleMenuKey}
      >
        {THEMES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="menuitemradio"
            aria-checked={theme === id}
            tabIndex={focusedTheme === id ? 0 : -1}
            className="theme-option"
            onFocus={() => setFocusedTheme(id)}
            onClick={() => {
              selectTheme(id);
              closeMenu();
            }}
          >
            <span className="theme-swatch" data-theme={id} aria-hidden="true" />
            <span>{label}</span>
            {theme === id && <Icon name="check" size={17} />}
          </button>
        ))}
      </div>
    </div>
  );
}
