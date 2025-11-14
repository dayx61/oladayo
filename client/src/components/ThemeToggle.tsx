import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center
        light:bg-light-bg-secondary light:text-light-text light:hover:bg-light-border light:hover:text-premium-accent
        dark:bg-dark-bg-secondary dark:text-dark-text dark:hover:bg-dark-bg-secondary dark:hover:text-premium-accent
        light:border light:border-light-border dark:border dark:border-dark-border
        hover:shadow-md hover:shadow-premium-accent/50 animate-rainbow-border group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={18} className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
      ) : (
        <Sun size={18} className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-45" />
      )}
    </button>
  );
}
