import { Star } from 'lucide-react';

const skillCategories = [
  {
    category: 'IT Service Management',
    skills: ['ServiceNow', 'Ticketing Systems', 'SLA Compliance', 'Incident Management', 'Asset Management']
  },
  {
    category: 'Security & Compliance',
    skills: ['Microsoft Entra ID', 'Microsoft Intune', 'VPN Configuration', 'Active Directory', 'CISA Compliance']
  },
  {
    category: 'Infrastructure',
    skills: ['Windows Migration', 'Office 365', 'Network Administration', 'Hardware Maintenance', 'System Administration']
  },
  {
    category: 'Leadership & Soft Skills',
    skills: ['Team Leadership', 'Performance Improvement', 'User Training', 'Problem Solving', 'Communication']
  },
  {
    category: 'Specialized Skills',
    skills: ['Cybersecurity', 'Phishing Simulation', 'IT Security Overhaul', 'Patch Management', 'Vendor Management']
  },
  {
    category: 'Certifications',
    skills: ['SAP ERP', 'IBM Predictive Analytics', 'CISA Certification', 'Master\'s in Cybersecurity', 'Master\'s in Information Assurance']
  }
];

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-bold mb-12 gradient-text">Skills & Expertise</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass p-8 rounded-xl hover:border-blue-500/50 transition-smooth">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Star className="text-yellow-400" size={24} />
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sidx) => (
                <span
                  key={sidx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/50 rounded-full text-sm font-medium hover:border-purple-500 transition-smooth"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Proficiency Levels</h2>
        <div className="space-y-6">
          {[
            { skill: 'IT Service Management', level: 95 },
            { skill: 'Cybersecurity & Compliance', level: 90 },
            { skill: 'Team Leadership', level: 88 },
            { skill: 'System Administration', level: 92 },
            { skill: 'Technical Support', level: 96 },
            { skill: 'Security Operations', level: 89 }
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{item.skill}</span>
                <span className="text-blue-400">{item.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
