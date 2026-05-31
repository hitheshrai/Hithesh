// src/components/About.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const interests = [
  'Perovskite Photovoltaics',
  'Self-Driving Laboratories',
  'ML for Materials Discovery',
  'Energy Materials',
  'Edge AI & LLMs',
  'Battery Degradation Modeling',
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-12 border-b border-slate-200 dark:border-slate-800"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <motion.h2
        variants={itemVariants}
        className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6"
      >
        About
      </motion.h2>

      <div className="max-w-2xl space-y-4">
        <motion.p
          variants={itemVariants}
          className="text-base text-slate-700 dark:text-slate-300 leading-relaxed"
        >
          I am an early-career M.S. AI Engineering (Materials Science) student at Arizona State
          University in the Rolston Lab. My current work focuses on learning how to build
          experiment-grounded AI workflows for photovoltaics and related energy systems.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base text-slate-700 dark:text-slate-300 leading-relaxed"
        >
          I am developing skills across perovskite thin-film fabrication, materials
          characterization, and machine learning for autonomous experimentation. Currently a
          Graduate Research Intern at NIMS (Tsukuba, Japan) working on battery materials, and a
          Management Intern at Next Lab supporting AI initiatives for education and social good.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 pt-1"
        >
          {interests.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
