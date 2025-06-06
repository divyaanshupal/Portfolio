import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

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
                <div className="sm:w-32 mb-4 sm:mb-0">
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 border-4 border-white dark:border-slate-800">
                    <Briefcase size={20} />
                  </div>
                </div>
                
                <div className="flex-1 sm:pl-8">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                        Flutter Developer Intern
                      </h3>
                      <span className="ml-auto text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full">
                        Mar 2025 - Present
                      </span>
                    </div>
                    <p className="text-lg font-medium mb-3">Medhwan | Remote</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                      <li>Developing a new EdTech app from scratch, handling UI development and logic implementation using Flutter.</li>
                      <li>Built 20+ UI screens with responsive layouts and optimized performance across devices.</li>
                      <li>Implemented Riverpod state management, boosting performance by 20%, and collaborated on feature integration, with plans for backend development (API integration, database management).</li>
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Flutter</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Dart</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Riverpod</span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">UI Design</span>
                    </div>
                  </div>
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