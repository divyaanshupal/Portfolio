import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import PixelCard from './PixelCard';

const Experience: React.FC = () => {
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

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="section-title mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Work Experience
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 rounded-full"></div>
            <div className="relative z-10 space-y-12">
              {[
                {
                  title: 'Flutter Developer Intern',
                  company: 'Kyrotics',
                  location: 'Remote',
                  period: 'July 2025 - Present',
                  description: ['Working on building an encrypted file sharing mobile app.'],
                  tech: ['Flutter', 'Dart']
                },
                {
                  title: 'Flutter Developer Intern',
                  company: 'Medhwan',
                  location: 'Remote',
                  period: 'Mar 2025 - June 2025',
                  description: [
                    'Developed a EdTech app from scratch, handling UI development and logic implementation using Flutter.',
                    'Integrated Node.js + MongoDB backend with REST APIs; improved performance by 30% via Riverpod.',
                    'Built pagination to efficiently render 10,000+ questions across devices.',
                    'Used Hive and SharedPreferences to speed up data access by 25%.',
                    'Developed reusable User and Course models; reduced API calls by 40%.'
                  ],
                  tech: ['Flutter', 'Dart', 'Riverpod', 'UI Design'],
                  link: 'https://www.linkedin.com/posts/divyaanshu_letterofaccomplishment-activity-7346032388231110656-pI3w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbWEZ0BL0zA_E3jbmOrIwgFJjFYr4EtDDM'
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="md:w-32 mb-6 md:mb-0 flex items-start md:items-center justify-center md:justify-start">
                    <motion.span 
                      className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-4 border-white dark:border-slate-900 shadow-xl z-10"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase size={28} />
                    </motion.span>
                  </div>
                  <div className="flex-1 md:pl-8">
                    <motion.div
                      className="glass-card rounded-2xl shadow-xl p-6 md:p-8 card-glow hover-card"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          {exp.title}
                        </h3>
                        <span className="text-sm font-semibold bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lg md:text-xl font-semibold mb-4 text-slate-700 dark:text-slate-300">
                        {exp.company} | {exp.location}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <span className="text-indigo-600 dark:text-indigo-400 mt-1.5">▸</span>
                            <span className="text-base md:text-lg leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 rounded-full text-sm font-semibold hover-tag"
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
                      {exp.link && (
                        <motion.a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
                          whileHover={{ x: 5 }}
                        >
                          View Certificate <span>→</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;