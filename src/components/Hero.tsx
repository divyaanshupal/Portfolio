import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const parallaxOffset = scrollY * 0.4;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const titles = [
    "Absolute Learner",
    "Flutter Developer",
    "Competitive Programmer",
    "Problem Solver",
    "Open Source Contributor"
  ];

  useEffect(() => {
    let timeout: number;
    const currentTitle = titles[currentTitleIndex];
    
    if (isWaiting) {
      timeout = window.setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000); // Wait for 2 seconds before starting to delete
    } else if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 50); // Delete speed
      }
    } else {
      if (displayText === currentTitle) {
        setIsWaiting(true);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100); // Type speed
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTitleIndex, isDeleting, isWaiting, titles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-slate-900 dark:to-indigo-950 z-0 transition-all duration-1000"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-300 dark:bg-indigo-700 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full bg-blue-300 dark:bg-blue-800 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="block">Hi, I'm</span> 
            <motion.span 
              className="text-indigo-600 dark:text-indigo-400 animate-gradient inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Divyanshu Pal
            </motion.span>
          </motion.h1>
          
          <div className="h-10 md:h-12 mb-8 relative">
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
              <motion.span
                className="inline-block w-[2px] h-7 bg-indigo-500 ml-1"
                animate={{ 
                  opacity: [1, 1, 0, 0],
                  scaleY: [1, 1.1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.7, 1]
                }}
              />
            </motion.p>
          </div>
          
          <motion.div 
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <motion.a 
              href="https://github.com/divyaanshupal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full glass hover-social" 
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/divyaanshupal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full glass hover-social" 
              whileHover={{ scale: 1.1, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:divyanshuwork03@gmail.com" 
              className="p-3 rounded-full glass hover-social" 
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="inline-flex px-6 py-3 rounded-full glass hover-button shine"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="flex items-center">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        whileHover={{ y: 5 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-slate-600 dark:text-slate-400" />
      </motion.a>
    </section>
  );
};

export default Hero;