// src/components/Projects.tsx

export default function Projects() {
  const projects = [
    {
      title: "Blade-Coated CsPbX₃ Films for Alphavoltaic and Optoelectronic Devices",
      description: "Project under Dr. Nick Rolston Funded by Intel exploring scalable blade coating of cesium lead halide perovskite films for alphavoltaics. Focused on ethanol-based deposition using PVP/PEG for improved film uniformity and thickness under ambient conditions.",
      link: "https://forge.engineering.asu.edu/participant/rai-purushothama-hithesh/"
    },
    {
      title: "Probing Structural Instability in Perovskite-based Ferroelectric Materials",
      description: "Explored ferroelectric and piezoelectric materials using X-ray and neutron diffraction at Helmholtz Zentrum Berlin to study phase transitions.",
      github: "https://www.helmholtz-berlin.de/forschung/oe/qm/quantenphaenomene/index_en.html"
    },
    {
      title: "Solar-Based Edge Device (EDge AI)",
      description: "Led a team in developing a low-power, solar-powered edge device for AI applications. Built to run multilingual LLMs like LLaMA on Raspberry Pi using SolarSPELL resources for offline, privacy-focused use in underserved communities. Featured in ASU’s 'The AI Journey Continues' publication.",
      link: "https://nextlab.asu.edu/sol-a-i/",
      press: "https://issuu.com/asu_uto/docs/the_ai_journey_continues/s/73726965"
    },
    {
      title: "2Unify Education Program",
      description: "Led a curriculum development project integrating robotic arm programming for middle school students in collaboration with EPICS and Bridge2Africa.",
      link: "https://epics.engineering.asu.edu/2022/02/2unify-education/"
    },
    {
      title: "ASU ECEE Student Feature",
      description: "Recognized by ASU’s School of Electrical, Computer and Energy Engineering for leadership in research, student outreach, and academic excellence. Featured in an official school profile article.",
      press: "https://ecee.engineering.asu.edu/2023/06/16/hithesh-rai-purushothama/"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-backgroundDark text-black dark:text-textDark border-t border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-textDark">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-6 shadow-md transition-all hover:shadow-lg border-l-4 border-blue-500 hover:border-blue-600">
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-textDark">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4 flex-wrap">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.press && (
                    <a 
                      href={project.press}
                      className="text-purple-600 dark:text-purple-300 hover:underline"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Featured Article
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
