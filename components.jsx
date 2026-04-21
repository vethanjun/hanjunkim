// Shared UI components for all three design variants

const brand = {
  ink: '#0f1419',
  ink2: '#2a3441',
  muted: '#6b7684',
  line: '#e6e4df',
  paper: '#faf8f3',
  paper2: '#f2efe8',
  accent: '#a8321e',  // crimson lab accent
  accent2: '#c9b581', // warm ochre
  serif: '"Cormorant Garamond", "Source Serif Pro", Georgia, serif',
  sans: '"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',
  mono: '"JetBrains Mono", "SF Mono", Consolas, monospace',
};

// News data from the live site (trimmed/curated)
const newsData = [
  { date: '2026.04.11', type: 'paper', journal: 'Small Structures', text: 'Research article accepted' },
  { date: '2026.03.30', type: 'paper', journal: 'Nano Convergence', text: 'Research article accepted' },
  { date: '2026.03.30', type: 'paper', journal: 'Materials Today Bio', text: 'Research article accepted' },
  { date: '2026.03.01', type: 'member', text: 'Minjeong & Su-hyun joined the lab' },
  { date: '2026.02.12', type: 'paper', journal: 'Int. J. Biological Macromolecules', text: 'Research article accepted' },
  { date: '2026.02.10', type: 'paper', journal: 'Advanced Science', text: 'Research article accepted' },
  { date: '2026.01.13', type: 'paper', journal: 'Colloids and Surfaces B', text: 'Research article accepted', link: '#' },
  { date: '2025.12.28', type: 'paper', journal: 'Advanced Healthcare Materials', text: 'Research article accepted', link: '#' },
  { date: '2025.11.17', type: 'award', text: '2025-1 석탑강의상 수상 (병태생리학 I, 상위 5%)' },
  { date: '2025.11.01', type: 'award', text: '첨단융합신약학과 2대 학과장 임명' },
  { date: '2025.09.01', type: 'promote', text: 'Promoted to Associate Professor' },
  { date: '2025.08.19', type: 'paper', journal: 'Chemical Engineering Journal', text: 'Research article accepted', link: '#' },
];

const researchPillars = [
  { id: '01', title: 'Biocompatibility', desc: 'Understanding how biomedical materials interact with living systems — immune response, tissue integration, long-term safety.' },
  { id: '02', title: 'Therapeutic Efficacy', desc: 'Quantifying "how" and "why" novel therapies work in animal models of human disease.' },
  { id: '03', title: 'Disease Modeling', desc: 'Building preclinical models that bridge benchtop discovery and clinical translation.' },
  { id: '04', title: 'Translational Engineering', desc: 'Making bioengineered technologies biologically applicable through multidisciplinary strategy.' },
];

const metrics = [
  { n: '60+', label: 'Peer-reviewed papers' },
  { n: '7', label: 'Patents granted' },
  { n: '12', label: 'Current lab members' },
  { n: '2023', label: 'Lab founded' },
];

Object.assign(window, { brand, newsData, researchPillars, metrics });
