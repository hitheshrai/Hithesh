// src/data/content.ts
// Single source of truth for everything the site renders.

export type Station = {
  id: string;
  /** Place name, used as the display heading for the stop. */
  place: string;
  country: string;
  /** [longitude, latitude] — drives the atlas camera and marker position. */
  coord: [number, number];
  institution: string;
  role: string;
  period: string;
  headline: string;
  body: string;
  methods: string[];
};

/**
 * Ordered as travelled, not as a tidy list — the camera returns to Tempe at
 * stop 05, which is the point: the route is a loop, not a ladder.
 */
export const stations: Station[] = [
  {
    id: 'tempe-rolston',
    place: 'Tempe',
    country: 'United States',
    coord: [-111.94, 33.42],
    institution: 'Arizona State University · Rolston Lab',
    role: 'Researcher, Renewable Energy Materials & Devices',
    period: 'Sep 2022 — Present',
    headline: 'Making perovskite films that survive the air they were made in.',
    body: 'Fabricated perovskite thin films by spin and blade coating, and led an Intel-funded cesium wide-bandgap effort that produced an improved-stability prototype — the work behind my first IEEE PVSC paper. Ambient processing is the constraint that makes this hard and the reason it matters for manufacturing.',
    methods: ['Blade coating', 'Spin coating', 'Thin-film stability', 'Device characterisation'],
  },
  {
    id: 'purdue-dou',
    place: 'West Lafayette',
    country: 'United States',
    coord: [-86.91, 40.42],
    institution: 'Purdue University · Letian Dou Group',
    role: 'Research Fellow (SURF)',
    period: 'Summer 2023',
    headline: 'The first time the data set was the experiment.',
    body: 'Built a comparative device-efficiency database in Python and mined the Perovskite Database for material–performance trends that then guided additive selection. This is where the work turned from making samples to asking what the whole literature already knew.',
    methods: ['Python', 'Perovskite Database', 'Trend analysis', 'Additive screening'],
  },
  {
    id: 'berlin-hzb',
    place: 'Berlin',
    country: 'Germany',
    coord: [13.4, 52.52],
    institution: 'Helmholtz-Zentrum Berlin · Quantum Phenomena in Novel Materials',
    role: 'Visiting Researcher',
    period: 'Summer 2024',
    headline: 'Reading disorder directly out of the scattering.',
    body: 'Used pair distribution function analysis with X-ray and neutron diffraction to resolve structural instabilities and morphotropic phase transitions in ferroelectric perovskites. Local structure, not the average lattice, is where the interesting failure modes live.',
    methods: ['PDF analysis', 'Neutron diffraction', 'X-ray diffraction', 'Local structure'],
  },
  {
    id: 'neuchatel-epfl',
    place: 'Neuchâtel',
    country: 'Switzerland',
    coord: [6.93, 46.99],
    institution: 'EPFL · Photovoltaics and Thin-Film Electronics Laboratory',
    role: 'Visiting Researcher — ThinkSwiss Scholarship',
    period: 'Summer 2025',
    headline: 'Single-junction devices at 19%.',
    body: 'Fabricated single-junction perovskite devices reaching 19% efficiency using atomic layer deposition and thermal evaporation. Funded by the ThinkSwiss Research Scholarship. Working in a lab that builds its own tooling changed how I think about reproducibility.',
    methods: ['ALD', 'Thermal evaporation', 'Device fabrication', 'Stability testing'],
  },
  {
    id: 'tempe-nextlab',
    place: 'Tempe',
    country: 'United States',
    coord: [-111.94, 33.42],
    institution: 'ASU Next Lab',
    role: 'Management Intern',
    period: 'Jan 2026 — Present',
    headline: 'Back where it started, working on the other half of the problem.',
    body: 'Leading partner-funded AI initiatives: LangChain retrieval pipelines, benchmarking workloads on NVIDIA Jetson edge hardware, and quantifying the INT8 and Q4 quantisation trade-offs that decide whether a model can run where there is no connectivity.',
    methods: ['RAG', 'LangChain', 'Jetson benchmarking', 'Quantisation', 'Edge deployment'],
  },
  {
    id: 'tsukuba-nims',
    place: 'Tsukuba',
    country: 'Japan',
    coord: [140.11, 36.08],
    institution: 'NIMS · Electrochemical Smart Lab, GREEN',
    role: 'Graduate Research Intern',
    period: 'May — Aug 2026',
    headline: 'Teaching an autonomous lab to read impedance.',
    body: 'Analysing electrochemical impedance spectroscopy data to extend NIMO, the NIMS autonomous materials discovery platform, toward battery research. The goal is a measurement the machine can act on without a human interpreting the Nyquist plot first.',
    methods: ['EIS', 'NIMO', 'Battery materials', 'Autonomous experimentation'],
  },
];

export type Capability = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    id: 'materials',
    title: 'Materials & Devices',
    summary:
      'Hands-on fabrication and characterisation across the full perovskite stack, in ambient and glovebox conditions.',
    items: [
      'Blade coating · spin coating · ambient processing',
      'Atomic layer deposition · thermal evaporation',
      'XRD · PDF analysis · neutron diffraction',
      'EIS · J–V · stability and degradation testing',
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning & Data',
    summary:
      'Models built against real measurements, evaluated on whether they transfer — not on whether they fit.',
    items: [
      'Physics-informed and impedance-grounded models',
      'Experimental data pipelines · Python · NumPy · scikit-learn',
      'Retrieval pipelines · LangChain · RAG',
      'Quantisation trade-offs · INT8 · Q4',
    ],
  },
  {
    id: 'systems',
    title: 'Systems & Deployment',
    summary:
      'Getting the result off the bench: autonomous loops, edge hardware, and work that runs without supervision.',
    items: [
      'Autonomous experimentation · NIMO platform',
      'NVIDIA Jetson · Raspberry Pi · offline LLM deployment',
      'Benchmarking and workload profiling',
      'Cross-institution research programme delivery',
    ],
  },
];

export type Work = {
  id: string;
  index: string;
  title: string;
  description: string;
  meta: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const work: Work[] = [
  {
    id: 'blade-coated-cspbx3',
    index: '01',
    title: 'Blade-Coated CsPbX₃ for Alphavoltaic & Optoelectronic Devices',
    description:
      'Scalable ambient blade coating of cesium lead halide films using PVP/PEG polymer additives. Intel-funded; delivered an improved-stability prototype presented at IEEE PVSC 2024.',
    meta: 'ASU · Rolston Lab · Intel-funded',
    tags: ['Perovskite', 'Blade coating', 'Alphavoltaics'],
    links: [
      {
        label: 'Project record',
        href: 'https://forge.engineering.asu.edu/participant/rai-purushothama-hithesh/',
      },
    ],
  },
  {
    id: 'edge-ai-device',
    index: '02',
    title: 'EDge AI — Solar-Powered Offline LLM Device',
    description:
      'Led development of an offline AI platform running multilingual LLaMA on Raspberry Pi through SolarSPELL, built for communities with no internet access. Recognised by ASU Next Lab.',
    meta: 'ASU Next Lab · SolarSPELL',
    tags: ['LLaMA', 'Edge AI', 'Raspberry Pi', 'LangChain'],
    links: [{ label: 'Programme page', href: 'https://nextlab.asu.edu/edge-ai/' }],
  },
  {
    id: 'ferroelectric-instability',
    index: '03',
    title: 'Structural Instability in Perovskite Ferroelectrics',
    description:
      'Probed morphotropic phase transitions using pair distribution function analysis with X-ray and neutron diffraction at the Institute for Quantum Phenomena in Novel Materials.',
    meta: 'Helmholtz-Zentrum Berlin',
    tags: ['PDF analysis', 'Neutron diffraction', 'Ferroelectrics'],
    links: [
      {
        label: 'Institute',
        href: 'https://www.helmholtz-berlin.de/forschung/oe/qm/quantenphaenomene/index_en.html',
      },
    ],
  },
  {
    id: '2unify-education',
    index: '04',
    title: '2Unify Education Program',
    description:
      'Led robotics curriculum development for middle school students with EPICS and Bridge2Africa, integrating robotic arm programming for underserved communities.',
    meta: 'ASU EPICS · Bridge2Africa',
    tags: ['Robotics', 'Curriculum', 'EPICS'],
    links: [
      { label: 'Programme page', href: 'https://epics.engineering.asu.edu/2022/02/2unify-education/' },
    ],
  },
];

export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  note: string;
  href: string;
};

export const publications: Publication[] = [
  {
    id: 'ai4x-2026',
    title: 'Transferable Impedance-Grounded Learning for Interfacial Degradation Across Energy Systems',
    authors: 'H. R. Purushothama, N. Rolston',
    venue: 'AI4X-AC',
    year: '2026',
    note: 'Accepted poster · Singapore',
    href: 'https://openreview.net/forum?id=qJkiTa9Z0q',
  },
  {
    id: 'iperop-2025',
    title:
      'Blade-Coated Cesium Lead Halide Perovskite Thin Films for Alphavoltaic and Optoelectronic Applications',
    authors: 'H. R. Purushothama, N. Rolston et al.',
    venue: 'IPEROP',
    year: '2025',
    note: 'Poster · Kyoto, Japan',
    href: 'https://www.nanoge.org/proceedings/IPEROP25/674e7264d74a090160ef6a3d',
  },
  {
    id: 'pvsc-2024',
    title:
      'Quantifying Mobile Ions in Formamidinium Lead Iodide Perovskite to Study Ion Migration for Enhanced Stability and Performance',
    authors: 'H. R. Purushothama, N. Rolston et al.',
    venue: 'IEEE 52nd Photovoltaic Specialists Conference',
    year: '2024',
    note: 'Seattle, USA',
    href: 'https://ieeexplore.ieee.org/abstract/document/10749044/',
  },
];

export type Piece = {
  id: string;
  title: string;
  kind: string;
  outlet: string;
  href: string;
};

export const writing: Piece[] = [
  {
    id: 'thinkswiss-video',
    title: 'Doing Research in Switzerland — ThinkSwiss Scholarship',
    kind: 'Video',
    outlet: 'ThinkSwiss',
    href: 'https://www.youtube.com/watch?v=UHKrYFusstU',
  },
  {
    id: 'solarspell-offline-ai',
    title: 'ASU SolarSPELL & Next Lab Pioneer Offline AI',
    kind: 'Feature',
    outlet: 'SolarSPELL',
    href: 'https://solarspell.org/asu-solarspell-next-lab-pioneer-offline-ai',
  },
  {
    id: 'sommer-berlin',
    title: 'Sommer in Berlin: Einblicke in das Leben eines Forschungspraktikanten',
    kind: 'Essay',
    outlet: 'HZB Science Blog',
    href: 'https://science.hzbblog.de/sommer-in-berlin-einblicke-in-das-leben-eines-forschungspraktikanten',
  },
  {
    id: 'journey-leadership',
    title: 'A Journey in Engineering and Leadership',
    kind: 'Profile',
    outlet: 'ASU ECEE',
    href: 'https://ecee.engineering.asu.edu/2023/03/hithesh-rai-purushothama/',
  },
  {
    id: 'surf-purdue',
    title: 'SURF Students at Purdue: A Summer of Research',
    kind: 'Lab post',
    outlet: 'Letian Dou Group',
    href: 'https://letiandougroup.com/2023/05/25/surf-students/',
  },
  {
    id: 'mobile-ion-control',
    title: 'Measuring and Controlling Mobile Ion Concentration in Perovskite Thin Films',
    kind: 'Research',
    outlet: 'ASU FURI',
    href: 'https://forge.engineering.asu.edu/furiproject/measuring-and-controlling-mobile-ion-concentration-to-improve-operational-stability-in-perovskite-thin-films/',
  },
];

export const profile = {
  name: 'Hithesh Rai Purushothama',
  discipline: 'Materials science · Machine learning',
  statement:
    'I build experiment-grounded AI for energy materials — models trained on measurements I took myself, on films I made myself.',
  degrees: [
    { label: 'M.S. AI Engineering (Materials Science)', org: 'Arizona State University' },
    { label: 'B.S.E Electrical & Electronic Engineering', org: 'Arizona State University' },
  ],
  email: 'hraipuru@asu.edu',
  // Resolved once: the site is served from a GitHub Pages sub-path, so the CV
  // link is broken if any call site forgets the base.
  cv: `${import.meta.env.BASE_URL}assets/Rai_Purushothama_Hithesh_CV.pdf`,
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hithesh-rai-p/' },
    { label: 'GitHub', href: 'https://github.com/hitheshrai' },
    { label: 'X', href: 'https://x.com/hitheshrai' },
  ],
};
