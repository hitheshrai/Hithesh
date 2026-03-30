// src/components/Contact.tsx

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        Contact
      </h2>

      <div className="max-w-xl">
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          I'm open to research collaborations, PhD program discussions, and interesting projects at
          the intersection of AI and energy materials. Feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-3">
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
        </div>
      </div>
    </section>
  );
}
