import React, { useEffect, useRef } from 'react';
import { Trophy, Code } from 'lucide-react';
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
      description: 'Solved 300+ problems across platforms (150+ on LeetCode); 2-star on CodeChef (rating 1469) with global rank 682.',
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
      className="py-24 bg-slate-100 dark:bg-slate-800/50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="relative z-10">Achievements</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-500 rounded"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <PixelCard key={index} variant="pink" className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1">
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
              </PixelCard>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-xl shadow-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Want to collaborate?</h3>
            <p className="text-lg mb-6">I'm always open to new challenges and opportunities to learn and grow.</p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;