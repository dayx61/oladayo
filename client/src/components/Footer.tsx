import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-slate-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              IT Professional with 7+ years of experience in technical support, IT service management, and cybersecurity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Portfolio', href: '/' },
                { label: 'Experience', href: '/experience' },
                { label: 'Chat with AI', href: '/chat' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-smooth flex items-center gap-2"
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
                className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-smooth"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:alabioladayoibrahim@hotmail.com"
                className="w-10 h-10 rounded-lg bg-slate-700 hover:bg-red-600 flex items-center justify-center transition-smooth"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Oladayo Alabi. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with React, Node.js, and Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
