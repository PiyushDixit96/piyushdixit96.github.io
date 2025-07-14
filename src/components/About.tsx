import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Award, Coffee } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React, TypeScript, Tailwind CSS, Next.js' },
    { icon: Database, title: 'Backend Development', description: 'Node.js, Python, PostgreSQL, MongoDB' },
    { icon: Smartphone, title: 'Mobile Development', description: 'React Native, Flutter, iOS, Android' },
    { icon: Globe, title: 'Web Technologies', description: 'HTML5, CSS3, JavaScript, REST APIs' },
    { icon: Award, title: 'UI/UX Design', description: 'Figma, Adobe XD, Responsive Design' },
    { icon: Coffee, title: 'DevOps & Tools', description: 'Git, Docker, AWS, CI/CD' },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Section background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/15 rounded-full filter blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-200/15 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-700'
          }`}>
            I'm a passionate full-stack developer with expertise in modern web technologies
            and a keen eye for user experience design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`${isDark ? 'glass-dark' : 'glass'} p-8 rounded-3xl hover-lift`}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                  alt="Piyush Dixit"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold mb-2">Piyush Dixit</h3>
                  <p className="text-gray-300 text-lg">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={`${isDark ? 'glass-dark' : 'glass'} p-8 rounded-3xl hover-lift`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                My Journey
              </h3>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-800'
              }`}>
                With over 5 years of experience in web development, I've worked on projects
                ranging from small business websites to large-scale applications. My passion
                lies in creating seamless user experiences and writing clean, maintainable code.
              </p>
              <p className={`text-lg leading-relaxed mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-800'
              }`}>
                I believe in continuous learning and staying up-to-date with the latest
                technologies. When I'm not coding, you can find me exploring new frameworks,
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Next.js', 'Tailwind CSS', 'Figma', 'Adobe XD', 'Git', 'HTML5', 'CSS3', 'Sass', 'Webpack', 'Vite', 'Jest', 'Cypress'].map((tech) => {
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
                      'Cypress': 'bg-gray-100 text-gray-800 border-gray-200'
                    };
                    return colors[technology] || 'bg-gray-100 text-gray-800 border-gray-200';
                  };
                  
                  return (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${isDark ? 'glass-dark' : 'glass'} p-8 rounded-2xl hover-lift card-float`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {skill.title}
                  </h3>
                </div>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;