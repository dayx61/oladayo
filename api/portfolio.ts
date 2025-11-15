const portfolioData = {
  name: 'Oladayo Alabi',
  title: 'IT Service Management & Technical Support | Information Technology Security Operations',
  location: 'Philadelphia, Pennsylvania, United States',
  email: 'alabioladayoibrahim@hotmail.com',
  phone: '+1 267-957-4048',
  linkedin: 'https://www.linkedin.com/in/olaalabi53',
  summary: `As a versatile IT professional with over 7 years of experience in technical support, IT service management, and cybersecurity, I thrive on driving operational excellence, enhancing security frameworks, and delivering seamless user experiences.`,
  skills: [
    'Microsoft Entra ID',
    'Microsoft Intune',
    'Performance Improvement',
    'IT Service Management',
    'Cybersecurity',
    'Network Administration',
    'ServiceNow',
    'Windows Migration',
    'VPN Configuration',
    'Active Directory',
    'Incident Management',
    'SLA Compliance'
  ],
  certifications: [
    'SAP ERP Essential Training',
    'IBM Predictive Analytics Specialist',
    'CISA Cert Prep: 5 Information Asset Protection for IS Auditors',
    'CISA Cert Prep: 4 IT Operations, Maintenance, and Service Delivery for IS Auditors',
    'CISA Cert Prep: 3 Information Technology Life Cycle for IS Auditors'
  ],
  experience: [
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
    }
  ]
};

export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.status(200).json({
    success: true,
    data: portfolioData
  });
}
