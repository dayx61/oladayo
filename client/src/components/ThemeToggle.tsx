import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-all duration-300
        light:bg-light-bg-secondary light:text-light-text light:hover:bg-light-border
        dark:bg-dark-bg-secondary dark:text-dark-text dark:hover:bg-premium-accent/20
        light:border light:border-light-border dark:border dark:border-dark-border"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
}
