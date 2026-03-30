// src/components/Articles.tsx

const articles = [
  {
    id: 'thinkswiss-video',
    title: 'Doing Research in Switzerland — ThinkSwiss Scholarship',
    description:
      'Short video about my research visit to EPFL supported by the ThinkSwiss scholarship — fabrication and testing of perovskite thin films.',
    link: 'https://www.youtube.com/watch?v=UHKrYFusstU',
    type: 'Video',
  },
  {
    id: 'solarspell-offline-ai',
    title: 'ASU SolarSPELL & Next Lab Pioneer Offline AI',
    description:
      "Feature on EDgeAI — an offline conversational AI system built using Meta's Llama model, optimized for Raspberry Pi devices powering SolarSPELL libraries for communities without internet.",
    link: 'https://solarspell.org/asu-solarspell-next-lab-pioneer-offline-ai',
    type: 'Feature',
  },
  {
    id: 'sommer-berlin',
    title: 'Sommer in Berlin: Einblicke in das Leben eines Forschungspraktikanten',
    description:
      'My summer internship experience at Helmholtz-Zentrum Berlin — perovskite research, PDF analysis, and exploring Berlin.',
    link: 'https://science.hzbblog.de/sommer-in-berlin-einblicke-in-das-leben-eines-forschungspraktikanten',
    type: 'Blog',
  },
  {
    id: 'journey-leadership',
    title: 'Hithesh Rai Purushothama: A Journey in Engineering and Leadership',
    description:
      'ASU feature on contributions to semiconductors, robotics, and materials science, and leadership in student organizations.',
    link: 'https://ecee.engineering.asu.edu/2023/03/hithesh-rai-purushothama/',
    type: 'Profile',
  },
  {
    id: 'surf-purdue',
    title: 'SURF Students at Purdue: A Summer of Research',
    description:
      'The SURF program at Purdue — focusing on perovskite solar cell research in collaboration with the Letian Dou Group.',
    link: 'https://letiandougroup.com/2023/05/25/surf-students/',
    type: 'Lab Post',
  },
  {
    id: 'formamidinium-halide',
    title: 'Revolutionizing Formamidinium Lead Halide Perovskite Solar Cells',
    description:
      'FURI research project on ionic additives for improving stability in perovskite solar cells under Professor Nick Rolston.',
    link: 'https://forge.engineering.asu.edu/participant/rai-purushothama-hithesh/',
    type: 'Research',
  },
  {
    id: 'mobile-ion-control',
    title: 'Measuring and Controlling Mobile Ion Concentration in Perovskite Thin Films',
    description:
      'FURI Spring 2023 project exploring ion migration control to enhance the operational stability of perovskite solar cells.',
    link: 'https://forge.engineering.asu.edu/furiproject/measuring-and-controlling-mobile-ion-concentration-to-improve-operational-stability-in-perovskite-thin-films/',
    type: 'Research',
  },
];

export default function Articles() {
  return (
    <section id="articles" className="py-12 border-b border-slate-200 dark:border-slate-800">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        Articles & Media
      </h2>

      <div className="space-y-5">
        {articles.map((a) => (
          <div key={a.id} className="flex gap-4 group">
            <span className="mt-0.5 flex-shrink-0 text-xs px-2 py-0.5 h-fit rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-medium whitespace-nowrap">
              {a.type}
            </span>
            <div>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-900 dark:text-slate-100 hover:text-blue-700 dark:hover:text-blue-400 transition-colors leading-snug"
              >
                {a.title}
              </a>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
