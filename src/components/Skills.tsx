import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Dart"]
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "React Native", "Android Studio", "Firebase"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Docker", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="relative z-10">Skills</span>
            <motion.span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-indigo-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-xl shadow-lg p-6 hover-card shine"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.h3 
                  className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                >
                  {category.title}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100/50 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm hover-tag"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-6 text-center">Proficiency Highlights</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Flutter Development</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Data Structures & Algorithms</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Problem Solving</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>UI/UX Design</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;