import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Smartphone, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/4488678/pexels-photo-4488678.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/piyushdixit96/ecommerce-platform',
      demoUrl: 'https://ecommerce-demo.piyushdixit.dev',
      icon: Code,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/7691770/pexels-photo-7691770.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      githubUrl: 'https://github.com/piyushdixit96/task-manager',
      demoUrl: 'https://taskmanager-demo.piyushdixit.dev',
      icon: Database,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive charts, and personalized weather alerts.',
      image: 'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'PWA', 'CSS3'],
      githubUrl: 'https://github.com/piyushdixit96/weather-dashboard',
      demoUrl: 'https://weather-demo.piyushdixit.dev',
      icon: Globe,
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Social Media App',
      description: 'A modern social media platform with real-time messaging, photo sharing, and advanced privacy controls.',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
      githubUrl: 'https://github.com/piyushdixit96/social-media-app',
      demoUrl: 'https://social-demo.piyushdixit.dev',
      icon: Smartphone,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant powered by OpenAI API with context awareness and multi-language support.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'Tailwind CSS'],
      githubUrl: 'https://github.com/piyushdixit96/ai-chat-assistant',
      demoUrl: 'https://ai-chat-demo.piyushdixit.dev',
      icon: Code,
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      githubUrl: 'https://github.com/piyushdixit96/portfolio',
      demoUrl: 'https://piyushdixit96.github.io',
      icon: Globe,
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Section background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-200/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-yellow-200/15 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-700'
          }`}>
            A showcase of my recent work and personal projects, demonstrating
            various technologies and development approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${isDark ? 'glass-dark' : 'glass'} rounded-3xl overflow-hidden hover-lift group shadow-lg card-float`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <IconComponent size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => {
                      const getTechColor = (technology: string) => {
                        const colors: { [key: string]: string } = {
                          'React': 'bg-blue-100 text-blue-800 border-blue-200',
                          'TypeScript': 'bg-indigo-100 text-indigo-800 border-indigo-200',
                          'Node.js': 'bg-green-100 text-green-800 border-green-200',
                          'Python': 'bg-yellow-100 text-yellow-800 border-yellow-200',
                          'AWS': 'bg-orange-100 text-orange-800 border-orange-200',
                          'Docker': 'bg-cyan-100 text-cyan-800 border-cyan-200',
                          'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
                          'PostgreSQL': 'bg-blue-100 text-blue-800 border-blue-200',
                          'MongoDB': 'bg-green-100 text-green-800 border-green-200',
                          'Next.js': 'bg-gray-100 text-gray-800 border-gray-200',
                          'Tailwind CSS': 'bg-teal-100 text-teal-800 border-teal-200',
                          'Vue.js': 'bg-emerald-100 text-emerald-800 border-emerald-200',
                          'Angular': 'bg-red-100 text-red-800 border-red-200',
                          'Express': 'bg-gray-100 text-gray-800 border-gray-200',
                          'GraphQL': 'bg-pink-100 text-pink-800 border-pink-200',
                          'Redis': 'bg-red-100 text-red-800 border-red-200',
                          'Kubernetes': 'bg-blue-100 text-blue-800 border-blue-200',
                          'Firebase': 'bg-orange-100 text-orange-800 border-orange-200',
                          'Stripe': 'bg-purple-100 text-purple-800 border-purple-200',
                          'Figma': 'bg-purple-100 text-purple-800 border-purple-200',
                          'Adobe XD': 'bg-pink-100 text-pink-800 border-pink-200',
                          'Git': 'bg-orange-100 text-orange-800 border-orange-200',
                          'HTML5': 'bg-orange-100 text-orange-800 border-orange-200',
                          'CSS3': 'bg-blue-100 text-blue-800 border-blue-200',
                          'Sass': 'bg-pink-100 text-pink-800 border-pink-200',
                          'Webpack': 'bg-blue-100 text-blue-800 border-blue-200',
                          'Vite': 'bg-purple-100 text-purple-800 border-purple-200',
                          'Jest': 'bg-red-100 text-red-800 border-red-200',
                          'Cypress': 'bg-gray-100 text-gray-800 border-gray-200',
                          'React Native': 'bg-blue-100 text-blue-800 border-blue-200',
                          'Flutter': 'bg-cyan-100 text-cyan-800 border-cyan-200',
                          'iOS': 'bg-gray-100 text-gray-800 border-gray-200',
                          'Android': 'bg-green-100 text-green-800 border-green-200',
                          'Chart.js': 'bg-pink-100 text-pink-800 border-pink-200',
                          'OpenWeather API': 'bg-blue-100 text-blue-800 border-blue-200',
                          'PWA': 'bg-purple-100 text-purple-800 border-purple-200',
                          'Socket.io': 'bg-gray-100 text-gray-800 border-gray-200',
                          'AWS S3': 'bg-orange-100 text-orange-800 border-orange-200',
                          'OpenAI API': 'bg-green-100 text-green-800 border-green-200',
                          'Prisma': 'bg-indigo-100 text-indigo-800 border-indigo-200',
                          'Framer Motion': 'bg-purple-100 text-purple-800 border-purple-200'
                        };
                        return colors[technology] || 'bg-gray-100 text-gray-800 border-gray-200';
                      };
                      
                      return (
                      <span
                        key={techIndex}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                      );
                    })}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isDark
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-white/30 text-gray-800 hover:bg-white/40 border border-white/30'
                      }`}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r ${project.gradient} text-white hover:opacity-90`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;