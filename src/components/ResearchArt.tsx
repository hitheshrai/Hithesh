type Props = { kind: string };

/** Editorial schematics, not measured data or calculated crystal structures. */
export default function ResearchArt({ kind }: Props) {
  if (kind === 'impedance') {
    return <svg className="research-art" viewBox="0 0 500 340" aria-hidden="true">
      <defs><pattern id="impedance-grid" width="35" height="35" patternUnits="userSpaceOnUse"><path d="M35 0H0V35" fill="none" stroke="currentColor" strokeWidth=".5" opacity=".14" /></pattern></defs>
      <rect width="500" height="340" fill="url(#impedance-grid)" />
      <path d="M64 62V270H441" stroke="currentColor" fill="none" opacity=".35" />
      {[0, 1, 2, 3].map(i => <path key={i} d={`M78 267 C${80 + i * 5} ${126 - i * 19}, ${228 + i * 32} ${126 - i * 19}, ${235 + i * 32} 252 L${315 + i * 25} ${198 - i * 17}`} stroke="currentColor" strokeWidth={i === 3 ? 2.3 : 1.5} opacity={.25 + i * .22} fill="none" />)}
      <circle cx="213" cy="128" r="5" fill="currentColor" /><path d="M213 128L261 70H360" stroke="currentColor" fill="none" strokeWidth="1" /><text x="275" y="57">a changing interface</text>
      <text x="380" y="295">Re(Z)</text><text x="34" y="100" transform="rotate(-90 34 100)">−Im(Z)</text>
    </svg>;
  }
  if (kind === 'perovskites') {
    return <svg className="research-art" viewBox="0 0 500 340" aria-hidden="true">
      {[0, 1, 2, 3].map(i => <g key={i} transform={`translate(0 ${i * 31})`}><path d="M95 127L291 57L418 127L221 198Z" fill="currentColor" fillOpacity={.08 + i * .12} stroke="currentColor" strokeWidth="1" /><path d="M95 127V138L221 210L418 139V127M221 198V210" stroke="currentColor" strokeOpacity=".5" fill="none" /></g>)}
      <path d="M175 32L175 79M198 24V71M221 16V63" stroke="currentColor" opacity=".65" /><text x="34" y="320">film / interface / device</text>
    </svg>;
  }
  const candidates = [[105,89],[170,111],[234,75],[305,99],[386,83],[92,169],[152,205],[219,156],[292,187],[367,164],[119,263],[199,248],[267,279],[343,239],[412,266]];
  return <svg className="research-art" viewBox="0 0 500 340" aria-hidden="true">
      <defs><linearGradient id="search-field" x2="1" y2="1"><stop offset="0" stopColor="#d9d0bd"/><stop offset="1" stopColor="#eee8d9"/></linearGradient></defs>
      <rect x="58" y="40" width="394" height="252" fill="url(#search-field)" opacity=".55"/>
      <path d="M60 276C132 289 152 241 198 221S274 230 303 176 371 117 447 125M60 230C131 249 151 192 196 182S265 190 297 140 371 79 447 86M60 181C124 203 155 153 202 137S272 143 304 98 385 51 447 48" fill="none" stroke="currentColor" strokeWidth="1" opacity=".25"/>
      {candidates.map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i===8?8:4} fill={i===8?'currentColor':'none'} stroke="currentColor" strokeWidth="1.5" opacity={i===8?'.9':'.55'}/>)}
      <path d="M292 187L334 214H421" stroke="currentColor" fill="none" strokeWidth="1"/>
      <text x="340" y="230">a candidate</text><text x="65" y="319">explore / test / refine</text>
  </svg>;
}
