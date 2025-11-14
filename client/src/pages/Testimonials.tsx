import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CTO',
    company: 'Tech Solutions Inc',
    image: '👨‍💼',
    text: 'Oladayo\'s IT leadership transformed our operations. His strategic approach and technical expertise significantly improved our service delivery.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Director of Operations',
    company: 'Global Enterprises',
    image: '👩‍💼',
    text: 'Working with Oladayo on our digital transformation was a game-changer. His team management skills and attention to detail are exceptional.',
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'VP Technology',
    company: 'Innovation Labs',
    image: '👨‍💻',
    text: 'Oladayo brought a fresh perspective to our IT challenges. His problem-solving abilities and leadership style are truly outstanding.',
    rating: 5
  },
  {
    id: 4,
    name: 'Emma Davis',
    role: 'Project Manager',
    company: 'Digital Ventures',
    image: '👩‍💻',
    text: 'I had the pleasure of working with Oladayo on several critical projects. His expertise in ITSM and cybersecurity is unmatched.',
    rating: 5
  },
  {
    id: 5,
    name: 'David Wilson',
    role: 'Head of IT',
    company: 'Enterprise Solutions',
    image: '👨‍🔧',
    text: 'Oladayo\'s ability to bridge the gap between technical teams and business stakeholders is remarkable. Highly recommended!',
    rating: 5
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'CEO',
    company: 'StartUp Innovations',
    image: '👩‍🏫',
    text: 'As a startup, we needed someone who could scale our IT infrastructure. Oladayo delivered beyond expectations.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8
      light:bg-light-bg light:text-light-text
      dark:bg-dark-bg dark:text-dark-text
      transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="light:text-light-text dark:text-dark-text">What People </span>
            <span className="bg-gradient-to-r from-premium-accent via-premium-blue to-premium-purple bg-clip-text text-transparent">
              Say
            </span>
          </h1>
          <p className="text-xl light:text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Testimonials from colleagues, clients, and team members
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="group animate-slideUp transition-all duration-300
                light:bg-light-bg-secondary light:border light:border-light-border light:hover:border-premium-accent light:hover:shadow-lg
                dark:bg-dark-bg-secondary dark:border dark:border-dark-border dark:hover:border-premium-accent dark:hover:shadow-lg dark:hover:shadow-premium-accent/20
                rounded-xl p-6 relative overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity" size={40} />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-premium-gold text-premium-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="light:text-light-text-secondary dark:text-dark-text-secondary mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t light:border-light-border dark:border-dark-border">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold light:text-light-text dark:text-dark-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm light:text-light-text-secondary dark:text-dark-text-secondary">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'Happy Clients', value: '50+' },
            { label: 'Team Members Led', value: '7+' },
            { label: 'Projects Completed', value: '100+' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-xl animate-slideUp
                light:bg-light-bg-secondary light:border light:border-light-border
                dark:bg-dark-bg-secondary dark:border dark:border-dark-border"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl font-bold text-premium-accent mb-2">
                {stat.value}
              </div>
              <p className="light:text-light-text-secondary dark:text-dark-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slideUp">
          <p className="text-lg light:text-light-text-secondary dark:text-dark-text-secondary mb-6">
            Ready to work together?
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
