import { Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 transition-colors duration-300
      light:bg-light-bg-secondary light:border-t light:border-light-border
      dark:bg-dark-bg-secondary dark:border-t dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">About</h3>
            <p className="text-sm leading-relaxed light:text-light-text-secondary dark:text-dark-text-secondary">
              IT Professional with 7+ years of experience in technical support, IT service management, and cybersecurity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Portfolio', href: '/' },
                { label: 'Projects', href: '/projects' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-smooth flex items-center gap-2 light:text-light-text-secondary light:hover:text-light-text dark:text-dark-text-secondary dark:hover:text-dark-text"
                  >
                    <ExternalLink size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/olaalabi53"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-smooth
                  light:bg-light-border light:hover:bg-premium-blue light:text-light-text
                  dark:bg-dark-border dark:hover:bg-premium-blue dark:text-dark-text"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:alabioladayoibrahim@hotmail.com"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-smooth
                  light:bg-light-border light:hover:bg-premium-accent light:text-light-text
                  dark:bg-dark-border dark:hover:bg-premium-accent dark:text-dark-text"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t light:border-light-border dark:border-dark-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm light:text-light-text-secondary dark:text-dark-text-secondary">
              © {currentYear} Oladayo Alabi. All rights reserved.
            </p>
            <p className="text-xs light:text-light-text-secondary dark:text-dark-text-secondary">
              Built with React, Node.js, and Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
