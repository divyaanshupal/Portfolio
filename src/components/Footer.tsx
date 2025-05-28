import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Divyanshu Pal</h2>
          <p className="mb-6">Computer Science Student & Flutter Developer</p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex justify-center items-center text-sm">
            <p>© {currentYear} Divyanshu Pal. All rights reserved.</p>
            <span className="mx-2">•</span>
            <p className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;