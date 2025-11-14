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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-bold mb-12 gradient-text">Get In Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Information</h2>
            <p className="text-gray-400 mb-8">
              Feel free to reach out to me through any of these channels. I'm always interested in discussing new opportunities and innovative solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass p-6 rounded-xl flex items-start gap-4">
              <Mail className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:alabioladayoibrahim@hotmail.com" className="text-blue-400 hover:text-blue-300 transition-smooth">
                  alabioladayoibrahim@hotmail.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl flex items-start gap-4">
              <Phone className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+12679574048" className="text-blue-400 hover:text-blue-300 transition-smooth">
                  +1 267-957-4048
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl flex items-start gap-4">
              <Linkedin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/olaalabi53"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-smooth"
                >
                  linkedin.com/in/olaalabi53
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-xl flex items-start gap-4">
              <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Philadelphia, Pennsylvania, United States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

          {success && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
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
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-smooth"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-smooth"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-smooth"
                placeholder="Message subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-smooth resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-smooth"
            >
              <Send size={20} />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
