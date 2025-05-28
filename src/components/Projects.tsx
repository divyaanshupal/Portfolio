import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            <span className="relative z-10">Projects</span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-500 rounded"></span>
          </h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  activeProject === index ? 'shadow-2xl' : 'hover:shadow-xl'
                }`}
              >
                {/* Project Header */}
                <div 
                  className={`p-6 cursor-pointer ${
                    activeProject === index ? 'bg-indigo-50 dark:bg-indigo-900/30' : ''
                  }`}
                  onClick={() => toggleProject(index)}
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      {project.title}
                    </h3>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-800 dark:text-slate-200 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Details */}
                {activeProject === index && (
                  <div className="p-6 pt-0 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
                    <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-4">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex justify-center">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                      >
                        View Project <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;