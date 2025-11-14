import { ArrowRight, Zap, Target, Users, TrendingUp, Shield, Rocket, CheckCircle } from 'lucide-react';
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

      {/* Hero Section - Top Company Style */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">


          {/* Main Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slideUp">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                <span className="light:text-light-text dark:text-white">Transform IT</span>
                <br />
                <span className="bg-gradient-to-r from-premium-accent via-premium-blue to-premium-purple bg-clip-text text-transparent">
                  Operations
                </span>
              </h1>

              <p className="text-xl sm:text-2xl light:text-light-text-secondary dark:text-gray-300 mb-12 leading-relaxed max-w-2xl font-light">
                7+ years of proven IT leadership. Transforming complex operations into streamlined, secure, and scalable systems for enterprise organizations.
              </p>



              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Years', value: '7+', icon: '📈' },
                  { label: 'Companies', value: '6', icon: '🏢' },
                  { label: 'Team Led', value: '7+', icon: '👥' }
                ].map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className="text-3xl font-bold text-premium-accent mb-1">{stat.value}</div>
                    <div className="text-xs light:text-light-text-secondary dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Interactive Cards */}
            <div className="relative h-96 lg:h-full flex items-center justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full h-full max-h-96 lg:max-h-none flex items-center justify-center">
                {/* Floating cards */}
                <div className="absolute w-64 h-40 bg-gradient-to-br from-premium-accent/20 to-premium-blue/10 rounded-2xl border border-premium-accent/40 backdrop-blur-xl p-6 shadow-2xl shadow-premium-accent/10 transform -rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer">
                  <div className="text-4xl mb-3">🔐</div>
                  <h3 className="font-bold light:text-light-text dark:text-white mb-1">Security First</h3>
                  <p className="text-sm light:text-light-text-secondary dark:text-gray-400">Enterprise-grade security</p>
                </div>

                <div className="absolute w-64 h-40 bg-gradient-to-br from-premium-purple/20 to-premium-blue/10 rounded-2xl border border-premium-purple/40 backdrop-blur-xl p-6 shadow-2xl shadow-premium-purple/10 transform rotate-3 hover:rotate-0 transition-transform duration-300 cursor-pointer -ml-32">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold light:text-light-text dark:text-white mb-1">High Performance</h3>
                  <p className="text-sm light:text-light-text-secondary dark:text-gray-400">Optimized operations</p>
                </div>

                <div className="absolute w-64 h-40 bg-gradient-to-br from-premium-blue/20 to-premium-accent/10 rounded-2xl border border-premium-blue/40 backdrop-blur-xl p-6 shadow-2xl shadow-premium-blue/10 transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer mt-32">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-bold light:text-light-text dark:text-white mb-1">Innovation</h3>
                  <p className="text-sm light:text-light-text-secondary dark:text-gray-400">Cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Core Capabilities - Unique Value */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-premium-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slideUp">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="light:text-light-text dark:text-white">What I</span>
              <span className="bg-gradient-to-r from-premium-accent to-premium-blue bg-clip-text text-transparent"> Deliver</span>
            </h2>
            <p className="text-xl light:text-light-text-secondary dark:text-gray-400 max-w-3xl mx-auto">Proven expertise in enterprise IT transformation, security, and operational excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Implement security frameworks that protect critical infrastructure and ensure compliance',
                features: ['MFA & Access Control', 'Security Audits', 'Incident Response']
              },
              {
                icon: Zap,
                title: 'Operations Excellence',
                description: 'Streamline IT operations for maximum efficiency, uptime, and cost optimization',
                features: ['SLA Management', 'Performance Tuning', 'Automation']
              },
              {
                icon: Users,
                title: 'Team Leadership',
                description: 'Build, mentor, and scale high-performing technical teams',
                features: ['Team Development', 'Knowledge Transfer', 'Mentorship']
              },
              {
                icon: Rocket,
                title: 'Digital Transformation',
                description: 'Guide organizations through modern IT infrastructure and cloud transitions',
                features: ['Cloud Migration', 'System Modernization', 'Process Automation']
              },
              {
                icon: Target,
                title: 'Strategic Planning',
                description: 'Develop IT strategies aligned with business objectives and growth goals',
                features: ['Roadmap Development', 'Technology Selection', 'Cost Optimization']
              },
              {
                icon: TrendingUp,
                title: 'Technical Support',
                description: 'Comprehensive support for 800+ users with 96% satisfaction rate',
                features: ['24/7 Support', 'User Training', 'Ticketing Systems']
              }
            ].map((capability, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-premium-accent/20 bg-gradient-to-br light:from-light-bg-secondary/80 light:to-light-bg dark:from-premium-slate/50 dark:to-premium-darker hover:border-premium-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-premium-accent/20 overflow-hidden animate-slideUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-premium-accent/5 to-premium-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4 p-3 rounded-lg light:bg-light-border dark:bg-premium-slate/50 light:group-hover:bg-gray-200 dark:group-hover:bg-premium-slate/80 w-fit transition-all">
                    <capability.icon size={32} className="text-premium-accent group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold light:text-light-text dark:text-white mb-3 group-hover:text-premium-accent transition-colors">{capability.title}</h3>
                  <p className="light:text-light-text-secondary dark:text-gray-400 mb-6 text-sm">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm light:text-light-text-secondary dark:text-gray-400">
                        <CheckCircle size={16} className="text-premium-accent flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-premium-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Impact Metrics */}
            <div className="animate-slideUp">
              <h2 className="text-5xl sm:text-6xl font-bold mb-8">
                <span className="light:text-light-text dark:text-white">Measurable</span>
                <br />
                <span className="bg-gradient-to-r from-premium-accent to-premium-blue bg-clip-text text-transparent">Impact</span>
              </h2>
              <p className="text-xl light:text-light-text-secondary dark:text-gray-300 mb-12">Real results delivered across enterprise organizations</p>

              <div className="space-y-6">
                {[
                  { metric: '90%', label: 'Security Improvement', detail: 'In implemented frameworks' },
                  { metric: '50%', label: 'Efficiency Gains', detail: 'Through process optimization' },
                  { metric: '800+', label: 'Users Supported', detail: '96% satisfaction rate' },
                  { metric: '7+', label: 'Team Members Led', detail: 'Across 6 organizations' }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 rounded-xl border border-premium-accent/20 hover:border-premium-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-premium-accent/10">
                    <div className="text-4xl font-bold text-premium-accent mb-2">{item.metric}</div>
                    <div className="text-lg font-semibold light:text-light-text dark:text-white mb-1">{item.label}</div>
                    <div className="text-sm light:text-light-text-secondary dark:text-gray-400">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Why Choose */}
            <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-5xl sm:text-6xl font-bold mb-8">
                <span className="light:text-light-text dark:text-white">Why</span>
                <br />
                <span className="bg-gradient-to-r from-premium-accent to-premium-blue bg-clip-text text-transparent">Choose Me</span>
              </h2>
              <p className="text-xl light:text-light-text-secondary dark:text-gray-300 mb-12">Proven track record of enterprise IT excellence</p>

              <div className="space-y-4">
                {[
                  'Enterprise experience across 6 leading organizations',
                  'CISA, SAP, IBM Watson certified professional',
                  'Proven leadership of high-performing technical teams',
                  'Strategic alignment of IT with business objectives',
                  'Hands-on expertise in security and compliance',
                  'Commitment to continuous learning and innovation'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 animate-slideUp" style={{ animationDelay: `${0.3 + idx * 0.05}s` }}>
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-premium-accent/20 border border-premium-accent/40">
                        <CheckCircle size={18} className="text-premium-accent" />
                      </div>
                    </div>
                    <div>
                      <p className="light:text-light-text-secondary dark:text-gray-300">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Powerful Closing */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl border border-premium-accent/40 light:bg-light-bg-secondary dark:bg-gradient-to-r from-premium-accent/15 via-premium-purple/10 to-premium-blue/15 backdrop-blur-xl p-16 text-center overflow-hidden animate-slideUp shadow-2xl light:shadow-gray-200/50 dark:shadow-premium-accent/20">
            <div className="absolute inset-0 bg-gradient-to-r from-premium-accent/10 via-transparent to-premium-blue/10 opacity-50"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-premium-accent/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-premium-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10">
              <h2 className="text-5xl sm:text-6xl font-bold light:text-light-text dark:text-white mb-6">Ready to Transform?</h2>
              <p className="text-xl sm:text-2xl light:text-light-text-secondary dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how I can drive IT excellence and strategic value for your organization
              </p>
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-premium-accent to-premium-blue rounded-lg font-semibold text-premium-darker hover:shadow-2xl hover:shadow-premium-accent/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Start a Project
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
