import { useEffect, useRef, useState } from 'react';
import { BsLaptop } from 'react-icons/bs';
import { FiCheck, FiMoon } from 'react-icons/fi';
import { IoSunnyOutline } from 'react-icons/io5';

import { useTheme } from '../context/ThemeProvider';

const themeOptions = [
  { value: 'system', label: 'System', icon: BsLaptop },
  { value: 'dark', label: 'Dark', icon: FiMoon },
  { value: 'light', label: 'Light', icon: IoSunnyOutline },
] as const;

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeOption =
    themeOptions.find((option) => option.value === theme) ?? themeOptions[0];
  const ActiveIcon = activeOption.icon;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="theme-toggle" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="theme-toggle__trigger"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Theme: ${activeOption.label}`}
        title={`Theme: ${activeOption.label}`}
      >
        <ActiveIcon size={16} />
      </button>

      {isOpen ? (
        <div
          className="theme-toggle__menu"
          role="menu"
          aria-label="Theme options"
        >
          {themeOptions.map((option) => {
            const OptionIcon = option.icon;
            const isActive = option.value === theme;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setTheme(option.value);
                  setIsOpen(false);
                }}
                className={`theme-toggle__option ${
                  isActive ? 'theme-toggle__option--active' : ''
                }`}
                role="menuitemradio"
                aria-checked={isActive}
              >
                <OptionIcon size={16} />
                <span className="theme-toggle__label">{option.label}</span>
                {isActive ? <FiCheck size={16} /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
