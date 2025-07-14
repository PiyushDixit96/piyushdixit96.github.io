import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Send, ArrowDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/piyushdixit96', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/piyushdixit96', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/piyushdixit96', label: 'Twitter' },
    { icon: Send, href: 'https://t.me/piyushdixit96', label: 'Telegram' },
  ];

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-white/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-300/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-300/15 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${isDark ? 'glass-dark' : 'glass'} p-8 sm:p-12 lg:p-16 rounded-3xl max-w-5xl mx-auto hover-lift`}
            className={`${isDark ? 'glass-dark' : 'glass'} p-8 sm:p-12 lg:p-16 rounded-3xl max-w-5xl mx-auto hover-lift card-glow`}
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className={isDark ? 'text-white' : 'text-gray-800'}>
                Hi, I'm{' '}
              </span>
              <span className="gradient-text">Piyush Dixit</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl sm:text-2xl lg:text-3xl mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`text-lg sm:text-xl mb-10 max-w-2xl mx-auto ${
                isDark ? 'text-gray-400' : 'text-gray-800'
              }`}
            >
              Crafting digital experiences with modern technologies.
              Passionate about clean code, innovative solutions, and user-centered design.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center space-x-6 mb-12"
            >
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-3 rounded-full transition-all duration-300 hover-lift ${
                      isDark
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-black/10 text-gray-800 hover:bg-black/20'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={24} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover-lift animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Explore My Work</span>
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-blue-500 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;