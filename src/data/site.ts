export const profile = {
  name: 'Hithesh Rai Purushothama',
  email: 'hraipuru@asu.edu',
  github: 'https://github.com/hitheshrai',
  linkedin: 'https://www.linkedin.com/in/hithesh-rai-p/',
};

// A deliberately small public profile. Detailed research records stay outside the site.
export const projects = [
  { id: 'perovskites', number: '01', category: 'Undergraduate · Solar', affiliation: 'ASU · Rolston Lab', title: 'From narrow to wide bandgaps.', problem: 'Question', problemText: 'How do composition and processing change what a perovskite film absorbs—and how it degrades?', role: 'Contribution', roleText: 'Started with mobile ions in FAPbI₃, then moved to ambient-processed cesium-based films.', outcome: 'Shared', outcomeText: 'Through IEEE PVSC and IPEROP.', href: 'https://www.nanoge.org/proceedings/IPEROP25/674e7264d74a090160ef6a3d', link: 'IPEROP record' },
  { id: 'impedance', number: '02', category: 'Master’s · Batteries', affiliation: 'ASU · Rolston Lab', title: 'Follow the degradation signal.', problem: 'Question', problemText: 'What can impedance—how a cell resists current at different frequencies—tell us before performance is lost?', role: 'Contribution', roleText: 'Test physical checks, features, and models against battery cells they have not seen before.', outcome: 'Shared', outcomeText: 'The cross-system approach at AI4X 2026.', href: 'https://openreview.net/pdf?id=qJkiTa9Z0q', link: 'AI4X abstract' },
  { id: 'computational-materials', number: '03', category: 'Across both · Computation', affiliation: 'ASU · Rolston Lab', title: 'Choose the next experiment.', problem: 'Question', problemText: 'How can a large materials space be searched without treating every candidate as equally useful?', role: 'Contribution', roleText: 'Build screening workflows that narrow what should be tested next.', outcome: 'Direction', outcomeText: 'Let computation guide experiments, then let experiments correct the model.', href: 'https://github.com/rolston-lab-asu/BO-for-Energy-material', link: 'Rolston Lab code' },
];

export const publications = [
  { year: '2026', venue: 'AI4X–Accelerate · Singapore', type: 'Poster', title: 'Transferable Impedance-Grounded Learning for Interfacial Degradation Across Energy Systems', authors: 'H. R. Purushothama, M. Casareto, N. Rolston', href: 'https://openreview.net/pdf?id=qJkiTa9Z0q', linkLabel: 'Abstract', note: 'The linked abstract predates the presented poster and lists H. R. Purushothama and N. Rolston.' },
  { year: '2025', venue: 'IPEROP · Kyoto', type: 'Poster', title: 'Blade-Coated Cesium Lead Halide Perovskite Thin Films for Alphavoltaic and Optoelectronic Applications', authors: 'H. R. Purushothama, N. Rolston', href: 'https://www.nanoge.org/proceedings/IPEROP25/674e7264d74a090160ef6a3d', linkLabel: 'Conference record', note: '' },
  { year: '2024', venue: 'IEEE PVSC · Seattle', type: 'Conference paper', title: 'Quantifying Mobile Ions in Formamidinium Lead Iodide Perovskite to Study Ion Migration for Enhanced Stability and Performance', authors: 'H. R. Purushothama, S. Penukula, N. Rolston', href: 'https://doi.org/10.1109/PVSC57443.2024.10749044', linkLabel: 'IEEE record', note: '' },
];

export const experience = [
  { id: 'asu', place: 'Tempe', institution: 'Arizona State University', unit: 'Rolston Lab', coord: [-111.94, 33.42], period: 'Since 2022', role: 'Research Assistant · Graduate role since Jan 2026', text: 'The work began with making perovskite films alongside the Rolston Lab team. Ambient processing is what manufacturing needs—and it is harder.' },
  { id: 'purdue', place: 'West Lafayette', institution: 'Purdue University', unit: 'Letian Dou Group', coord: [-86.91, 40.42], period: 'Summer 2023', role: 'SURF Research Fellow', text: 'Fabricated and tested halide-perovskite solar cells, then compiled device structures, processing conditions, additives, and efficiencies into a shared database.' },
  { id: 'hzb', place: 'Berlin', institution: 'Helmholtz-Zentrum Berlin', unit: 'Quantum Phenomena in Novel Materials', coord: [13.4, 52.52], period: 'Summer 2024', role: 'International Summer Student', text: 'Analyzed X-ray and neutron total-scattering data to connect local atomic structure with phase behavior in ferroelectric and piezoelectric perovskites.' },
  { id: 'epfl', place: 'Neuchâtel', institution: 'EPFL', unit: 'Photovoltaics and Thin-Film Electronics Laboratory', coord: [6.93, 46.99], period: 'Summer 2025', role: 'Undergraduate Research Assistant · ThinkSwiss Scholar', text: 'Worked with the PV-Lab team on SnO₂ transport layers, device fabrication, encapsulation, and stability testing; fabricated single-junction cells up to 19% efficiency.' },
  { id: 'nextlab', place: 'Tempe', institution: 'ASU Next Lab', unit: 'AI & Edge Systems', coord: [-111.94, 33.42], period: 'Since 2023', role: 'Studio Associate from Sep 2023 · Management Intern since Mar 2026', text: 'Partner goals became systems the team could test under limited power and connectivity—with trade-offs made visible early.' },
  { id: 'nims', place: 'Tsukuba', institution: 'NIMS', unit: 'Automated Electrochemical Experiments Team', coord: [140.11, 36.08], period: 'May–Aug 2026', role: 'Graduate Research Intern', text: 'Built analysis tools for roughly 12,000 impedance spectra and a 60-cell factorial study; rejected a strong-looking model after a lithium-conservation check exposed an artifact.' },
];
