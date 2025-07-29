import { IoSunnyOutline } from 'react-icons/io5';
import { FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeProvider';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      aria-label="Toggle theme"
    >
      <div className="relative w-[1.6rem] h-[1.6rem] sm:w-[2.2rem] sm:h-[2.2rem] flex items-center justify-center">
        <IoSunnyOutline
          color="#eab308"
          className={`absolute h-[1.6rem] w-[1.6rem] sm:h-[2.2rem] sm:w-[2.2rem] transition-all duration-300
            ${isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
        />
        <FiMoon
          color="#1e3a8a"
          className={`absolute h-[1.6rem] w-[1.6rem] sm:h-[2.2rem] sm:w-[2.2rem] transition-all duration-300
            ${!isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
        />
      </div>
    </button>
  );
}