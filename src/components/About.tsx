// src/components/About.tsx

import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <section className="py-8 md:py-12 bg-white dark:bg-backgroundDark text-black dark:text-textDark">
      <div className="container mx-auto px-4">
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={true}
          glareMaxOpacity={0.5}
          glareColor="#ffffff"
          glarePosition="all"
          className="max-w-3xl mx-auto"
        >
          <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-textDark mb-4">About Me</h2>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              I am a senior in Electrical and Electronic Engineering at ASU with a focus on renewable energy, 
              material research, and AI applications. Currently, I am working with the{' '}
              <a 
                href="https://rolston.lab.asu.edu/" 
                className="text-primary hover:underline dark:text-textDark" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Rolston Lab
              </a>, where I contribute to innovative projects in sustainable technology.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              Additionally, I am a Senior Studio Associate at the{' '}
              <a 
                href="https://nextlab.asu.edu/" 
                className="text-primary hover:underline dark:text-textDark" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Next Lab
              </a>, leading the Gen AI team in developing cutting-edge AI applications.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With hands-on experience in perovskite solar cells, AI-driven edge devices, and low-power electronics, I aim to drive 
              innovation in sustainable technology through my technical skills in programming and material synthesis.
            </p>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
