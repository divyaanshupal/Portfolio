import React from 'react';
import { motion } from 'framer-motion';
import PixelCard from './PixelCard';

const EDU_COLORS = [
  {
    card: 'Light:bg-indigo-50',
    degree: 'text-yellow-600 dark:text-yellow-300',
    institution: 'text-yellow-700 dark:text-yellow-200',
    duration: 'text-yellow-500 dark:text-yellow-300',
    details: 'text-yellow-800 dark:text-yellow-100',
  },
  {
    card: 'Light:bg-indigo-50',
    degree: 'text-yellow-600 dark:text-yellow-300',
    institution: 'text-yellow-700 dark:text-yellow-200',
    duration: 'text-yellow-500 dark:text-yellow-300',
    details: 'text-yellow-800 dark:text-yellow-100',
  },
];

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
      duration: "2023 - 2027",
      details: "Currently pursuing my undergraduate degree with a focus on software development and problem-solving."
    },
    {
      degree: "Higher Secondary Education",
      institution: "KR Education Center, Kanpur",
      duration: "2019 - 2021",
      details: "Completed with distinction, focusing on Physics, Chemistry, and Mathematics."
    }
  ];

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/50 to-transparent dark:via-cyan-950/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Education
          </motion.h2>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {educationData.map((edu, index) => {
              const color = EDU_COLORS[index % EDU_COLORS.length];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card rounded-2xl shadow-xl p-6 md:p-8 card-glow hover-card mb-6"
                >
                  <motion.h3 
                    className={`text-xl font-extrabold mb-2 ${color.degree}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  >
                    {edu.degree}
                  </motion.h3>
                  <motion.p 
                    className={`text-lg font-medium mb-2 ${color.institution}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.1 }}
                  >
                    {edu.institution}
                  </motion.p>
                  <motion.p 
                    className={`mb-3 ${color.duration}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                  >
                    {edu.duration}
                  </motion.p>
                  <motion.p 
                    className={`${color.details}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.3 }}
                  >
                    {edu.details}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;