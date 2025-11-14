import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Oladayo Alabi</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              IT Professional | Security Operations | Technical Support
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              7+ years of experience driving operational excellence, enhancing security frameworks, and delivering seamless user experiences. Passionate about combining technical expertise with proactive security measures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-smooth flex items-center gap-2"
              >
                Learn More <ArrowRight size={20} />
              </Link>
              <Link
                to="/chat"
                className="px-8 py-3 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-smooth"
              >
                Chat with AI
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20 animate-pulse-glow"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 glass">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-400">IT Service Management Specialist</p>
                    <p className="text-sm text-gray-400">📍 Philadelphia, Pennsylvania</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain size={32} />,
              title: 'AI-Powered Chat',
              description: 'Intelligent chatbot that answers questions about my background and any topic with natural conversation.'
            },
            {
              icon: <BarChart3 size={32} />,
              title: 'Data Analytics',
              description: 'Interactive visualizations of my professional journey, skills, and career progression.'
            },
            {
              icon: <Zap size={32} />,
              title: 'Fast & Responsive',
              description: 'Built with latest technologies for optimal performance and seamless user experience.'
            }
          ].map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-xl hover:border-blue-500/50 transition-smooth group">
              <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-smooth">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore my experience, chat with AI, or get in touch directly. I'm always interested in discussing innovative solutions and new opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/experience"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-smooth"
            >
              View Experience
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-smooth"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
