import { Award, MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-bold mb-12 gradient-text">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass p-8 rounded-xl">
          <MapPin className="text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <p className="text-gray-400">Philadelphia, Pennsylvania, United States</p>
        </div>
        <div className="glass p-8 rounded-xl">
          <Mail className="text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-gray-400">alabioladayoibrahim@hotmail.com</p>
        </div>
        <div className="glass p-8 rounded-xl">
          <Phone className="text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-gray-400">+1 267-957-4048</p>
        </div>
      </div>

      <div className="glass p-12 rounded-xl mb-12">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Professional Summary</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          As a versatile IT professional with over 7 years of experience in technical support, IT service management, and cybersecurity, I thrive on driving operational excellence, enhancing security frameworks, and delivering seamless user experiences.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          I am passionate about combining technical expertise and proactive security measures to resolve complex IT challenges and safeguard digital environments. My career is built on adaptability, team leadership, and a commitment to continuous improvement.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Whether overseeing a Windows 7 to 10 migration for 1,500 PCs, leading service desk teams to achieve SLA compliance, or designing gamified cybersecurity training programs that reduced phishing susceptibility by 60%, I consistently deliver measurable results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 gradient-text">Education</h2>
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Master's Degree, Computer and Information Systems Security/Information Assurance</h3>
              <p className="text-blue-400 font-semibold">Wilmington University</p>
              <p className="text-gray-400 text-sm">September 2022 - December 2024</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Master's Degree, Cybersecurity</h3>
              <p className="text-blue-400 font-semibold">Drexel University</p>
              <p className="text-gray-400 text-sm">September 2021 - June 2022</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Bachelor's Degree, Information Technology</h3>
              <p className="text-blue-400 font-semibold">Methodist University Ghana</p>
              <p className="text-gray-400 text-sm">September 2010 - June 2014</p>
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
              <div key={idx} className="glass p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 gradient-text">Connect With Me</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/olaalabi53"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-smooth"
          >
            <Linkedin size={20} /> LinkedIn Profile
          </a>
          <a
            href="mailto:alabioladayoibrahim@hotmail.com"
            className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-smooth"
          >
            <Mail size={20} /> Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
