import { IoSunnyOutline } from 'react-icons/io5';
import { FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeProvider';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-12 w-12 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      aria-label="Toggle theme"
    >
      <div className="relative w-[2.2rem] h-[2.2rem] flex items-center justify-center">
        {/* Sun icon - show in dark theme */}
        <IoSunnyOutline
          color="#eab308" // Bright yellow color
          className={`absolute h-[2.2rem] w-[2.2rem] transition-all duration-300
            ${isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
        />
        {/* Moon icon - show in light theme */}
        <FiMoon
          color="#1e3a8a" // Dark blue color
          className={`absolute h-[2.2rem] w-[2.2rem] transition-all duration-300
            ${!isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
        />
      </div>
    </button>
  );
}