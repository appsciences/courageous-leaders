// shared.jsx — placeholder primitives shared across the three aesthetic variations

// ---------- placeholders ----------

// Image / photo placeholder. Subtle striped fill + monospace label.
function PhotoSlot({ label, w = '100%', h = 320, tone = 'warm', radius = 0, style = {}, onClick }) {
  const tones = {
    warm:   { bg: '#e6dccb', stripe: 'rgba(89, 56, 32, 0.08)', text: '#5c3a1e' },
    dark:   { bg: '#1a1614', stripe: 'rgba(245, 242, 236, 0.06)', text: 'rgba(245, 242, 236, 0.6)' },
    rose:   { bg: '#e8d3cb', stripe: 'rgba(90, 31, 43, 0.09)', text: '#5a1f2b' },
    sage:   { bg: '#cfd6c6', stripe: 'rgba(50, 60, 40, 0.1)', text: '#3a4530' },
    ochre:  { bg: '#d9b97a', stripe: 'rgba(60, 35, 10, 0.12)', text: '#3a2a10' },
    ink:    { bg: '#26201c', stripe: 'rgba(255,240,210,0.05)', text: 'rgba(255,240,210,0.55)' },
    cream:  { bg: '#f0e5d2', stripe: 'rgba(120, 80, 40, 0.07)', text: '#5c3a1e' },
  };
  const t = tones[tone] || tones.warm;
  return (
    <div onClick={onClick} style={{
      width: w, height: h, background: t.bg, borderRadius: radius,
      backgroundImage: `repeating-linear-gradient(135deg, ${t.stripe} 0 1px, transparent 1px 14px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: t.text, fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
      textAlign: 'center', padding: 18, position: 'relative',
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}>
      <span style={{ opacity: 0.85 }}>▢ {label}</span>
    </div>
  );
}

// Video placeholder — same as photo but with a play glyph.
function VideoSlot({ label, w = '100%', h = 360, tone = 'dark', radius = 0, style = {}, onClick }) {
  const tones = {
    warm:   { bg: '#3e2a18', text: '#f5efe4', stripe: 'rgba(245, 239, 228, 0.06)' },
    dark:   { bg: '#0e0c0b', text: '#f5f2ec', stripe: 'rgba(245, 242, 236, 0.05)' },
    rose:   { bg: '#3a1722', text: '#f7efe3', stripe: 'rgba(247, 239, 227, 0.06)' },
    sage:   { bg: '#2a3325', text: '#e9eadf', stripe: 'rgba(233, 234, 223, 0.06)' },
    ink:    { bg: '#181412', text: '#f5f2ec', stripe: 'rgba(245, 242, 236, 0.05)' },
  };
  const t = tones[tone] || tones.dark;
  return (
    <div onClick={onClick} style={{
      width: w, height: h, background: t.bg, borderRadius: radius,
      backgroundImage: `repeating-linear-gradient(135deg, ${t.stripe} 0 1px, transparent 1px 18px)`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      color: t.text, position: 'relative', overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        border: `1.5px solid ${t.text}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 14, opacity: 0.85,
      }}>
        <div style={{
          width: 0, height: 0,
          borderLeft: `16px solid ${t.text}`,
          borderTop: '11px solid transparent',
          borderBottom: '11px solid transparent',
          marginLeft: 4,
        }} />
      </div>
      <span style={{
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.75,
      }}>▶ {label}</span>
    </div>
  );
}

// ---------- pattern SVGs (real decoration, no AI slop) ----------

// Tribal: stacked diamonds / zig-zag / dots — Kente/mudcloth-inspired abstract.
function TribalPattern({ color = '#5c3a1e', bg = 'transparent', kind = 'diamonds', opacity = 1, style = {} }) {
  const patterns = {
    diamonds: (
      <svg viewBox="0 0 60 60" preserveAspectRatio="xMidYMid" style={{ width: '100%', height: '100%', display: 'block', ...style }}>
        <rect width="60" height="60" fill={bg} />
        <g fill={color} opacity={opacity}>
          <path d="M30 4 L42 16 L30 28 L18 16 Z" />
          <path d="M30 32 L42 44 L30 56 L18 44 Z" />
        </g>
      </svg>
    ),
    zigzag: (
      <svg viewBox="0 0 60 20" preserveAspectRatio="xMidYMid" style={{ width: '100%', height: '100%', display: 'block', ...style }}>
        <rect width="60" height="20" fill={bg} />
        <path d="M0 14 L10 4 L20 14 L30 4 L40 14 L50 4 L60 14" stroke={color} strokeWidth="2" fill="none" opacity={opacity} />
      </svg>
    ),
    triLine: (
      <svg viewBox="0 0 80 30" preserveAspectRatio="xMidYMid" style={{ width: '100%', height: '100%', display: 'block', ...style }}>
        <rect width="80" height="30" fill={bg} />
        <g fill={color} opacity={opacity}>
          <path d="M5 25 L15 8 L25 25 Z" />
          <path d="M30 25 L40 8 L50 25 Z" />
          <path d="M55 25 L65 8 L75 25 Z" />
        </g>
      </svg>
    ),
    dots: (
      <svg viewBox="0 0 40 40" preserveAspectRatio="xMidYMid" style={{ width: '100%', height: '100%', display: 'block', ...style }}>
        <rect width="40" height="40" fill={bg} />
        <g fill={color} opacity={opacity}>
          <circle cx="10" cy="10" r="2.5" />
          <circle cx="30" cy="10" r="2.5" />
          <circle cx="10" cy="30" r="2.5" />
          <circle cx="30" cy="30" r="2.5" />
          <circle cx="20" cy="20" r="2.5" />
        </g>
      </svg>
    ),
  };
  return patterns[kind] || patterns.diamonds;
}

// Tribal pattern as repeating background tile.
function tribalTileUrl({ color = '#5c3a1e', kind = 'diamonds', size = 60 }) {
  const c = encodeURIComponent(color);
  const svgs = {
    diamonds: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60' width='${size}' height='${size}'><g fill='${color}'><path d='M30 4 L42 16 L30 28 L18 16 Z'/><path d='M30 32 L42 44 L30 56 L18 44 Z'/></g></svg>`,
    zigzag: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 20' width='${size}' height='${Math.round(size/3)}'><path d='M0 14 L10 4 L20 14 L30 4 L40 14 L50 4 L60 14' stroke='${color}' stroke-width='2' fill='none'/></svg>`,
    triLine: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 30' width='${size}' height='${Math.round(size*30/80)}'><g fill='${color}'><path d='M5 25 L15 8 L25 25 Z'/><path d='M30 25 L40 8 L50 25 Z'/><path d='M55 25 L65 8 L75 25 Z'/></g></svg>`,
    dots: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='${size}' height='${size}'><g fill='${color}'><circle cx='10' cy='10' r='2.5'/><circle cx='30' cy='10' r='2.5'/><circle cx='10' cy='30' r='2.5'/><circle cx='30' cy='30' r='2.5'/><circle cx='20' cy='20' r='2.5'/></g></svg>`,
  };
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svgs[kind] || svgs.diamonds)}")`;
}

// Boho sun arch — concentric semicircle.
function SunArch({ color = '#b8893d', bg = 'transparent', rings = 5, w = 300, h = 150, style = {} }) {
  const arcs = [];
  for (let i = 0; i < rings; i++) {
    const r = (h - 8) * (1 - i / rings);
    arcs.push(<path key={i} d={`M ${w/2 - r} ${h} A ${r} ${r} 0 0 1 ${w/2 + r} ${h}`}
      stroke={color} strokeWidth={1.5} fill="none" />);
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <rect width={w} height={h} fill={bg} />
      {arcs}
    </svg>
  );
}

// Boho organic shape (wavy blob).
function BohoBlob({ color = '#c2796a', size = 200, style = {} }) {
  return (
    <svg viewBox="0 0 200 200" style={{ width: size, height: size, display: 'block', ...style }}>
      <path d="M100 12 C150 12 188 50 188 100 C188 150 150 188 100 188 C50 188 12 150 12 100 C12 50 50 12 100 12 Z M100 30 C70 30 30 65 30 100 C30 140 60 170 100 170 C140 170 170 140 170 100 C170 60 135 30 100 30 Z" fill={color} />
    </svg>
  );
}

// Rockstar: spotlight halftone dots, faded edges.
function HalftoneField({ color = '#ff3d2e', bg = 'transparent', style = {} }) {
  // 8x8 grid, dot size varies with distance to top — creates light beam vibe
  const dots = [];
  for (let y = 0; y < 12; y++) {
    for (let x = 0; x < 16; x++) {
      const r = 1.2 + (y / 12) * 3;
      dots.push(<circle key={`${x}-${y}`} cx={x * 20 + 10} cy={y * 20 + 10} r={r} fill={color} opacity={0.6 + (y/12)*0.4} />);
    }
  }
  return (
    <svg viewBox="0 0 320 240" style={{ width: '100%', height: '100%', display: 'block', ...style }}>
      <rect width="320" height="240" fill={bg} />
      {dots}
    </svg>
  );
}

// ---------- copy ----------

const SERVICES = [
  { id: 'dreamers', name: 'Courageous Dreamers', tag: 'Group coaching · accountability', blurb: 'A community of dreamers turning ideas into reality through aligned action.' },
  { id: 'speakers', name: 'Courageous Speakers', tag: 'Public speaking for funders + clients', blurb: 'Find the voice that calls in investors, clients, and the room you were made to lead.' },
  { id: 'leaders',  name: 'Courageous Leaders',  tag: '1:1 · for next-level leadership',     blurb: 'Two calls a week. Real action maps. A co-creator in the dream by your side.' },
  { id: 'visionary',name: 'Courageous Visionary',tag: 'Delegation · teams · self-care',      blurb: 'Care for yourself as powerfully as you care for the vision you carry.' },
  { id: 'immersions',name: 'Creative Immersions',tag: 'Day + weekend events',                blurb: 'Creators and musicians come together to co-create magic, in person.' },
  { id: 'hire',     name: 'Hire Crystal',        tag: 'Speaker · performer',                  blurb: 'Book Crystal to speak, perform, or activate your stage, retreat, or gathering.' },
];

const PILLARS = [
  { n: '01', t: 'Identity, Faith & Leadership',        d: 'Become the leader the dream is waiting for.' },
  { n: '02', t: 'Vision, Strategy & Aligned Execution',d: 'Map the vision. Take the very next real step.' },
  { n: '03', t: 'Messaging, Systems & Sales',          d: 'Bring in clients, funders, and investors on purpose.' },
  { n: '04', t: 'Networking & Collective Momentum',    d: 'Build the rooms and tables where movements grow.' },
];

const TESTIMONIES = [
  { quote: 'I woke up wanting to quit. We did one call. Thursday I made $8,000 in sales.', name: 'A. — visionary, $200k+ year', kind: 'written' },
  { quote: 'Crystal sees the hill, races me to it, and helps me push the first snowball down.', name: 'M. — founder, scaling to 7-figures', kind: 'written' },
  { quote: 'I stopped chasing. I started celebrating. The clients came anyway.', name: 'J. — speaker + creator', kind: 'written' },
];

Object.assign(window, {
  PhotoSlot, VideoSlot,
  TribalPattern, tribalTileUrl, SunArch, BohoBlob, HalftoneField,
  SERVICES, PILLARS, TESTIMONIES,
});
