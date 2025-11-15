import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import axios from 'axios';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'The Future of IT Service Management in 2025',
    excerpt: 'Exploring emerging trends and technologies shaping the future of ITSM.',
    content: 'IT Service Management continues to evolve with AI, automation, and cloud-native approaches...',
    category: 'ITSM',
    date: 'Nov 14, 2024',
    readTime: 8,
    author: 'Oladayo Alabi',
    image: '🚀'
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Remote Teams',
    excerpt: 'Essential security measures for distributed workforce management.',
    content: 'Remote work has transformed how organizations approach cybersecurity...',
    category: 'Security',
    date: 'Nov 10, 2024',
    readTime: 6,
    author: 'Oladayo Alabi',
    image: '🔒'
  },
  {
    id: 3,
    title: 'Building High-Performance IT Teams',
    excerpt: 'Leadership strategies for developing and managing technical teams.',
    content: 'Building a high-performance IT team requires more than technical skills...',
    category: 'Leadership',
    date: 'Nov 5, 2024',
    readTime: 10,
    author: 'Oladayo Alabi',
    image: '👥'
  },
  {
    id: 4,
    title: 'Cloud Infrastructure Optimization',
    excerpt: 'Cost-effective strategies for managing cloud resources.',
    content: 'Cloud optimization is critical for maintaining competitive advantage...',
    category: 'Cloud',
    date: 'Oct 28, 2024',
    readTime: 7,
    author: 'Oladayo Alabi',
    image: '☁️'
  },
  {
    id: 5,
    title: 'AI Integration in IT Operations',
    excerpt: 'How AI is revolutionizing IT operations and support.',
    content: 'Artificial Intelligence is transforming how IT teams operate...',
    category: 'AI/ML',
    date: 'Oct 20, 2024',
    readTime: 9,
    author: 'Oladayo Alabi',
    image: '🤖'
  },
  {
    id: 6,
    title: 'Digital Transformation Success Stories',
    excerpt: 'Real-world examples of successful digital transformation initiatives.',
    content: 'Digital transformation is not just about technology...',
    category: 'Transformation',
    date: 'Oct 15, 2024',
    readTime: 11,
    author: 'Oladayo Alabi',
    image: '✨'
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterStatus('loading');
    setNewsletterMessage('');
    try {
      await axios.post('/api/newsletter', { email: newsletterEmail.trim(), source: 'blog' });
      setNewsletterStatus('success');
      setNewsletterMessage('Thanks for subscribing! Watch your inbox for the latest posts.');
      setNewsletterEmail('');
    } catch (error: any) {
      setNewsletterStatus('error');
      setNewsletterMessage(error.response?.data?.error || 'Subscription failed. Please try again.');
    }
  };

  const categories = ['ITSM', 'Security', 'Leadership', 'Cloud', 'AI/ML', 'Transformation'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8
      light:bg-light-bg light:text-light-text
      dark:bg-dark-bg dark:text-dark-text
      transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-slideUp">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="light:text-light-text dark:text-dark-text">Latest </span>
            <span className="bg-gradient-to-r from-premium-accent via-premium-blue to-premium-purple bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
          <p className="text-xl light:text-light-text-secondary dark:text-dark-text-secondary">
            Insights on IT, leadership, and digital transformation
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-12 space-y-6 animate-slideUp">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 light:text-light-text-secondary dark:text-dark-text-secondary" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg
                light:bg-light-bg-secondary light:border light:border-light-border light:text-light-text light:placeholder-light-text-secondary
                dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:text-dark-text dark:placeholder-dark-text-secondary
                focus:outline-none focus:ring-2 focus:ring-premium-accent transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-premium-accent to-premium-blue text-premium-darker'
                  : 'light:bg-light-bg-secondary light:text-light-text light:border light:border-light-border dark:bg-dark-bg-secondary dark:text-dark-text dark:border dark:border-dark-border'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-premium-accent to-premium-blue text-premium-darker'
                    : 'light:bg-light-bg-secondary light:text-light-text light:border light:border-light-border dark:bg-dark-bg-secondary dark:text-dark-text dark:border dark:border-dark-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredArticles.map((article, idx) => (
            <article
              key={article.id}
              className="group animate-slideUp transition-all duration-300
                light:bg-light-bg-secondary light:border light:border-light-border light:hover:border-premium-accent light:hover:shadow-lg
                dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:hover:border-premium-accent dark:hover:shadow-lg dark:hover:shadow-premium-accent/20
                rounded-xl p-6 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image/Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {article.image}
              </div>

              {/* Category Badge */}
              <div className="inline-block mb-3">
                <span className="text-xs px-3 py-1 rounded-full font-medium
                  light:bg-light-border light:text-light-text
                  dark:bg-premium-accent/20 dark:text-premium-accent">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text group-hover:text-premium-accent transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm mb-4 light:text-light-text-secondary dark:text-dark-text-secondary">
                {article.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs light:text-light-text-secondary dark:text-dark-text-secondary mb-4 pb-4 border-t light:border-light-border dark:border-dark-border">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime} min read
                </div>
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-premium-accent font-medium group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg light:text-light-text-secondary dark:text-dark-text-secondary">
              No articles found. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-xl p-8
          light:bg-light-bg-secondary light:border light:border-light-border
          dark:bg-dark-bg-secondary dark:border dark:border-dark-border
          animate-slideUp">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="light:text-light-text-secondary dark:text-dark-text-secondary mb-6">
            Subscribe to get the latest articles on IT, leadership, and digital transformation.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row">
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
