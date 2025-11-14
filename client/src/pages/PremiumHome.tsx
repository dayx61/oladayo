import { ArrowRight, Zap, Code, Target, Users, TrendingUp, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PremiumHome() {
  return (
    <div className="min-h-screen bg-premium-darker overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-premium-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-premium-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-premium-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-premium-accent/10 border border-premium-accent/30 mb-6">
                <Zap size={16} className="text-premium-accent" />
                <span className="text-sm font-medium text-premium-accent">Welcome to Excellence</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">IT Leadership</span>
                <br />
                <span className="bg-gradient-to-r from-premium-accent via-premium-blue to-premium-purple bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Oladayo Alabi brings 7+ years of IT Service Management expertise, combining technical excellence with strategic leadership to drive digital transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-premium-accent to-premium-blue rounded-lg font-semibold text-premium-darker hover:shadow-lg hover:shadow-premium-accent/50 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Profile
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-premium-accent/50 rounded-lg font-semibold text-premium-accent hover:bg-premium-accent/10 transition-all duration-300"
                >
                  View Experience
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Years Experience', value: '7+' },
                  { label: 'Companies', value: '6' },
                  { label: 'Team Led', value: '7+' }
                ].map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className="text-3xl font-bold text-premium-accent group-hover:text-premium-accent-2 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Glowing card */}
                <div className="absolute inset-0 bg-gradient-to-br from-premium-accent/20 to-premium-purple/20 rounded-2xl border border-premium-accent/30 backdrop-blur-xl animate-glow"></div>
                
                {/* Content inside card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Digital Transformation</h3>
                    <p className="text-gray-300">Leading IT initiatives with innovation and excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-premium-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-white">Core</span>
              <span className="bg-gradient-to-r from-premium-accent to-premium-blue bg-clip-text text-transparent"> Competencies</span>
            </h2>
            <p className="text-xl text-gray-400">Expertise across IT Service Management, Security, and Leadership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code size={32} />,
                title: 'IT Service Management',
                description: 'ITIL-certified expertise in service delivery and operations',
                color: 'from-blue-500 to-cyan-500',
                iconColor: 'text-blue-400'
              },
              {
                icon: <Shield size={32} />,
                title: 'Cybersecurity',
                description: 'Security operations and compliance management',
                color: 'from-red-500 to-pink-500',
                iconColor: 'text-red-400'
              },
              {
                icon: <Users size={32} />,
                title: 'Team Leadership',
                description: 'Building and mentoring high-performing teams',
                color: 'from-purple-500 to-pink-500',
                iconColor: 'text-purple-400'
              },
              {
                icon: <Target size={32} />,
                title: 'System Administration',
                description: 'Infrastructure and systems management expertise',
                color: 'from-green-500 to-emerald-500',
                iconColor: 'text-green-400'
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Strategic Planning',
                description: 'Digital transformation and business alignment',
                color: 'from-yellow-500 to-orange-500',
                iconColor: 'text-yellow-400'
              },
              {
                icon: <Rocket size={32} />,
                title: 'Technical Support',
                description: '800+ users supported with 96% satisfaction',
                color: 'from-indigo-500 to-blue-500',
                iconColor: 'text-indigo-400'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-xl border border-premium-accent/20 bg-gradient-to-br from-premium-slate/50 to-premium-darker hover:border-premium-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-premium-accent/20 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`${feature.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-premium-accent transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-premium-accent/30 bg-gradient-to-r from-premium-accent/10 via-premium-purple/10 to-premium-blue/10 backdrop-blur-xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-premium-accent/5 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Connect?</h2>
              <p className="text-xl text-gray-300 mb-8">Let's discuss how I can contribute to your team's success</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-premium-accent to-premium-blue rounded-lg font-semibold text-premium-darker hover:shadow-lg hover:shadow-premium-accent/50 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
