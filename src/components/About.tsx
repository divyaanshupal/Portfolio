import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="relative z-10">About Me</span>
            <motion.span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-indigo-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
          </motion.h2>
          
          <motion.div 
            className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-xl shadow-lg p-8 mb-8 hover-card shine"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              I'm a Computer Science and Engineering student at Indian Institute of Information Technology Bhagalpur with a passion for software development and problem-solving. 
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              Currently working as a Flutter Developer Intern at Medhwan, I'm developing an EdTech app from scratch, handling both UI development and logic implementation. My experience spans across mobile app development, competitive programming, and social impact initiatives.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed"
              variants={itemVariants}
            >
              As the founder of Unnati Welfare Society, I've led efforts to provide digital education to underprivileged students, growing our team to 130+ members and impacting over 1500 students. I'm passionate about leveraging technology to create meaningful solutions that positively impact communities.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-xl shadow-lg p-6 hover-card shine"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Contact Info</h3>
              <ul className="space-y-3">
                <motion.li 
                  className="hover-list-item"
                  whileHover={{ x: 10 }}
                >
                  <span className="font-medium">Email:</span> divyanshuwork03@gmail.com
                </motion.li>
                <motion.li 
                  className="hover-list-item"
                  whileHover={{ x: 10 }}
                >
                  <span className="font-medium">Phone:</span> +91 6387811379
                </motion.li>
                <motion.li 
                  className="hover-list-item"
                  whileHover={{ x: 10 }}
                >
                  <span className="font-medium">GitHub:</span> @divyaanshupal
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-xl shadow-lg p-6 hover-card shine"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Mobile Development', 'Competitive Programming', 'Education', 'Problem Solving', 'Social Impact'].map((interest, index) => (
                  <motion.span
                    key={interest}
                    className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm hover-tag"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
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