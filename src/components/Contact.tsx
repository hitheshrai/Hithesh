import React from 'react';

export default function Contact() {
  return (
    <section className="bg-slate-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-slate-300 mb-8">
            Currently open to new opportunities and interesting projects.
            Let's discuss how we can work together!
          </p>
          <a
            href="mailto:alex@example.com"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}