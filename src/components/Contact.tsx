// src/components/Contact.tsx

import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-backgroundDark text-black dark:text-textDark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary dark:text-textDark">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Currently open to new opportunities and interesting projects. Let's discuss how we can work together!
          </p>
          <a
            href="mailto:hripuru@asu.edu"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-textDark dark:hover:bg-gray-700 text-white dark:text-backgroundDark font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
