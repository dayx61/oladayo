import { ArrowRight, Zap, Code, Target, Users, TrendingUp, Shield, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PremiumHome() {
  return (
    <div className="min-h-screen light:bg-light-bg dark:bg-premium-darker overflow-hidden">
      {/* Animated background gradient with enhanced depth */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-premium-accent/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-premium-purple/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-premium-blue/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-premium-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
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

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="light:text-light-text dark:text-white">IT Leadership</span>
                <br />
                <span className="bg-gradient-to-r from-premium-accent via-premium-blue to-premium-purple bg-clip-text text-transparent animate-pulse">
                  Reimagined
                </span>
              </h1>

              <p className="text-lg sm:text-xl light:text-light-text-secondary dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Oladayo Alabi brings <span className="text-premium-accent font-semibold">7+ years</span> of IT Service Management expertise, combining technical excellence with strategic leadership to drive <span className="text-premium-blue font-semibold">digital transformation</span> and organizational growth.
              </p>



              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { label: 'Years Experience', value: '7+', icon: '📈' },
                  { label: 'Companies', value: '6', icon: '🏢' },
                  { label: 'Team Led', value: '7+', icon: '👥' }
                ].map((stat, idx) => (
                  <div key={idx} className="group p-4 rounded-lg bg-premium-slate/30 hover:bg-premium-slate/50 transition-all duration-300 border border-premium-accent/10 hover:border-premium-accent/30">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-premium-accent group-hover:text-premium-accent-2 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs light:text-light-text-secondary dark:text-gray-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full flex items-center justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full h-full max-h-96 lg:max-h-none">
                {/* Glowing card with enhanced effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-premium-accent/25 via-premium-purple/15 to-premium-blue/20 rounded-3xl border border-premium-accent/40 backdrop-blur-xl animate-glow shadow-2xl shadow-premium-accent/20"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-premium-accent/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-premium-purple/10 rounded-full blur-2xl"></div>
                
                {/* Content inside card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                  <div className="text-7xl mb-6 animate-float">🚀</div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-premium-accent to-premium-blue bg-clip-text text-transparent mb-3">Digital Transformation</h3>
                    <p className="light:text-light-text-secondary dark:text-gray-300 text-lg">Leading IT initiatives with innovation and excellence</p>
                    <div className="mt-6 flex justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-premium-accent animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-premium-blue animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-premium-purple animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
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
          <div className="text-center mb-16 animate-slideUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-premium-blue/10 border border-premium-blue/30 mb-6">
              <Zap size={16} className="text-premium-blue" />
              <span className="text-sm font-medium text-premium-blue">Professional Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="light:text-light-text dark:text-white">Core</span>
              <span className="bg-gradient-to-r from-premium-accent to-premium-blue bg-clip-text text-transparent"> Competencies</span>
            </h2>
            <p className="text-lg sm:text-xl light:text-light-text-secondary dark:text-gray-400 max-w-2xl mx-auto">Expertise across IT Service Management, Security, and Leadership with proven track record</p>
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
                className="group relative p-6 rounded-xl border border-premium-accent/20 bg-gradient-to-br light:from-light-bg-secondary/80 light:to-light-bg dark:from-premium-slate/50 dark:to-premium-darker hover:border-premium-accent/50 transition-all duration-300 light:hover:shadow-gray-200/50 dark:hover:shadow-premium-accent/20 hover:shadow-lg overflow-hidden animate-slideUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-premium-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`${feature.iconColor} mb-4 group-hover:scale-125 transition-transform duration-300 p-3 rounded-lg light:bg-light-border dark:bg-premium-slate/50 light:group-hover:bg-gray-200 dark:group-hover:bg-premium-slate/80 w-fit`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold light:text-light-text dark:text-white mb-2 group-hover:text-premium-accent transition-colors">{feature.title}</h3>
                  <p className="light:text-light-text-secondary dark:text-gray-400 text-sm light:group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl border border-premium-accent/40 light:bg-light-bg-secondary dark:bg-gradient-to-r from-premium-accent/15 via-premium-purple/10 to-premium-blue/15 backdrop-blur-xl p-12 text-center overflow-hidden animate-slideUp shadow-2xl light:shadow-gray-200/50 dark:shadow-premium-accent/10">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-premium-accent/10 via-transparent to-premium-blue/10 opacity-50"></div>
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-premium-accent/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-premium-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-premium-accent/20 border border-premium-accent/40 mb-6">
                <Sparkles size={16} className="text-premium-accent" />
                <span className="text-sm font-medium text-premium-accent">Let's Collaborate</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold light:text-light-text dark:text-white mb-4">Ready to Connect?</h2>
              <p className="text-lg sm:text-xl light:text-light-text-secondary dark:text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how I can contribute to your team's success and drive meaningful impact</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-premium-accent to-premium-blue rounded-lg font-semibold text-premium-darker hover:shadow-lg hover:shadow-premium-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Get In Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
