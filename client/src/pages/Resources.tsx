import React, { useState } from 'react';
import axios from 'axios';
import { Download, ExternalLink, FileText, Video, BookOpen } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'video' | 'whitepaper';
  icon: React.ReactNode;
  link?: string;
  downloadable?: boolean;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'ITIL Implementation Guide',
    description: 'Comprehensive guide for implementing ITIL best practices in your organization.',
    type: 'guide',
    icon: <BookOpen size={32} />,
    downloadable: true
  },
  {
    id: 2,
    title: 'IT Service Management Template',
    description: 'Ready-to-use templates for service management processes and documentation.',
    type: 'template',
    icon: <FileText size={32} />,
    downloadable: true
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices',
    description: 'Essential security measures and protocols for enterprise environments.',
    type: 'whitepaper',
    icon: <FileText size={32} />,
    downloadable: true
  },
  {
    id: 4,
    title: 'Digital Transformation Roadmap',
    description: 'Step-by-step roadmap for successful digital transformation initiatives.',
    type: 'guide',
    icon: <BookOpen size={32} />,
    downloadable: true
  },
  {
    id: 5,
    title: 'Team Leadership Masterclass',
    description: 'Video series on building and managing high-performance IT teams.',
    type: 'video',
    icon: <Video size={32} />,
    link: '#'
  },
  {
    id: 6,
    title: 'Cloud Infrastructure Optimization',
    description: 'Whitepaper on cost-effective cloud resource management strategies.',
    type: 'whitepaper',
    icon: <FileText size={32} />,
    downloadable: true
  }
];

export default function Resources() {
  const typeColors = {
    guide: 'light:bg-blue-50 dark:bg-blue-900/20 light:text-blue-600 dark:text-blue-400',
    template: 'light:bg-green-50 dark:bg-green-900/20 light:text-green-600 dark:text-green-400',
    video: 'light:bg-red-50 dark:bg-red-900/20 light:text-red-600 dark:text-red-400',
    whitepaper: 'light:bg-purple-50 dark:bg-purple-900/20 light:text-purple-600 dark:text-purple-400'
  };

  const typeLabels = {
    guide: 'Guide',
    template: 'Template',
    video: 'Video',
    whitepaper: 'Whitepaper'
  };

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterStatus('loading');
    setNewsletterMessage('');
    try {
      await axios.post('/api/newsletter', { email: newsletterEmail.trim(), source: 'resources' });
      setNewsletterStatus('success');
      setNewsletterMessage('Thanks for subscribing! Check your inbox for updates.');
      setNewsletterEmail('');
    } catch (error: any) {
      setNewsletterStatus('error');
      setNewsletterMessage(error.response?.data?.error || 'Subscription failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8
      light:bg-light-bg light:text-light-text
      dark:bg-dark-bg dark:text-dark-text
      transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slideUp">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="light:text-light-text dark:text-dark-text">Free </span>
            <span className="bg-gradient-to-r from-premium-accent via-premium-blue to-premium-purple bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl light:text-light-text-secondary dark:text-dark-text-secondary">
            Download guides, templates, and access educational content
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resources.map((resource, idx) => (
            <div
              key={resource.id}
              className="group animate-slideUp transition-all duration-300
                light:bg-light-bg-secondary light:border light:border-light-border light:hover:border-premium-accent light:hover:shadow-lg
                dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:hover:border-premium-accent dark:hover:shadow-lg dark:hover:shadow-premium-accent/20
                rounded-xl p-6 overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg mb-4 ${typeColors[resource.type]}`}>
                {resource.icon}
              </div>

              {/* Type Badge */}
              <div className="inline-block mb-3 ml-2">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${typeColors[resource.type]}`}>
                  {typeLabels[resource.type]}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-sm light:text-light-text-secondary dark:text-dark-text-secondary mb-6">
                {resource.description}
              </p>

              {/* Action Button */}
              <div className="flex gap-2">
                {resource.downloadable && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium
                    bg-gradient-to-r from-premium-accent to-premium-blue
                    text-premium-darker
                    hover:shadow-lg hover:shadow-premium-accent/50
                    transition-all duration-300 transform hover:scale-105">
                    <Download size={16} />
                    Download
                  </button>
                )}
                {resource.link && (
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium
                    light:bg-light-border light:text-light-text light:hover:bg-light-bg
                    dark:bg-dark-border dark:text-dark-text dark:hover:bg-premium-accent/20
                    transition-all">
                    <ExternalLink size={16} />
                    Access
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 light:text-light-text dark:text-dark-text">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'ITSM & Operations', count: 8 },
              { name: 'Cybersecurity', count: 6 },
              { name: 'Leadership', count: 5 },
              { name: 'Cloud & Infrastructure', count: 7 }
            ].map((category, idx) => (
              <button
                key={idx}
                className="p-6 rounded-xl text-center transition-all duration-300
                  light:bg-light-bg-secondary light:border light:border-light-border light:hover:border-premium-accent light:hover:shadow-lg
                  dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:hover:border-premium-accent dark:hover:shadow-lg"
              >
                <h3 className="font-bold mb-2 light:text-light-text dark:text-dark-text">
                  {category.name}
                </h3>
                <p className="text-sm light:text-light-text-secondary dark:text-dark-text-secondary">
                  {category.count} resources
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="rounded-xl p-8
          light:bg-light-bg-secondary light:border light:border-light-border
          dark:bg-dark-bg-secondary dark:border dark:border-dark-border
          animate-slideUp">
          <h2 className="text-3xl font-bold mb-4 light:text-light-text dark:text-dark-text">
            Get New Resources
          </h2>
          <p className="light:text-light-text-secondary dark:text-dark-text-secondary mb-6">
            Subscribe to receive new guides, templates, and resources directly in your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row max-w-md">
            <input
              type="email"
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg
                light:bg-light-bg light:border light:border-light-border light:text-light-text light:placeholder-light-text-secondary
                dark:bg-dark-bg dark:border dark:border-dark-border dark:text-dark-text dark:placeholder-dark-text-secondary
                focus:outline-none focus:ring-2 focus:ring-premium-accent"
            />
            <button
              type="submit"
              disabled={newsletterStatus === 'loading'}
              className="px-6 py-3 rounded-lg font-semibold
              bg-gradient-to-r from-premium-accent to-premium-blue
              text-premium-darker
              hover:shadow-lg hover:shadow-premium-accent/50
              transition-all duration-300 transform hover:scale-105 disabled:opacity-50">
              {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {newsletterMessage && (
            <p
              className={`mt-3 text-sm ${
                newsletterStatus === 'success' ? 'text-premium-green' : 'text-red-400'
              }`}
            >
              {newsletterMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
