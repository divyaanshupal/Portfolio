import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PixelCard from './PixelCard';
import { Mail, Phone, Github } from 'lucide-react';

const ABOUT_COLORS = [
  {
    card: 'bg-blue-50 dark:bg-blue-900',
    title: 'text-blue-600 dark:text-blue-300',
    badgeBg: 'bg-blue-100 dark:bg-blue-800',
    badgeText: 'text-blue-700 dark:text-blue-200',
    badgeBorder: 'border-blue-100 dark:border-blue-700',
  },
  {
    card: 'bg-pink-50 dark:bg-pink-900',
    title: 'text-pink-600 dark:text-pink-300',
    badgeBg: 'bg-pink-100 dark:bg-pink-800',
    badgeText: 'text-pink-700 dark:text-pink-200',
    badgeBorder: 'border-pink-100 dark:border-pink-700',
  },
  {
    card: 'bg-yellow-50 dark:bg-yellow-900',
    title: 'text-yellow-600 dark:text-yellow-300',
    badgeBg: 'bg-yellow-100 dark:bg-yellow-800',
    badgeText: 'text-yellow-700 dark:text-yellow-200',
    badgeBorder: 'border-yellow-100 dark:border-yellow-700',
  },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="relative z-10">About Me</span>
            <motion.span 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-indigo-500 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
          </motion.h2>
          {/* Main About Card */}
          <PixelCard variant="pink" className={`mb-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8`}>
            <div className="relative z-10">
              <motion.p 
                className="text-lg leading-relaxed mb-6 text-pink-700 dark:text-pink-200"
                variants={itemVariants}
              >
                I'm a Computer Science and Engineering student at Indian Institute of Information Technology Bhagalpur with a passion for software development and problem-solving. 
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed mb-6 text-pink-700 dark:text-pink-200"
                variants={itemVariants}
              >
                Currently working as a Flutter Developer Intern at Medhwan, I'm developing an EdTech app from scratch, handling both UI development and logic implementation. My experience spans across mobile app development, competitive programming, and social impact initiatives.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed text-pink-700 dark:text-pink-200"
                variants={itemVariants}
              >
                As the founder of Unnati Welfare Society, I've led efforts to provide digital education to underprivileged students, growing our team to 130+ members and impacting over 1500 students. I'm passionate about leveraging technology to create meaningful solutions that positively impact communities.
              </motion.p>
            </div>
          </PixelCard>
          {/* Contact & Interests Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <PixelCard variant="pink" className={`rounded-xl shadow-lg p-6 ${ABOUT_COLORS[1].card}`}>
              <h3 className={`text-xl font-extrabold mb-4 ${ABOUT_COLORS[1].title}`}>Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><Mail size={18} className="text-pink-400" /><span className="font-medium">Email:</span> divyanshuwork03@gmail.com</li>
                <li className="flex items-center gap-2"><Phone size={18} className="text-pink-400" /><span className="font-medium">Phone:</span> +91 6387811379</li>
                <li className="flex items-center gap-2"><Github size={18} className="text-pink-400" /><span className="font-medium">GitHub:</span> @divyaanshupal</li>
              </ul>
            </PixelCard>
            <PixelCard variant="pink" className={`rounded-xl shadow-lg p-6 ${ABOUT_COLORS[2].card}`}>
              <h3 className={`text-xl font-extrabold mb-4 ${ABOUT_COLORS[2].title}`}>Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Mobile Development', 'Competitive Programming', 'Education', 'Problem Solving', 'Social Impact'].map((interest, index) => (
                  <span
                    key={interest}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${ABOUT_COLORS[2].badgeBg} ${ABOUT_COLORS[2].badgeText} ${ABOUT_COLORS[2].badgeBorder} border`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </PixelCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;