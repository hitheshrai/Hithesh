// src/components/Flag.tsx — inline SVGs for the 4 countries used in the timeline
const svgs: Record<string, JSX.Element> = {
  us: (
    <svg viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg">
      <rect width="19" height="10" fill="#B22234" />
      <rect y="0.77" width="19" height="0.77" fill="#fff" />
      <rect y="2.31" width="19" height="0.77" fill="#fff" />
      <rect y="3.85" width="19" height="0.77" fill="#fff" />
      <rect y="5.38" width="19" height="0.77" fill="#fff" />
      <rect y="6.92" width="19" height="0.77" fill="#fff" />
      <rect y="8.46" width="19" height="0.77" fill="#fff" />
      <rect width="7.6" height="5.38" fill="#3C3B6E" />
    </svg>
  ),
  de: (
    <svg viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg">
      <rect width="5" height="1" fill="#000" />
      <rect y="1" width="5" height="1" fill="#D00" />
      <rect y="2" width="5" height="1" fill="#FFCE00" />
    </svg>
  ),
  ch: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="#FF0000" />
      <rect x="13" y="6" width="6" height="20" fill="#fff" />
      <rect x="6" y="13" width="20" height="6" fill="#fff" />
    </svg>
  ),
  jp: (
    <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="6" fill="#BC002D" />
    </svg>
  ),
};

export default function Flag({
  code,
  className = '',
}: {
  code: string;
  className?: string;
}) {
  const svg = svgs[code];
  if (!svg) return null;
  return (
    <span
      className={`inline-flex items-center overflow-hidden rounded-sm ${className}`}
      style={{ width: '1.4em', height: '1em', flexShrink: 0 }}
      aria-hidden="true"
    >
      {svg}
    </span>
  );
}
