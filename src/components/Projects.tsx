import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import PixelCard from './PixelCard';

const PROJECT_COLORS = [
  {
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    iconText: 'text-blue-500 dark:text-blue-300',
    title: 'text-blue-600 dark:text-blue-300',
    badgeBg: 'bg-blue-50 dark:bg-blue-800',
    badgeText: 'text-blue-700 dark:text-blue-200',
    badgeBorder: 'border-blue-100 dark:border-blue-700',
    link: 'text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-400',
  },
  {
    iconBg: 'bg-pink-100 dark:bg-pink-900',
    iconText: 'text-pink-500 dark:text-pink-300',
    title: 'text-pink-600 dark:text-pink-300',
    badgeBg: 'bg-pink-50 dark:bg-pink-800',
    badgeText: 'text-pink-700 dark:text-pink-200',
    badgeBorder: 'border-pink-100 dark:border-pink-700',
    link: 'text-pink-600 hover:text-pink-800 dark:text-pink-300 dark:hover:text-pink-400',
  },
  {
    iconBg: 'bg-yellow-100 dark:bg-yellow-900',
    iconText: 'text-yellow-500 dark:text-yellow-300',
    title: 'text-yellow-600 dark:text-yellow-300',
    badgeBg: 'bg-yellow-50 dark:bg-yellow-800',
    badgeText: 'text-yellow-700 dark:text-yellow-200',
    badgeBorder: 'border-yellow-100 dark:border-yellow-700',
    link: 'text-yellow-600 hover:text-yellow-800 dark:text-yellow-300 dark:hover:text-yellow-400',
  },
];

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
      title:'Jeb-Kharch:A Expense Tracker App',
      description:'A expense tracker & maanagerment app with secured authentication & catchy UI',
      stack:['Flutter','Firebase Authentication','SQFLITE'],
      githubLink:'https://github.com/divyaanshupal/Expense-Tracker-Assignment',
      details:[
        'Secure authentication with email/password and Google Sign-In, including persistent login sessions for seamless user experience.',
        'Features to add and manage transactions, categorize expenses, choose payment methods, and add detailed descriptions to each transaction.',
        'Users can view a comprehensive overview of their total income and expenses for better financial tracking.',
        'Users can access full transaction history with swipe-to-delete functionality for quick and intuitive record management.',
      ]
    },
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
            {projects.map((project, index) => {
              const color = PROJECT_COLORS[index % PROJECT_COLORS.length];
              return (
                <PixelCard
                  key={index}
                  variant="pink"
                  className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                    activeProject === index ? 'shadow-2xl' : 'hover:shadow-xl'
                  }`}
                >
                  {/* Project Header */}
                  <div
                    className={`p-6 cursor-pointer relative z-10 ${
                      activeProject === index ? 'bg-opacity-80' : ''
                    }`}
                    onClick={() => toggleProject(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${color.iconBg}`}>
                          <Github size={24} className={color.iconText} />
                        </span>
                        <h3 className={`text-xl font-extrabold ${color.title} mb-2`}>
                          {project.title}
                        </h3>
                      </div>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                    <p className="text-base font-medium text-slate-700 dark:text-slate-200 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${color.badgeBg} ${color.badgeText} ${color.badgeBorder} border`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  {activeProject === index && (
                    <div className="p-6 pt-0 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 relative z-10">
                      <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-200 mb-4">
                        {project.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                      <div className="flex justify-center">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`inline-flex items-center font-bold text-lg transition-colors ${color.link}`}
                        >
                          View Project <ExternalLink size={18} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  )}
                </PixelCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;