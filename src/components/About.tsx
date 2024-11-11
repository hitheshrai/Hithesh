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
              I am a senior at Arizona State University majoring in Electrical and Electronics Engineering, with strong interests in renewable energy, material science, and low-power AI applications. Currently, I am an Undergraduate Research Assistant in the{' '}
              <a 
                href="https://rolston.lab.asu.edu/" 
                className="text-primary hover:underline dark:text-textDark" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Rolston Lab
              </a>, working on perovskite-based alphavoltaic thin films for sustainable energy solutions.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              I also serve as a Senior Studio Associate at the{' '}
              <a 
                href="https://nextlab.asu.edu/" 
                className="text-primary hover:underline dark:text-textDark" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Next Lab
              </a>, where I lead the Gen AI Guild. My focus is on developing large language models optimized for low-power devices, aligning with my passion for sustainable AI technologies.
            </p>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am actively seeking internship opportunities for Summer 2024 and exploring PhD programs for Fall 2026 to further my research and career in sustainable technology and advanced AI applications.
            </p>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
