import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-black dark:text-textDark">
      <div className="container mx-auto px-4">
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          glareEnable={true}
          glareMaxOpacity={0.08}
          glareColor="#ffffff"
          glarePosition="all"
          className="max-w-3xl mx-auto"
        >
          <div className="p-6 md:p-8 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-textDark mb-6">
              About
            </h2>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              I’m deeply interested in energy materials and the development of self-driving laboratories — intelligent systems that can autonomously design, fabricate, test, and optimize new materials. I’m fascinated by how AI can accelerate discovery in energy-conversion technologies by closing the loop between experimentation and computation.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              My curiosity lies at the intersection of materials science, automation, and machine learning: building experimental platforms that learn from data, adapt in real time, and reduce the cost and energy footprint of research and manufacturing.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Long term, I aim to contribute to energy-efficient deployment of advanced materials — combining autonomous experimentation, AI-guided optimization, and systems engineering to accelerate scalable clean energy technologies.
            </p>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
