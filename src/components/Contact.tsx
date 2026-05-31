// src/components/Contact.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <motion.h2
        variants={itemVariants}
        className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6"
      >
        Contact
      </motion.h2>

      <div className="max-w-xl">
        <motion.p
          variants={itemVariants}
          className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6"
        >
          I'm open to research collaborations, PhD program discussions, and interesting projects at
          the intersection of AI and energy materials. Feel free to reach out.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          <a
            href="mailto:hraipuru@asu.edu"
            className="inline-block text-sm px-5 py-2.5 rounded bg-blue-700 text-white hover:bg-blue-800 transition-colors font-medium"
          >
            hraipuru@asu.edu
          </a>
          <a
            href="https://www.linkedin.com/in/hithesh-rai-p/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm px-5 py-2.5 rounded border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-700 hover:text-blue-700 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
