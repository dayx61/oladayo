import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await axios.post('/api/contact', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8
      light:bg-light-bg light:text-light-text
      dark:bg-dark-bg dark:text-dark-text
      transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Information</h2>
              <p className="light:text-light-text-secondary dark:text-dark-text-secondary mb-8">
                Feel free to reach out to me through any of these channels. I'm always interested in discussing new opportunities and innovative solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-6 flex items-start gap-4 transition-all duration-300">
                <Mail className="text-premium-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2 light:text-light-text dark:text-dark-text">Email</h3>
                <a href="mailto:dayx61@gmail.com" className="text-premium-accent hover:text-premium-blue transition-smooth">
                    dayx61@gmail.com
                  </a>
                </div>
              </div>

              <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-6 flex items-start gap-4 transition-all duration-300">
                <Phone className="text-premium-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2 light:text-light-text dark:text-dark-text">Phone</h3>
                  <a href="tel:+12679574048" className="text-premium-accent hover:text-premium-blue transition-smooth">
                    +1 267-957-4048
                  </a>
                </div>
              </div>

              <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-6 flex items-start gap-4 transition-all duration-300">
                <Linkedin className="text-premium-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2 light:text-light-text dark:text-dark-text">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/olaalabi53"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-premium-accent hover:text-premium-blue transition-smooth"
                  >
                    linkedin.com/in/olaalabi53
                  </a>
                </div>
              </div>

              <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-6 flex items-start gap-4 transition-all duration-300">
                <MapPin className="text-premium-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2 light:text-light-text dark:text-dark-text">Location</h3>
                  <p className="light:text-light-text-secondary dark:text-dark-text-secondary">Philadelphia, Pennsylvania, United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-8 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 light:text-light-text dark:text-dark-text">Send Me a Message</h2>

            {success && (
              <div className="mb-6 p-4 bg-premium-green/20 border border-premium-green rounded-lg text-premium-green">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 light:text-light-text dark:text-dark-text">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full light:bg-light-bg light:border light:border-light-border light:text-light-text light:placeholder-light-text-secondary dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:text-dark-text dark:placeholder-dark-text-secondary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-premium-accent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 light:text-light-text dark:text-dark-text">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full light:bg-light-bg light:border light:border-light-border light:text-light-text light:placeholder-light-text-secondary dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:text-dark-text dark:placeholder-dark-text-secondary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-premium-accent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 light:text-light-text dark:text-dark-text">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full light:bg-light-bg light:border light:border-light-border light:text-light-text light:placeholder-light-text-secondary dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:text-dark-text dark:placeholder-dark-text-secondary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-premium-accent transition-all duration-300"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 light:text-light-text dark:text-dark-text">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full light:bg-light-bg light:border light:border-light-border light:text-light-text light:placeholder-light-text-secondary dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:text-dark-text dark:placeholder-dark-text-secondary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-premium-accent transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-premium-accent to-premium-blue hover:shadow-lg hover:shadow-premium-accent/50 disabled:opacity-50 text-premium-darker font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
