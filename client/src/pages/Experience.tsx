import { Briefcase, CheckCircle } from 'lucide-react';

const experiences = [
  {
    company: 'Sectronics',
    position: 'System Admin/Technical Support',
    duration: 'September 2022 - May 2024 (1 year 9 months)',
    location: 'Cypress, Texas, United States',
    highlights: [
      'Supported Identity and Access management and User account lifecycle management',
      'Managed Servicedesk and Ticketing systems'
    ]
  },
  {
    company: 'Alibra AI',
    position: 'IT Consultant',
    duration: 'March 2021 - August 2021 (6 months)',
    location: 'Ibadan, Oyo, Nigeria',
    highlights: [
      'Led initiatives to bolster security posture by 90%',
      'Designed gamified cybersecurity training reducing phishing susceptibility from 80% to 20%',
      'Introduced secure dual-location access systems with MFA',
      'Executed comprehensive IT security overhaul with VPN deployment'
    ]
  },
  {
    company: 'Nigerian Breweries Plc',
    position: 'IT Service Desk Team Lead',
    duration: 'December 2019 - March 2021 (1 year 4 months)',
    location: 'Nigeria',
    highlights: [
      'Reduced incident resolution times by 50%',
      'Launched "First Aid for IT Devices" program',
      'Achieved 99% customer satisfaction rating',
      'Managed patch management across 1,500+ devices'
    ]
  },
  {
    company: 'TotalEnergies',
    position: 'IT Help Desk Team Lead',
    duration: 'January 2017 - December 2019 (3 years)',
    location: 'Nigeria',
    highlights: [
      'Led IT support operations for 800+ users',
      'Managed team of seven including interns',
      'Contributed to Office 365 migration',
      'Led Windows 7 to Windows 10 migration for 1,500 PCs'
    ]
  },
  {
    company: 'Wema Bank Plc',
    position: 'Onsite Technical Support',
    duration: 'August 2015 - January 2017 (1 year 6 months)',
    location: 'Ekiti - Ondo region, Nigeria',
    highlights: [
      'Provided first-line troubleshooting for hardware, software, and network issues',
      'Managed incident logging via Service Desk System',
      'Provided MS Office training and support documentation',
      'Facilitated onboarding and IT orientation'
    ]
  },
  {
    company: 'Life force international Nigeria',
    position: 'IT Support Technician / Web Administrator',
    duration: 'August 2014 - July 2015 (1 year)',
    location: 'Lagos',
    highlights: [
      'Managed multilevel marketing web platform',
      'Provided first-line support via phone and remote assistance',
      'Designed teaching standards for web platforms',
      'Motivated and built teams through continuous training'
    ]
  }
];

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-bold mb-12 gradient-text">Professional Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass p-8 rounded-xl border-l-4 border-blue-500 hover:border-purple-500 transition-smooth">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-blue-400" size={24} />
                  <h3 className="text-2xl font-bold">{exp.position}</h3>
                </div>
                <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
              </div>
            </div>

            <div className="mb-4 space-y-1">
              <p className="text-gray-400 text-sm">{exp.duration}</p>
              <p className="text-gray-400 text-sm">{exp.location}</p>
            </div>

            <div className="space-y-2">
              {exp.highlights.map((highlight, hidx) => (
                <div key={hidx} className="flex items-start gap-3">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 glass p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: '7+ Years', description: 'Experience in IT and Cybersecurity' },
            { title: '1,500+', description: 'PCs Successfully Migrated' },
            { title: '99%', description: 'Customer Satisfaction Rating' },
            { title: '60%', description: 'Phishing Susceptibility Reduction' },
            { title: '50%', description: 'Incident Resolution Time Improvement' },
            { title: '800+', description: 'Users Supported' }
          ].map((achievement, idx) => (
            <div key={idx} className="border-l-4 border-purple-500 pl-6">
              <p className="text-3xl font-bold gradient-text mb-2">{achievement.title}</p>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
