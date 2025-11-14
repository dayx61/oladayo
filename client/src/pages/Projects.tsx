import { ExternalLink, Github, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  rating: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Premium portfolio with AI chatbot, light/dark theme, and modern design inspired by top tech companies.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Express', 'OpenRouter AI'],
    image: '🌐',
    link: 'https://oladayo.vercel.app',
    github: 'https://github.com/dayx61/oladayo',
    rating: 5
  },
  {
    id: 2,
    title: 'IT Service Management System',
    description: 'Comprehensive ITIL-based service management platform for enterprise IT operations.',
    tags: ['ITIL', 'Service Management', 'Operations', 'Process Automation'],
    image: '⚙️',
    rating: 4.8
  },
  {
    id: 3,
    title: 'Cybersecurity Dashboard',
    description: 'Real-time security monitoring and threat detection dashboard for enterprise networks.',
    tags: ['Security', 'Monitoring', 'Analytics', 'Real-time'],
    image: '🔒',
    rating: 4.9
  },
  {
    id: 4,
    title: 'Team Collaboration Platform',
    description: 'Internal platform for team communication, project tracking, and resource management.',
    tags: ['Collaboration', 'Project Management', 'Communication'],
    image: '👥',
    rating: 4.7
  },
  {
    id: 5,
    title: 'Infrastructure Automation',
    description: 'Automated infrastructure provisioning and management system for cloud environments.',
    tags: ['Cloud', 'Automation', 'Infrastructure', 'DevOps'],
    image: '☁️',
    rating: 4.8
  },
  {
    id: 6,
    title: 'Performance Analytics',
    description: 'Advanced analytics platform for tracking system performance and user behavior.',
    tags: ['Analytics', 'Data Visualization', 'Performance', 'Metrics'],
    image: '📊',
    rating: 4.6
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8
      light:bg-light-bg light:text-light-text
      dark:bg-dark-bg dark:text-dark-text
      transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-slideUp">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="light:text-light-text dark:text-dark-text">Featured </span>
            <span className="bg-gradient-to-r from-premium-accent via-premium-blue to-premium-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl light:text-light-text-secondary dark:text-dark-text-secondary">
            Showcase of innovative solutions and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group animate-slideUp transition-all duration-300
                light:bg-light-bg-secondary light:border light:border-light-border light:hover:border-premium-accent light:hover:shadow-lg
                dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:hover:border-premium-accent dark:hover:shadow-lg dark:hover:shadow-premium-accent/20
                rounded-xl p-6 overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-2 light:text-light-text dark:text-dark-text">
                {project.title}
              </h3>
              <p className="text-sm mb-4 light:text-light-text-secondary dark:text-dark-text-secondary">
                {project.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(project.rating) ? 'fill-premium-gold text-premium-gold' : 'text-gray-400'}
                  />
                ))}
                <span className="text-sm light:text-light-text-secondary dark:text-dark-text-secondary ml-2">
                  {project.rating}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full
                      light:bg-light-border light:text-light-text
                      dark:bg-premium-accent/20 dark:text-premium-accent
                      transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t light:border-light-border dark:border-dark-border">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                      light:bg-light-bg light:text-light-text light:hover:bg-light-border
                      dark:bg-premium-accent/20 dark:text-premium-accent dark:hover:bg-premium-accent/30
                      transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                      light:bg-light-bg light:text-light-text light:hover:bg-light-border
                      dark:bg-premium-accent/20 dark:text-premium-accent dark:hover:bg-premium-accent/30
                      transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-slideUp">
          <p className="text-lg light:text-light-text-secondary dark:text-dark-text-secondary mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold
              bg-gradient-to-r from-premium-accent to-premium-blue
              text-premium-darker
              hover:shadow-lg hover:shadow-premium-accent/50
              transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
