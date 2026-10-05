import { experience } from '../data/site';
import { coastPaths, projectX, projectY, routeArc } from '../lib/atlas';

const placementIds = new Set(['purdue', 'hzb', 'epfl', 'nims']);
const chapters: Record<string, string> = {
  purdue: 'Devices and research data',
  hzb: 'Local structure',
  epfl: 'Thin-film photovoltaics',
  nims: 'Battery diagnostics',
};

export default function Experience() {
  const placements = experience.filter((item) => placementIds.has(item.id));
  const locations = experience.filter((item) => item.id !== 'nextlab');

  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section wrap">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Research experience</p>
            <h2 id="experience-title">Research beyond ASU.</h2>
          </div>
          <p>Solar cells, local structure, thin-film processing, and battery diagnostics.</p>
        </div>

        <div className="experience-intro" data-reveal="scale">
          <div className="experience-map" aria-hidden="true">
            <svg viewBox="0 0 360 162">
              <defs>
                <pattern id="world-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0H0V30" fill="none" stroke="currentColor" strokeWidth=".25" opacity=".13" />
                </pattern>
              </defs>
              <rect width="360" height="162" fill="url(#world-grid)" />
              <path d={coastPaths.join(' ')} fill="none" stroke="currentColor" strokeWidth=".6" strokeOpacity=".4" />
              {locations.slice(0, -1).map((item, index) => (
                <path
                  key={`${item.id}-route`}
                  d={routeArc(item.coord as [number, number], locations[index + 1].coord as [number, number])}
                  pathLength="1"
                  className="map-route"
                  fill="none"
                  stroke="currentColor"
                  style={{ transitionDelay: `${180 + index * 140}ms` }}
                />
              ))}
              {locations.map((item) => (
                <g key={item.id}>
                  <circle cx={projectX(item.coord[0])} cy={projectY(item.coord[1])} r="5" className="map-ring" />
                  <circle cx={projectX(item.coord[0])} cy={projectY(item.coord[1])} r="2.4" className="map-active" />
                </g>
              ))}
            </svg>
            <div className="map-caption">
              <span>Research locations · 2022–2026</span>
              <span>Tempe to Tsukuba</span>
            </div>
          </div>

          <p className="rail-hint" aria-hidden="true">Swipe through the labs →</p>
          <div className="placement-gallery" role="region" aria-label="Photographs from four research labs" tabIndex={0}>
            <figure className="photo-card placement-photo" tabIndex={0}>
              <img src="/assets/purdue-surf.jpg" width="800" height="600" alt="Hithesh standing beside his perovskite stability poster at Purdue University." loading="lazy" />
              <figcaption><strong>Purdue · Dou Group · 2023</strong><span>SURF Research Fellow</span><span>Solar-cell fabrication and device database</span></figcaption>
            </figure>
            <figure className="photo-card placement-photo" tabIndex={0}>
              <img src="/assets/hzb-presentation.jpg" width="800" height="600" alt="Hithesh discussing his pair-distribution-function research poster at Helmholtz-Zentrum Berlin." loading="lazy" />
              <figcaption><strong>HZB · Berlin · 2024</strong><span>International Summer Student</span><span>X-ray and neutron PDF analysis</span></figcaption>
            </figure>
            <figure className="photo-card placement-photo" tabIndex={0}>
              <img src="/assets/thinkswiss-certificate.jpg" width="800" height="533" alt="Hithesh receiving a ThinkSwiss certificate after his EPFL summer research." loading="lazy" />
              <figcaption><strong>EPFL · PV-Lab · 2025</strong><span>Undergraduate Research Assistant · ThinkSwiss Scholar</span><span>SnO₂ layers, device fabrication, and stability testing</span></figcaption>
            </figure>
            <figure className="photo-card placement-photo" tabIndex={0}>
              <img src="/assets/nims-team.jpg" width="1024" height="768" alt="Hithesh with colleagues during his research internship at the National Institute for Materials Science." loading="lazy" />
              <figcaption><strong>NIMS · Tsukuba · 2026</strong><span>Graduate Research Intern</span><span>Impedance analysis and autonomous experiments</span></figcaption>
            </figure>
          </div>
        </div>

        <ol className="placement-grid">
          {placements.map((item, index) => (
            <li key={item.id} data-reveal>
              <p className="placement-number" aria-hidden="true">0{index + 1}</p>
              <div>
                <p className="placement-chapter"><span>{chapters[item.id]}</span><span>{item.place} · {item.period}</span></p>
                <h3>{item.institution}</h3>
                <p className="experience-unit">{item.unit}</p>
                <p className="placement-copy">{item.text}</p>
                <p className="experience-role">{item.role}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="experience-home">Research home: Rolston Lab at Arizona State University since 2022.</p>
      </div>
    </section>
  );
}
