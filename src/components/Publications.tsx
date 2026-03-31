type Pub = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
  link?: string;
};

const publications: Pub[] = [
  {
    id: "pvsc-2024",
    title:
      "Quantifying Mobile Ions in Formamidinium Lead Iodide Perovskite to Study Ion Migration for Enhanced Stability and Performance",
    authors: "H. R. Purushothama, N. Rolston et al.",
    venue: "IEEE 52nd Photovoltaic Specialists Conference (PVSC)",
    year: "2024",
    note: "Seattle, USA",
    link: "https://ieeexplore.ieee.org/abstract/document/10749044/",
  },
  {
    id: "iperop-2025",
    title:
      "Blade-Coated Cesium Lead Halide Perovskite Thin Films for Alphavoltaic and Optoelectronic Applications",
    authors: "H. R. Purushothama, N. Rolston et al.",
    venue:
      "Asia-Pacific International Conference on Perovskite, Organic Photovoltaics and Optoelectronics (IPEROP)",
    year: "2025",
    note: "Poster · Kyoto, Japan",
    link: "https://www.nanoge.org/proceedings/IPEROP25/674e7264d74a090160ef6a3d",
  },
  {
    id: "ai4x-2026",
    title:
      "Transferable Impedance-Grounded Learning for Interfacial Degradation Across Energy Systems",
    authors: "H. R. Purushothama, N. Rolston",
    venue: "AI4X-AC 2026",
    year: "2026",
    note: "Accepted Poster · Singapore · Physics-informed ML for energy systems",
    link: "https://openreview.net/forum?id=qJkiTa9Z0q&referrer=%5Bthe%20profile%20of%20Hithesh%20Rai%20Purushothama%5D(%2Fprofile%3Fid%3D~Hithesh_Rai_Purushothama1)",
  },
];

function PublicationItem({ pub }: { pub: Pub }) {
  return (
    <article className="flex gap-4">
      <div className="min-w-0">
        <h3 className="mb-1 text-sm font-semibold leading-snug text-slate-900 dark:text-slate-100">
          {pub.title}
        </h3>

        <p className="mb-0.5 text-sm text-slate-500 dark:text-slate-400">{pub.authors}</p>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          <span className="italic">{pub.venue}</span>, {pub.year}
          {pub.note ? (
            <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">· {pub.note}</span>
          ) : null}
        </p>

        {pub.link ? (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-xs text-blue-700 hover:underline dark:text-blue-400"
          >
            View publication →
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function Publications() {
  return (
    <section
      id="publications"
      className="border-b border-slate-200 py-12 dark:border-slate-800"
    >
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
        Conference Proceedings
      </h2>

      <div className="space-y-6">
        {publications.map((pub) => (
          <PublicationItem key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  );
}
