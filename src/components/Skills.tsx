import React from 'react';
import { motion } from 'framer-motion';
import PixelCard from './PixelCard';
import { Code, Globe, Smartphone, Settings } from 'lucide-react';

const SKILL_COLORS = [
  {
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    iconText: 'text-blue-500 dark:text-blue-300',
    title: 'text-blue-600 dark:text-blue-300',
    badgeBg: 'bg-blue-50 dark:bg-blue-800',
    badgeText: 'text-blue-700 dark:text-blue-200',
    badgeBorder: 'border-blue-100 dark:border-blue-700',
  },
  {
    iconBg: 'bg-pink-100 dark:bg-pink-900',
    iconText: 'text-pink-500 dark:text-pink-300',
    title: 'text-pink-600 dark:text-pink-300',
    badgeBg: 'bg-pink-50 dark:bg-pink-800',
    badgeText: 'text-pink-700 dark:text-pink-200',
    badgeBorder: 'border-pink-100 dark:border-pink-700',
  },
  {
    iconBg: 'bg-yellow-100 dark:bg-yellow-900',
    iconText: 'text-yellow-500 dark:text-yellow-300',
    title: 'text-yellow-600 dark:text-yellow-300',
    badgeBg: 'bg-yellow-50 dark:bg-yellow-800',
    badgeText: 'text-yellow-700 dark:text-yellow-200',
    badgeBorder: 'border-yellow-100 dark:border-yellow-700',
  },
  {
    iconBg: 'bg-green-100 dark:bg-green-900',
    iconText: 'text-green-500 dark:text-green-300',
    title: 'text-green-600 dark:text-green-300',
    badgeBg: 'bg-green-50 dark:bg-green-800',
    badgeText: 'text-green-700 dark:text-green-200',
    badgeBorder: 'border-green-100 dark:border-green-700',
  },
];

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
      icon: <Code size={28} />,
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Dart"]
    },
    {
      title: "Web Development",
      icon: <Globe size={28} />,
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={28} />,
      skills: ["Flutter", "React Native", "Android Studio", "Firebase"]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings size={28} />,
      skills: ["Git", "GitHub", "VS Code", "Docker", "PostgreSQL", "MongoDB"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-950/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Skills
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skillCategories.map((category, index) => {
              const color = SKILL_COLORS[index % SKILL_COLORS.length];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card rounded-2xl shadow-xl p-6 md:p-8 card-glow hover-card"
                >
                  <div className={`flex items-center gap-4 mb-6`}>
                    <motion.span 
                      className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl ${color.iconBg} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {React.cloneElement(category.icon, { className: `${color.iconText}`, size: 28 })}
                    </motion.span>
                    <h3 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${color.title.replace('text-', 'from-').replace('dark:text-', 'dark:from-')} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${color.badgeBg} ${color.badgeText} ${color.badgeBorder} border hover-tag`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            className="mt-12 md:mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-10 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Proficiency Highlights</h3>
              <div className="space-y-6">
                {[
                  { skill: 'Flutter Development', percentage: 90 },
                  { skill: 'Data Structures & Algorithms', percentage: 85 },
                  { skill: 'Problem Solving', percentage: 88 },
                  { skill: 'UI/UX Design', percentage: 75 }
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold text-lg">{item.skill}</span>
                      <span className="font-bold text-xl">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div 
                        className="bg-gradient-to-r from-white to-white/90 h-3 rounded-full shadow-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;