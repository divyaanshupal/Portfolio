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
            {educationData.map((edu, index) => {
              const color = EDU_COLORS[index % EDU_COLORS.length];
              return (
                <PixelCard
                  key={index}
                  variant="pink"
                  className={`rounded-xl shadow-lg p-6 ${color.card}`}
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
                </PixelCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;