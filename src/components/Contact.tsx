import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'piyushdixit96@gmail.com',
      href: 'mailto:piyushdixit96@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9876543210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/piyushdixit96', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/piyushdixit96', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/piyushdixit96', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://t.me/piyushdixit96', label: 'Telegram' },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Section background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-16 w-56 h-56 bg-green-200/15 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-blue-200/15 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-700'
          }`}>
            I'm always open to discussing new opportunities and interesting projects.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className={`${isDark ? 'glass-dark' : 'glass'} p-10 rounded-3xl hover-lift shadow-lg card-float`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Let's Connect
              </h3>
              <p className={`text-lg mb-8 ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                Feel free to reach out if you have any questions, want to collaborate,
                or just want to say hello. I'll get back to you as soon as possible!
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      className={`flex items-center p-6 rounded-lg transition-all duration-200 shadow-lg border border-blue-500 ${
                        isDark
                          ? 'bg-white/5 hover:bg-white/10'
                          : 'bg-black/5 hover:bg-black/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-6 shadow-lg">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className={`font-medium ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          {info.title}
                        </h4>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`text-lg font-medium mb-4 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  Follow Me
                </h4>
                <div className="flex space-x-6">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className={`p-4 rounded-lg transition-all duration-200 shadow-lg border border-blue-500 ${
                          isDark
                            ? 'bg-white/10 text-white hover:bg-white/20'
                            : 'bg-white/30 text-gray-800 hover:bg-white/40 border border-white/30'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`${isDark ? 'glass-dark' : 'glass'} p-10 rounded-3xl hover-lift shadow-lg card-glow`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 rounded-lg border border-blue-500 transition-all duration-200 shadow-lg ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-white/10'
                        : 'bg-white/20 border-white/30 text-gray-800 placeholder-gray-600 focus:border-blue-500 focus:bg-white/30'
                    }`}
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 rounded-lg border border-blue-500 transition-all duration-200 shadow-lg ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-white/10'
                        : 'bg-white/20 border-white/30 text-gray-800 placeholder-gray-600 focus:border-blue-500 focus:bg-white/30'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-6 py-4 rounded-lg border border-blue-500 transition-all duration-200 resize-none shadow-lg ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-white/10'
                        : 'bg-white/20 border-white/30 text-gray-800 placeholder-gray-600 focus:border-blue-500 focus:bg-white/30'
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover-lift shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;