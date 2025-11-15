import { Award, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8
      light:bg-light-bg light:text-light-text
      dark:bg-dark-bg dark:text-dark-text
      transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-8 transition-all duration-300">
            <MapPin className="text-premium-accent mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text">Location</h3>
            <p className="light:text-light-text-secondary dark:text-dark-text-secondary">Philadelphia, Pennsylvania, United States</p>
          </div>
          <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-8 transition-all duration-300">
            <Mail className="text-premium-accent mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text">Email</h3>
            <p className="light:text-light-text-secondary dark:text-dark-text-secondary">dayx61@gmail.com</p>
          </div>
          <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-8 transition-all duration-300">
            <Phone className="text-premium-accent mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text">Phone</h3>
            <p className="light:text-light-text-secondary dark:text-dark-text-secondary">+1 267-957-4048</p>
          </div>
        </div>

        <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-12 mb-12 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Professional Summary</h2>
          <p className="light:text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
            As a versatile IT professional with over 7 years of experience in technical support, IT service management, and cybersecurity, I thrive on driving operational excellence, enhancing security frameworks, and delivering seamless user experiences.
          </p>
          <p className="light:text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
            I am passionate about combining technical expertise and proactive security measures to resolve complex IT challenges and safeguard digital environments. My career is built on adaptability, team leadership, and a commitment to continuous improvement.
          </p>
          <p className="light:text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
            Whether overseeing a Windows 7 to 10 migration for 1,500 PCs, leading service desk teams to achieve SLA compliance, or designing gamified cybersecurity training programs that reduced phishing susceptibility by 60%, I consistently deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text">Education</h2>
            <div className="space-y-6">
              <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-lg p-6 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text">Master's Degree, Computer and Information Systems Security/Information Assurance</h3>
                <p className="text-premium-accent font-semibold">Wilmington University</p>
                <p className="light:text-light-text-secondary dark:text-dark-text-secondary text-sm">September 2022 - December 2024</p>
              </div>
              <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-lg p-6 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text">Master's Degree, Cybersecurity</h3>
                <p className="text-premium-accent font-semibold">Drexel University</p>
                <p className="light:text-light-text-secondary dark:text-dark-text-secondary text-sm">September 2021 - June 2022</p>
              </div>
              <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-lg p-6 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text">Bachelor's Degree, Information Technology</h3>
                <p className="text-premium-accent font-semibold">Methodist University Ghana</p>
                <p className="light:text-light-text-secondary dark:text-dark-text-secondary text-sm">September 2010 - June 2014</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-2">
              <Award size={32} /> Certifications
            </h2>
            <div className="space-y-3">
              {[
                'SAP ERP Essential Training',
                'IBM Predictive Analytics Specialist',
                'CISA Cert Prep: 5 Information Asset Protection for IS Auditors',
                'CISA Cert Prep: 4 IT Operations, Maintenance, and Service Delivery for IS Auditors',
                'CISA Cert Prep: 3 Information Technology Life Cycle for IS Auditors'
              ].map((cert, idx) => (
                <div key={idx} className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-lg p-4 border-l-4 border-premium-accent transition-all duration-300">
                  <p className="light:text-light-text-secondary dark:text-dark-text-secondary">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-8 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Connect With Me</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/olaalabi53"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-premium-accent to-premium-blue text-premium-darker hover:shadow-lg hover:shadow-premium-accent/50 rounded-lg transition-all duration-300 font-semibold"
            >
              <Linkedin size={20} /> LinkedIn Profile
            </a>
            <a
              href="mailto:dayx61@gmail.com"
              className="flex items-center gap-2 px-6 py-3 light:border light:border-light-border light:text-light-text light:hover:bg-light-bg-secondary dark:border dark:border-dark-border dark:text-dark-text dark:hover:bg-dark-bg-secondary rounded-lg transition-all duration-300 font-semibold"
            >
              <Mail size={20} /> Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
