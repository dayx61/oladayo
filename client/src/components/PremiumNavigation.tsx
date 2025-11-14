import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function PremiumNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-premium-darker/80 backdrop-blur-xl border-b border-premium-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Oladayo Logo" className="w-10 h-10 rounded-lg group-hover:shadow-lg group-hover:shadow-premium-accent/50 transition-all" />
            <span className="font-bold text-lg text-white hidden sm:inline">Oladayo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-premium-accent hover:bg-premium-accent/10 transition-all duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-premium-accent/10 transition-colors"
          >
            {isOpen ? (
              <X size={24} className="text-premium-accent" />
            ) : (
              <Menu size={24} className="text-premium-accent" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-premium-accent/10 animate-slideUp">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-premium-accent hover:bg-premium-accent/10 transition-all duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-4 px-4 py-2 bg-gradient-to-r from-premium-accent to-premium-blue rounded-lg font-semibold text-premium-darker text-center hover:shadow-lg hover:shadow-premium-accent/50 transition-all"
            >
              Connect
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
