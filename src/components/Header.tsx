// src/components/Header.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const nameText = ["I", "am", "Hithesh", "Rai", "Purushothama"];

  return (
    <header className="container mx-auto px-4 py-12 md:py-16 relative bg-white dark:bg-backgroundDark text-black dark:text-textDark rounded-xl shadow-lg text-center">
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>

      {/* Typing Effect Header Text */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-textDark mb-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
      >
        {nameText.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Description */}
      <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 px-2">
        | Senior EE at Arizona State University | Undergraduate Researcher at Rolston Lab | Senior Studio Associate at Next Lab |
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-8 text-primary dark:text-textDark">
        <a
          href="https://github.com/hitheshrai"
          className="p-1 md:p-2 transition-transform transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/hithesh-rai-p/"
          className="p-1 md:p-2 transition-transform transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:hraipuru@asu.edu"
          className="p-1 md:p-2 transition-transform transform duration-300 hover:scale-110 hover:text-blue-500 dark:hover:text-white"
        >
          <Mail size={24} />
        </a>
      </div>

      {/* Call to Action Button */}
      <button
        className="px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-semibold bg-primary text-white dark:bg-textDark dark:text-backgroundDark rounded-full shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-blue-600 dark:hover:bg-gray-700"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Get in Touch
      </button>
    </header>
  );
};

export default Header;
