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
            {skillCategories.map((category, index) => {
              const color = SKILL_COLORS[index % SKILL_COLORS.length];
              return (
                <PixelCard
                  key={index}
                  variant="pink"
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`flex items-center gap-3 mb-4`}>
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${color.iconBg}`}>
                      {React.cloneElement(category.icon, { className: `${color.iconText}` })}
                    </span>
                    <h3 className={`text-xl font-extrabold ${color.title}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${color.badgeBg} ${color.badgeText} ${color.badgeBorder} border`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </PixelCard>
              );
            })}
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