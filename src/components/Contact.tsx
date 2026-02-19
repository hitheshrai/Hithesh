// src/components/Contact.tsx

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-slate-50 to-blue-50 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-700 text-black dark:text-textDark border-t border-slate-200 dark:border-slate-700\">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-textDark\">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Currently open to new opportunities and interesting projects. Let's discuss how we can work together!
          </p>
          <a
            href="mailto:hripuru@asu.edu"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
