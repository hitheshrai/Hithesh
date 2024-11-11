// src/components/Articles.tsx

import React from 'react';

export default function Articles() {
  const articles = [
    {
      title: "Hithesh Rai Purushothama: A Journey in Engineering and Leadership",
      description: "A feature on Hithesh’s contributions to semiconductors, robotics, and materials science, showcasing his leadership in various student organizations and projects.",
      link: "https://ecee.engineering.asu.edu/2023/03/hithesh-rai-purushothama/",
    },
    {
      title: "Sommer in Berlin: Einblicke in das Leben eines Forschungspraktikanten",
      description: "Hithesh’s summer internship experience at Helmholtz-Zentrum Berlin, diving into perovskite research, exploring Berlin’s vibrant culture, and embracing unforgettable moments.",
      link: "https://science.hzbblog.de/sommer-in-berlin-einblicke-in-das-leben-eines-forschungspraktikanten",
    },
    {
      title: "SURF Students at Purdue: A Summer of Research",
      description: "The SURF program at Purdue welcomes Hithesh, focusing on perovskite solar cell research and collaborating with the Letian Dou Group.",
      link: "https://letiandougroup.com/2023/05/25/surf-students/",
    },
    {
      title: "Revolutionizing Formaldehyde Lead Halide Perovskite Solar Cells",
      description: "A FURI research project focusing on ionic additives for improving stability in perovskite solar cells, under the mentorship of Professor Nick Rolston.",
      link: "https://forge.engineering.asu.edu/participant/rai-purushothama-hithesh/",
    },
    {
      title: "Measuring and Controlling Mobile Ion Concentration in Perovskite Thin Films",
      description: "This FURI Spring 2023 project explores ion migration control to enhance the stability of perovskite solar cells using cutting-edge characterization tools.",
      link: "https://forge.engineering.asu.edu/furiproject/measuring-and-controlling-mobile-ion-concentration-to-improve-operational-stability-in-perovskite-thin-films/",
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-backgroundDark text-black dark:text-textDark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-textDark">Articles</h2>
          <div className="grid gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-slate-100 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-textDark">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{article.description}</p>
                <a
                  href={article.link}
                  className="text-blue-600 dark:text-textDark hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
