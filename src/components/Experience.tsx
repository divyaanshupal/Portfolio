import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
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
      className="py-24 bg-slate-100 dark:bg-slate-800/50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="relative z-10">Work Experience</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-500 rounded"></span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-16 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-32 mb-4 sm:mb-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 border-4 border-white dark:border-slate-800 shadow-lg">
                    <Briefcase size={24} />
                  </span>
                </div>
                <div className="flex-1 sm:pl-8">
                  <PixelCard variant="pink" className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-extrabold text-blue-600 dark:text-blue-300">
                        Flutter Developer Intern
                      </h3>
                      <span className="ml-auto text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                        July 2025 - Present
                      </span>
                    </div>
                    <p className="text-lg font-medium mb-3 text-blue-700 dark:text-blue-200">Kyrotics | Remote</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-200">
                      <li>Working on building an encrypted file sharing mobile app.</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-100 dark:border-blue-700 rounded-full text-sm font-semibold">Flutter</span>
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-100 dark:border-blue-700 rounded-full text-sm font-semibold">Dart</span>
                    </div>
                  </PixelCard>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row mt-12">
                <div className="sm:w-32 mb-4 sm:mb-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 border-4 border-white dark:border-slate-800 shadow-lg">
                    <Briefcase size={24} />
                  </span>
                </div>
                <div className="flex-1 sm:pl-8">
                  <PixelCard variant="pink" className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-extrabold text-blue-600 dark:text-blue-300">
                        Flutter Developer Intern
                      </h3>
                      <span className="ml-auto text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                        Mar 2025 - June 2025
                      </span>
                    </div>
                    <p className="text-lg font-medium mb-3 text-blue-700 dark:text-blue-200">Medhwan | Remote</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-200">
                      <li>Developed a EdTech app from scratch, handling UI development and logic implementation using Flutter.</li>
                      <li>Integrated Node.js + MongoDB backend with REST APIs; improved performance by 30% via Riverpod.</li>
                      <li>Built pagination to efficiently render 10,000+ questions across devices.</li>
                      <li>Used Hive and SharedPreferences to speed up data access by 25%.</li>
                      <li>Developed reusable User and Course models; reduced API calls by 40%.</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-100 dark:border-blue-700 rounded-full text-sm font-semibold">Flutter</span>
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-100 dark:border-blue-700 rounded-full text-sm font-semibold">Dart</span>
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-100 dark:border-blue-700 rounded-full text-sm font-semibold">Riverpod</span>
                      <span className="px-3 py-1 bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 border border-blue-100 dark:border-blue-700 rounded-full text-sm font-semibold">UI Design</span>
                    </div>
                  </PixelCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;