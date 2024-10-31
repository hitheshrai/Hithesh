// src/components/Articles.tsx

import React from 'react';

export default function Articles() {
  const articles = [
    {
      title: "Exploring the Potential of Quantum Computing in Renewable Energy",
      description: "An in-depth look at how quantum computing can optimize renewable energy sources and applications.",
      link: "https://example.com/quantum-computing-renewable-energy",
    },
    {
      title: "AI in Material Science: Transforming Research in Sustainable Technology",
      description: "How AI-driven algorithms are changing the way we approach material research and sustainable technology.",
      link: "https://example.com/ai-in-material-science",
    },
    {
      title: "Perovskite Solar Cells: A Game Changer for the Future of Solar Energy",
      description: "An exploration into perovskite solar cells, their efficiency, and potential for mainstream adoption.",
      link: "https://example.com/perovskite-solar-cells",
    },
    {
      title: "Understanding Quantum Materials and Their Applications in Modern Electronics",
      description: "A deep dive into quantum materials and their impact on the next generation of electronic devices.",
      link: "https://example.com/quantum-materials",
    },
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
