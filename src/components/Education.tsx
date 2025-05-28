import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
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

  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Indian Institute of Information Technology Bhagalpur",
      duration: "2021 - 2025",
      details: "Currently pursuing my undergraduate degree with a focus on software development and problem-solving."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School, Bokaro",
      duration: "2019 - 2021",
      details: "Completed with distinction, focusing on Physics, Chemistry, and Mathematics."
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="relative z-10">Education</span>
            <motion.span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-indigo-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
          </motion.h2>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-xl shadow-lg p-6 hover-card shine"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                >
                  {edu.degree}
                </motion.h3>
                <motion.p 
                  className="text-lg font-medium mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.1 }}
                >
                  {edu.institution}
                </motion.p>
                <motion.p 
                  className="text-slate-600 dark:text-slate-400 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                >
                  {edu.duration}
                </motion.p>
                <motion.p 
                  className="text-slate-700 dark:text-slate-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.3 }}
                >
                  {edu.details}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;