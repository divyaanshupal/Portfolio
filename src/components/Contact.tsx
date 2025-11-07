import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_tftfwrd',
        'template_obi0q5s',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '-IuN9Wy0_QSnH9lRM'
      );
      

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl shadow-xl p-6 md:p-8 card-glow hover-card">
                <h3 className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start hover-list-item">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</h4>
                      <p className="text-base">+91 6387811379</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start hover-list-item">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</h4>
                      <p className="text-base break-words">divyanshuwork03@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start hover-list-item">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</h4>
                      <p className="text-base">Bhagalpur, Bihar, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-base font-medium mb-4 text-slate-700 dark:text-slate-300">
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/divyaanshupal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-800 text-white hover-social"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/divyaanshu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-800 text-white hover-social"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl p-6 md:p-8 text-white hover-card relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">Open to Opportunities</h3>
                <p className="mb-4">I'm currently looking for internship and collaboration opportunities in software development, particularly in Flutter, React, and full-stack development.</p>
                <p className="mb-4">Check out my recent projects:</p>
                <div className="space-y-2">

                <a 
                    href="https://github.com/divyaanshupal/RoutineS-Firebase" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white hover:text-indigo-200 transition-colors"
                  >
                    • Jeb-Kharch - Expense Tracker App
                  </a>
                  <a 
                    href="https://github.com/divyaanshupal/RoutineS-Firebase" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white hover:text-indigo-200 transition-colors"
                  >
                    • RoutineS - Firebase Project
                  </a>
                  <a 
                    href="https://github.com/divyaanshupal/Hangman-flutter-apk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white hover:text-indigo-200 transition-colors"
                  >
                    • Hangman Flutter App
                  </a>
                </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl shadow-xl p-6 md:p-8 card-glow hover-card">
                <h3 className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
                  Send Me a Message
                </h3>
                
                {status === 'success' ? (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-green-600 dark:text-green-400 mb-2">Message Sent!</h4>
                    <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="hover-input">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                    
                    <div className="hover-input">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                    
                    <div className="hover-input">
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium hover-button flex items-center justify-center"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;