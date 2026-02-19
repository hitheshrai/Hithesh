import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-slate-50 to-blue-50 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-700 text-black dark:text-textDark">
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
          <div className="p-4 md:p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600">
            <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-textDark mb-4">
              About Me
            </h2>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I’m a Master’s student in Artificial Intelligence Engineering (Materials Science & Engineering) at Arizona State University, working at the intersection of AI, renewable energy systems, and advanced materials. My work spans from cleanroom fabrication of perovskite thin films to deploying AI systems on edge devices for energy-aware applications.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              At the{' '}
              <a
                href="https://rolston.lab.asu.edu/"
                className="text-primary hover:underline dark:text-textDark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rolston Lab
              </a>, I work on perovskite-based optoelectronic and energy-conversion devices, focusing on fabrication, characterization, and scaling pathways from lab to manufacturable systems.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              At{' '}
              <a
                href="https://nextlab.asu.edu/"
                className="text-primary hover:underline dark:text-textDark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next Lab
              </a>, I lead AI-focused initiatives, building and benchmarking large language model workflows, RAG systems, and low-power inference pipelines on NVIDIA Jetson devices. My focus is translating complex technical systems into deployable, reliable tools.
            </p>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Long term, I aim to build intelligent infrastructure tools that accelerate the energy transition — combining AI systems, geospatial data, and energy modeling to make renewable deployment faster and more scalable.
            </p>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
