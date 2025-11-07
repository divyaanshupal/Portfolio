import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

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
    "Flutter/Mobile Developer",
    "Competitive Programmer",
  ];

  useEffect(() => {
    let timeout: number;
    const currentTitle = titles[currentTitleIndex];
    
    if (isWaiting) {
      timeout = window.setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayText === currentTitle) {
        setIsWaiting(true);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTitleIndex, isDeleting, isWaiting, titles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Animated Background - Optimized */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 z-0 will-change-transform"
        style={{ transform: `translate3d(0, ${parallaxOffset * 0.2}px, 0)` }}
      >
        <div className="absolute inset-0 opacity-30 dark:opacity-15">
          {/* Reduced to 2 blobs and lighter blur */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 dark:from-indigo-700 dark:to-purple-800 blur-2xl will-change-transform"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: 'transform, opacity' }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/5 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-800 dark:to-cyan-900 blur-2xl will-change-transform"
            animate={{ 
              scale: [1, 1.15, 1], 
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ willChange: 'transform, opacity' }}
          />
        </div>
        {/* Simplified grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Left Side */}
          <motion.div 
            className="w-full md:w-3/5 flex flex-col items-start md:items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                👋 Welcome to my Portfolio
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="block text-slate-800 dark:text-slate-100">Hi, I'm</span> 
              <motion.span 
                className="block mt-2 animate-gradient"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Divyanshu Pal
              </motion.span>
            </motion.h1>
            <div className="h-12 md:h-16 mb-8 relative w-full">
              <motion.p
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {displayText}
                <motion.span
                  className="inline-block w-[3px] h-8 md:h-10 bg-gradient-to-b from-indigo-500 to-pink-500 ml-2"
                  animate={{ opacity: [1, 1, 0, 0], scaleY: [1, 1.2, 1.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.7, 1] }}
                />
              </motion.p>
            </div>
            <motion.p
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Passionate developer crafting beautiful mobile and web experiences. 
              Currently building innovative solutions with Flutter and React.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <motion.a 
                href="https://github.com/divyaanshupal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 md:p-4 rounded-xl glass-card hover-social shadow-lg" 
                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github size={24} className="text-slate-700 dark:text-slate-300" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/divyaanshu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 md:p-4 rounded-xl glass-card hover-social shadow-lg" 
                whileHover={{ scale: 1.1, rotate: -5, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-slate-700 dark:text-slate-300" />
              </motion.a>
              <motion.a 
                href="mailto:divyanshuwork03@gmail.com" 
                className="p-3 md:p-4 rounded-xl glass-card hover-social shadow-lg" 
                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={24} className="text-slate-700 dark:text-slate-300" />
              </motion.a>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
              <motion.a
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold shadow-xl hover-button relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get in touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.a>
              <motion.a
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass-card font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
          {/* Right Side */}
          <motion.div 
            className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
            >
              <ProfileCard
                name="Divyanshu Pal"
                title="Student & Developer"
                handle="divyaanshupal"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/pf1.jpg"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => window.location.href = '#contact'}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.a 
        href="#about" 
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
        whileHover={{ y: 10 }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
          style={{ willChange: 'transform' }}
        >
          <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Scroll</span>
          <ChevronDown size={32} className="text-indigo-600 dark:text-indigo-400" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;