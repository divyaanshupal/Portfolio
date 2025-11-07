import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import PixelCard from './PixelCard';

const PROJECT_COLORS = [
  {
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    iconText: 'text-blue-500 dark:text-blue-300',
    titleGradient: 'from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400',
    badgeBg: 'bg-blue-50 dark:bg-blue-800',
    badgeText: 'text-blue-700 dark:text-blue-200',
    badgeBorder: 'border-blue-100 dark:border-blue-700',
    link: 'text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400',
  },
  {
    iconBg: 'bg-pink-100 dark:bg-pink-900',
    iconText: 'text-pink-500 dark:text-pink-300',
    titleGradient: 'from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400',
    badgeBg: 'bg-pink-50 dark:bg-pink-800',
    badgeText: 'text-pink-700 dark:text-pink-200',
    badgeBorder: 'border-pink-100 dark:border-pink-700',
    link: 'text-pink-600 hover:text-pink-800 dark:text-pink-300 dark:hover:text-pink-400',
  },
  {
    iconBg: 'bg-yellow-100 dark:bg-yellow-900',
    iconText: 'text-yellow-500 dark:text-yellow-300',
    titleGradient: 'from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400',
    badgeBg: 'bg-yellow-50 dark:bg-yellow-800',
    badgeText: 'text-yellow-700 dark:text-yellow-200',
    badgeBorder: 'border-yellow-100 dark:border-yellow-700',
    link: 'text-yellow-600 hover:text-yellow-800 dark:text-yellow-300 dark:hover:text-yellow-400',
  },
];

interface Project {
  title: string;
  description: string;
  stack: string[];
  githubLink: string;
  details: string[];
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title:'Jeb-Kharch:A Expense Tracker App',
      description:'A expense tracker & maanagerment app with secured authentication & catchy UI',
      stack:['Flutter','Firebase Authentication','SQFLITE'],
      githubLink:'https://github.com/divyaanshupal/Expense-Tracker-Assignment',
      details:[
        'Secure authentication with email/password and Google Sign-In, including persistent login sessions for seamless user experience.',
        'Features to add and manage transactions, categorize expenses, choose payment methods, and add detailed descriptions to each transaction.',
        'Users can view a comprehensive overview of their total income and expenses for better financial tracking.',
        'Users can access full transaction history with swipe-to-delete functionality for quick and intuitive record management.',
      ]
    },
    {
      title: 'RoutineS: Real-Time Task Manager',
      description: 'A task management app with secure authentication, real-time syncing, and image uploads.',
      stack: ['Flutter', 'Dart', 'Firebase (Firestore)', 'Supabase'],
      githubLink: 'https://github.com/divyaanshupal/RoutineS-Firebase',
      details: [
        'Built a task management app with secure authentication, enabling 500+ users to sign up, log in, and create tasks.',
        'Implemented real-time sync for 10,000+ tasks using Firebase Firestore.',
        'Integrated Supabase to handle 100+ task image uploads daily.',
        'Added 5 task color themes, descriptions, due dates, and 90% accurate swipe gestures for deletion.'
      ]
    },
    {
      title: 'Hangman',
      description: 'An interactive Hangman game with multiple difficulty levels and a smart hint system.',
      stack: ['Flutter', 'Dart', 'Firebase'],
      githubLink: 'https://github.com/divyaanshupal/Hangman-flutter-apk',
      details: [
        'Developed an interactive Hangman game with a database of 130+ words across 3 difficulty levels (Easy, Medium, Hard).',
        'Implemented an adaptive hint system offering 40+ contextual suggestions, enhancing user engagement and learning.',
        'Built 3 win/lose screens and a rules page, improving onboarding for 500+ players.',
        'Designed a smart word pool system with 100% automatic resets, ensuring continuous replayability.',
        'Integrated Firebase Authentication for secure sign-in/signup, enabling personalized user experiences.'
      ]
    }
  ];

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

  const toggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/50 to-transparent dark:via-pink-950/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Projects
          </motion.h2>
          
          <div className="space-y-8 md:space-y-12">
            {projects.map((project, index) => {
              const color = PROJECT_COLORS[index % PROJECT_COLORS.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`glass-card rounded-2xl shadow-xl overflow-hidden transition-all duration-500 card-glow ${
                      activeProject === index ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-2xl hover:-translate-y-2'
                    }`}
                  >
                    {/* Project Header */}
                    <motion.div
                      className={`p-6 md:p-8 cursor-pointer relative z-10 ${
                        activeProject === index ? 'bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20' : ''
                      }`}
                      onClick={() => toggleProject(index)}
                      whileHover={{ scale: activeProject === index ? 1 : 1.01 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <motion.span 
                            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${color.iconBg} shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Github size={28} className={color.iconText} />
                          </motion.span>
                          <div className="flex-1">
                            <h3 className={`text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r ${color.titleGradient} bg-clip-text text-transparent`}>
                              {project.title}
                            </h3>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <motion.a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={24} />
                        </motion.a>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-6">
                        {project.stack.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${color.badgeBg} ${color.badgeText} ${color.badgeBorder} border hover-tag`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Project Details */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: activeProject === index ? 'auto' : 0,
                        opacity: activeProject === index ? 1 : 0
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-slate-200 dark:border-slate-700 relative z-10">
                        <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-6">
                          {project.details.map((detail, detailIndex) => (
                            <motion.li 
                              key={detailIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: activeProject === index ? 1 : 0, x: activeProject === index ? 0 : -20 }}
                              transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                            >
                              <span className="text-indigo-600 dark:text-indigo-400 mt-1.5">▸</span>
                              <span className="text-base md:text-lg leading-relaxed">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <motion.div 
                          className="flex justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: activeProject === index ? 1 : 0, y: activeProject === index ? 0 : 20 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg transition-all bg-gradient-to-r ${color.link} hover:shadow-lg`}
                          >
                            View Project <ExternalLink size={20} />
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;