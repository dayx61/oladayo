import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const experienceData = [
  { year: '2014', level: 20 },
  { year: '2015', level: 35 },
  { year: '2017', level: 50 },
  { year: '2019', level: 70 },
  { year: '2021', level: 85 },
  { year: '2024', level: 95 }
];

const skillsData = [
  { name: 'IT Service Management', value: 95 },
  { name: 'Cybersecurity', value: 90 },
  { name: 'Leadership', value: 88 },
  { name: 'System Admin', value: 92 },
  { name: 'Technical Support', value: 96 }
];

const roleDistribution = [
  { name: 'Technical Support', value: 40 },
  { name: 'Team Leadership', value: 35 },
  { name: 'IT Consulting', value: 15 },
  { name: 'System Administration', value: 10 }
];

const COLORS = ['#00d9ff', '#7c3aed', '#0ea5e9', '#ffd700', '#00ff88'];

export default function Analytics() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8
      light:bg-light-bg light:text-light-text
      dark:bg-dark-bg dark:text-dark-text
      transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">Career Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Experience Growth */}
          <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-8 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 light:text-light-text dark:text-dark-text">Experience Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={experienceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                <XAxis dataKey="year" stroke="currentColor" opacity={0.5} />
                <YAxis stroke="currentColor" opacity={0.5} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--tooltip-bg)', border: '1px solid #00d9ff', color: '#fff' }} />
                <Line type="monotone" dataKey="level" stroke="#00d9ff" strokeWidth={3} dot={{ fill: '#00d9ff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Distribution */}
          <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-8 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 light:text-light-text dark:text-dark-text">Skills Proficiency</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                <XAxis dataKey="name" stroke="currentColor" opacity={0.5} angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="currentColor" opacity={0.5} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--tooltip-bg)', border: '1px solid #00d9ff', color: '#fff' }} />
                <Bar dataKey="value" fill="#00d9ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Role Distribution */}
        <div className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-8 mb-12 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 light:text-light-text dark:text-dark-text">Role Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={roleDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {roleDistribution.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: 'var(--tooltip-bg)', border: '1px solid #00d9ff', color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Years of Experience', value: '7+' },
            { label: 'Companies Worked', value: '6' },
            { label: 'Team Members Led', value: '7+' },
            { label: 'Users Supported', value: '800+' }
          ].map((metric, idx) => (
            <div key={idx} className="light:bg-light-bg-secondary light:border light:border-light-border dark:bg-dark-bg-secondary dark:border dark:border-dark-border rounded-xl p-6 text-center transition-all duration-300">
              <p className="light:text-light-text-secondary dark:text-dark-text-secondary text-sm mb-2">{metric.label}</p>
              <p className="text-4xl font-bold gradient-text">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
