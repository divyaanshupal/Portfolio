import React, { useEffect, useRef } from 'react';
import { Users, Award } from 'lucide-react';

const Extracurricular: React.FC = () => {
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
      ref={sectionRef}
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="relative z-10">Extracurricular</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-500 rounded"></span>
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-4 flex-shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      Founder of Unnati Welfare Society
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Established and led an NGO focused on providing digital education to underprivileged students in government schools. Successfully raised funds, grew the team to 130+ members, and impacted over 1500 students.
                    </p>
                    
                    <div className="mt-6">
                      <h4 className="flex items-center text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">
                        <Award size={16} className="mr-2 text-indigo-500" /> Impact & Recognition
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Unnati Welfare Society's initiatives received coverage on 5+ media platforms, highlighting contributions to digital education and social upliftment in rural areas.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">130+</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Team Members</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">1500+</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Students Impacted</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">5+</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Media Features</div>
                        </div>
                      </div>
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

export default Extracurricular;