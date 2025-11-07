import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 md:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Divyanshu Pal
            </h2>
            <p className="text-lg text-slate-400">Computer Science Student & Flutter Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-base font-medium hover:text-indigo-400 transition-colors hover-link relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-slate-500 border-t border-slate-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>© {currentYear} Divyanshu Pal. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-1">
              Made with <motion.span whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}><Heart size={14} className="text-red-500" /></motion.span> and React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;