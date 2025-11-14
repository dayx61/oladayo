import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-5xl font-bold mb-12 gradient-text">Career Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Experience Growth */}
        <div className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Experience Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={experienceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #3b82f6' }} />
              <Line type="monotone" dataKey="level" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Distribution */}
        <div className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Skills Proficiency</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" angle={-45} textAnchor="end" height={100} />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #3b82f6' }} />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Role Distribution */}
      <div className="glass p-8 rounded-xl mb-12">
        <h2 className="text-2xl font-bold mb-6">Role Distribution</h2>
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
              {roleDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #3b82f6' }} />
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
          <div key={idx} className="glass p-6 rounded-xl text-center">
            <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
            <p className="text-4xl font-bold gradient-text">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
