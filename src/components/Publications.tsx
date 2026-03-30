// src/components/Publications.tsx

type Pub = {
  id: string;
  type: 'Conference Paper' | 'Journal Article' | 'Preprint';
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
  link?: string;
};

const publications: Pub[] = [
  {
    id: 'pvsc-2024',
    type: 'Conference Paper',
    title:
      'Blade-Coated Cesium Wide-Bandgap Perovskite Films for Improved Operational Stability in Alphavoltaic Applications',
    authors: 'H. R. Purushothama, N. Rolston et al.',
    venue: 'IEEE 51st Photovoltaic Specialists Conference (PVSC)',
    year: '2024',
    note: 'Funded by Intel',
    link: 'https://forge.engineering.asu.edu/participant/rai-purushothama-hithesh/',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-12 border-b border-slate-200 dark:border-slate-800">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
        Publications
      </h2>

      <div className="space-y-6">
        {publications.map((p) => (
          <div key={p.id} className="flex gap-4">
            <span className="mt-0.5 flex-shrink-0 text-xs px-2 py-0.5 h-fit rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900 font-medium whitespace-nowrap">
              {p.type}
            </span>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug mb-1">
                {p.title}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-0.5">{p.authors}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="italic">{p.venue}</span>, {p.year}
                {p.note && (
                  <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">
                    · {p.note}
                  </span>
                )}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-700 dark:text-blue-400 hover:underline mt-1 inline-block"
                >
                  View project page →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
