import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function PremiumNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Resources', path: '/resources' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300
      light:bg-white light:border-b light:border-light-border
      dark:bg-dark-bg dark:border-b dark:border-dark-border
      backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img src="/logo.png" alt="Oladayo Logo" className="w-10 h-10 rounded-lg group-hover:shadow-lg group-hover:shadow-premium-accent/50 transition-all" />
            <span className="font-bold text-lg light:text-light-text dark:text-dark-text hidden sm:inline">Oladayo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  light:text-light-text light:hover:text-premium-accent light:hover:bg-light-bg-secondary
                  dark:text-dark-text dark:hover:text-premium-accent dark:hover:bg-dark-bg-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-200
                light:text-light-text light:hover:bg-light-bg-secondary
                dark:text-dark-text dark:hover:bg-dark-bg-secondary"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="light:text-light-text dark:text-dark-text" />
              ) : (
                <Menu size={24} className="light:text-light-text dark:text-dark-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t light:border-light-border dark:border-dark-border light:bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 animate-slideUp">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 transition-all duration-200 font-medium
                  light:text-light-text light:hover:text-premium-accent light:hover:bg-light-bg
                  dark:text-dark-text dark:hover:text-premium-accent dark:hover:bg-dark-bg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
