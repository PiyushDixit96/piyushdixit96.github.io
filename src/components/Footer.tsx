import React from 'react';
import { Heart, Code, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/piyushdixit96', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/piyushdixit96', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/piyushdixit96', label: 'Twitter' },
    { icon: Send, href: 'https://t.me/piyushdixit96', label: 'Telegram' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t relative ${
      isDark 
        ? 'border-white/10' 
        : 'border-black/10'
    }`}>
      {/* Footer background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-purple-200/10 rounded-full filter blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto pt-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className={`text-2xl font-bold gradient-text mb-4`}>
              Piyush Dixit
            </h3>
            <p className={`text-lg mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}>
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className={`${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-colors duration-200 ${
                      isDark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-700 hover:text-gray-800'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Connect
            </h4>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-3 rounded-lg transition-all duration-200 ${
                      isDark
                        ? 'text-gray-400 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-gray-800 hover:bg-white/20'
                    }`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-16 pt-10 border-t ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-center md:text-left ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}>
              © 2024 Piyush Dixit. All rights reserved.
            </p>
            <div className={`flex items-center mt-4 md:mt-0 ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}>
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500" />
              <span>and</span>
              <Code size={16} className="mx-2 text-blue-500" />
              <span>in React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;