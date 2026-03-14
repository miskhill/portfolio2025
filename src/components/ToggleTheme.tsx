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
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-10 w-12 items-center justify-center border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={`Theme: ${activeOption.label}`}
        title={`Theme: ${activeOption.label}`}
        style={{ borderRadius: '9999px' }}
      >
        <ActiveIcon className="h-4 w-4" />
      </button>

      {isOpen ? (
        <div
          className="absolute border border-border bg-card p-2 shadow-lg"
          role="menu"
          aria-label="Theme options"
          style={{
            borderRadius: '1rem',
            minWidth: '9.5rem',
            maxWidth: 'calc(100vw - 1rem)',
            right: 0,
            top: 'calc(100% + 0.5rem)',
            zIndex: 60,
          }}
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
                className={`flex w-full items-center px-4 py-3 text-sm ${
                  isActive ? 'bg-primary text-primary-foreground' : 'text-foreground bg-card'
                }`}
                role="menuitemradio"
                aria-checked={isActive}
                style={{ borderRadius: '0.85rem', marginBottom: option.value === 'light' ? 0 : '0.25rem' }}
              >
                <OptionIcon className="h-4 w-4 mr-2" />
                <span style={{ flex: 1, textAlign: 'left' }}>{option.label}</span>
                {isActive ? <FiCheck className="h-4 w-4" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
