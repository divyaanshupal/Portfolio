import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PixelCard from './PixelCard';
import { Mail, Phone, Github } from 'lucide-react';

//test test test

const ABOUT_COLORS = [
  {
    card: 'bg-blue-50 dark:bg-blue-900',
    title: 'text-blue-600 dark:text-blue-300',
    badgeBg: 'bg-blue-100 dark:bg-blue-800',
    badgeText: 'text-blue-700 dark:text-blue-200',
    badgeBorder: 'border-blue-100 dark:border-blue-700',
  },
  {
    card: 'bg-pink-50 dark:bg-pink-900',
    title: 'text-pink-600 dark:text-pink-300',
    badgeBg: 'bg-pink-100 dark:bg-pink-800',
    badgeText: 'text-pink-700 dark:text-pink-200',
    badgeBorder: 'border-pink-100 dark:border-pink-700',
  },
  {
    card: 'bg-yellow-50 dark:bg-yellow-900',
    title: 'text-yellow-600 dark:text-yellow-300',
    badgeBg: 'bg-yellow-100 dark:bg-yellow-800',
    badgeText: 'text-yellow-700 dark:text-yellow-200',
    badgeBorder: 'border-yellow-100 dark:border-yellow-700',
  },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/50 to-transparent dark:via-indigo-950/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="section-title mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="glass-card rounded-2xl shadow-2xl p-8 md:p-10 card-glow hover-card">
              <div className="relative z-10">
                <p 
                  className="text-base md:text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300"
                >
                  I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Computer Science and Engineering</span> student at <span className="font-semibold text-purple-600 dark:text-purple-400">Indian Institute of Information Technology Bhagalpur</span> with a passion for software development and problem-solving. 
                </p>
                <p 
                  className="text-base md:text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300"
                >
                  Currently working as a <span className="font-semibold text-pink-600 dark:text-pink-400">Flutter Developer Intern</span> at Medhwan, I'm developing an EdTech app from scratch, handling both UI development and logic implementation. My experience spans across mobile app development, competitive programming, and social impact initiatives.
                </p>
                <p 
                  className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  As the founder of <span className="font-semibold text-cyan-600 dark:text-cyan-400">Unnati Welfare Society</span>, I've led efforts to provide digital education to underprivileged students, growing our team to <span className="font-bold">130+ members</span> and impacting over <span className="font-bold">1500 students</span>. I'm passionate about leveraging technology to create meaningful solutions that positively impact communities.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact & Interests Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl shadow-xl p-6 md:p-8 card-glow hover-card"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-center gap-3 hover-list-item p-2 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                    <Mail size={20} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 block">Email</span>
                    <a href="mailto:divyanshuwork03@gmail.com" className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      divyanshuwork03@gmail.com
                    </a>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 hover-list-item p-2 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <Phone size={20} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 block">Phone</span>
                    <a href="tel:+916387811379" className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      +91 6387811379
                    </a>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 hover-list-item p-2 rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30">
                    <Github size={20} className="text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 block">GitHub</span>
                    <a href="https://github.com/divyaanshupal" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                      @divyaanshupal
                    </a>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl shadow-xl p-6 md:p-8 card-glow hover-card"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Mobile Development', 'Competitive Programming', 'Education', 'Problem Solving', 'Social Impact'].map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 hover-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;