import React, { useEffect, useRef } from 'react';
import { Trophy, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import PixelCard from './PixelCard';

interface Achievement {
  title: string;
  description: string;
  icon: 'trophy' | 'code';
}

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const achievements: Achievement[] = [
    {
      title: 'Hackfest\'25 - IIT ISM Dhanbad',
      description: 'Led team that secured 2nd place in our Problem Statement; built a system to monitor audience sentiment via social media and feedback, relayed to admin dashboard.',
      icon: 'trophy'
    },
    {
      title: 'Smart India Hackathon 2024 (SIH1645)',
      description: '2nd place among 50+ teams for conceptualizing and developing a coal miner safety monitoring system as the team lead.',
      icon: 'trophy'
    },
    {
      title: 'Competitive Programming',
      description: 'Solved 300+ problems across platforms (150+ on LeetCode); 3-star on CodeChef (rating 1600) with global rank 682.',
      icon: 'code'
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

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="section-title mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl shadow-xl p-6 md:p-8 card-glow hover-card"
              >
                <div className="flex items-start relative z-10">
                  <div className={
                    `flex items-center justify-center w-12 h-12 rounded-full mr-4 flex-shrink-0 ` +
                    (achievement.icon === 'trophy'
                      ? 'bg-gradient-to-tr from-yellow-400 via-pink-400 to-red-500 text-white shadow-lg'
                      : 'bg-gradient-to-tr from-blue-400 via-cyan-400 to-green-400 text-white shadow-lg')
                  }>
                    {achievement.icon === 'trophy' ? (
                      <Trophy size={24} />
                    ) : (
                      <Code size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold mb-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 bg-clip-text text-transparent dark:from-pink-400 dark:via-yellow-400 dark:to-red-400">
                      {achievement.title}
                    </h3>
                    <p className="text-base font-medium text-indigo-600 dark:text-indigo-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 md:mt-16 p-8 md:p-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl text-white text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
            <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Want to collaborate?</h3>
            <p className="text-lg mb-6">I'm always open to new challenges and opportunities to learn and grow.</p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get in touch
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;