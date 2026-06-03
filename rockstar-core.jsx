// rockstar-core.jsx — Sacred Rockstar / Spoken Word
// Shared atoms: palette, fonts, shell, nav, ticker, CTA, footer, modal context,
// router context (so nav works in the prototype but is inert in the design canvas).

// ─── palette / fonts ────────────────────────────────────────────────────────
const R_PALETTE = {
  bg:    '#0B0908',
  paper: '#F4EFE3',
  ink:   '#0B0908',
  dim:   '#1A1614',
  warm:  '#2A211A',
  cream: '#F4EFE3',
  mute:  'rgba(244, 239, 227, 0.55)',
  hairline: 'rgba(244, 239, 227, 0.12)',
};

const ACCENT = '#FF3D2E';

const rsFont = (pair) => ({
  head: pair === 'serifLed' ? '"Instrument Serif", serif' : '"Anton", "Bebas Neue", sans-serif',
  emph: '"Instrument Serif", serif',
  body: '"DM Sans", sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
});

// ─── router context ────────────────────────────────────────────────────────
// In prototype.html the App wraps with <RouterProvider>; in the design canvas
// each artboard wraps individually with mode="canvas" (no-op navigation).
const RouterContext = React.createContext({
  path: '/',
  navigate: () => {},
  mode: 'canvas',
});

// Top-level nav with dropdowns. Each top item has either `to` (linkable) or
// just acts as a dropdown trigger. `items` is the dropdown children.
const NAV = [
  { id: 'activations', label: 'Activations', items: [
    { to: '/activations/stage',      label: 'Stage Activation' },
    { to: '/activations/prosperity', label: 'Prosperity Activation' },
  ]},
  { id: 'masterclasses', label: 'Masterclasses', items: [
    { to: '/masterclass/prosperous-timeline', label: 'Most Prosperous Timeline' },
    { to: '/masterclass/speakers-secrets',    label: 'Courageous Speakers Secrets' },
    { to: '/masterclass/dreamers-secrets',    label: 'Courageous Dreamers Secrets' },
    { to: '/masterclass/money-miracles',      label: 'Money, Miracles, & Manifestation' },
  ]},
  { id: 'leadership', label: 'Programs', items: [
    { to: '/miracle-lab', label: 'Miracle Lab' },
    { to: '/dreamers',    label: 'Courageous Dreamers' },
    { to: '/speakers',    label: 'Courageous Speakers' },
    { to: '/leaders',     label: 'Courageous Leaders' },
    { to: '/visionary',   label: 'Courageous Visionaries' },
  ]},
  { id: 'immersions', label: 'Immersions', items: [
    { to: '/immersions#june-6', label: 'June 6th Creative Immersion' },
  ]},
  { id: 'digital', label: 'Digital', to: '/digital-products' },
  { id: 'shop',    label: 'Shop',     to: '/shop' },
  { id: 'testimonies', label: 'Testimonies', to: '/testimonies' },
  { id: 'hire',    label: 'Hire Crystal', to: '/hire' },
];

function RouterProvider({ children }) {
  const [path, setPath] = React.useState(() => {
    const h = location.hash.replace(/^#/, '') || '/';
    return h;
  });
  React.useEffect(() => {
    const on = () => setPath(location.hash.replace(/^#/, '') || '/');
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  // Scroll restoration: top on route change (instant — no smooth scroll
  // since these are landing pages).
  React.useEffect(() => {
    const root = document.getElementById('app-scroll');
    if (root) root.scrollTo({ top: 0, behavior: 'auto' });
    else window.scrollTo(0, 0);
  }, [path]);
  const navigate = (p) => { location.hash = p; };
  return <RouterContext.Provider value={{ path, navigate, mode: 'route' }}>{children}</RouterContext.Provider>;
}

function useRouter() { return React.useContext(RouterContext); }

// Link — handles internal #/foo routes via navigate(), passes everything else
// to a normal anchor.
function RLink({ to, children, style = {}, className, onClick, ...rest }) {
  const { navigate, mode } = useRouter();
  const isInternal = typeof to === 'string' && to.startsWith('/');
  const href = isInternal ? '#' + to : to;
  const handle = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    if (isInternal && mode === 'route') {
      e.preventDefault();
      navigate(to);
    } else if (isInternal && mode === 'canvas') {
      // In canvas, links shouldn't actually fire — they'd change the parent
      // hash, which the design-canvas viewport doesn't expect.
      e.preventDefault();
    }
  };
  return <a href={href} onClick={handle} className={className} style={style} {...rest}>{children}</a>;
}

// ─── modal context (video lightbox) ─────────────────────────────────────────
const ModalContext = React.createContext({ open: () => {} });

function ModalProvider({ children }) {
  const [video, setVideo] = React.useState(null);
  const open = (label) => setVideo(label);
  const close = () => setVideo(null);
  React.useEffect(() => {
    if (!video) return;
    const k = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', k);
      document.body.style.overflow = '';
    };
  }, [video]);
  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {video && (
        <div onClick={close} style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: 'rgba(0, 0, 0, 0.88)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 40, cursor: 'pointer',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            position: 'relative', width: 'min(1200px, 90vw)', aspectRatio: '16/9',
            cursor: 'default',
          }}>
            <button onClick={close} style={{
              position: 'absolute', top: -48, right: 0, background: 'transparent',
              border: 'none', color: R_PALETTE.cream, fontSize: 24, cursor: 'pointer',
              fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}>Close ✕</button>
            <div style={{
              width: '100%', height: '100%', background: '#000',
              border: `1px solid ${ACCENT}`, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 18, color: R_PALETTE.cream,
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%', border: `2px solid ${ACCENT}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 0, height: 0, borderLeft: `20px solid ${ACCENT}`,
                  borderTop: '14px solid transparent', borderBottom: '14px solid transparent',
                  marginLeft: 6,
                }} />
              </div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 13,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: ACCENT,
              }}>NOW PLAYING</div>
              <div style={{
                fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
                fontSize: 36, lineHeight: 1.2, textAlign: 'center', maxWidth: 720,
              }}>{video}</div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
                letterSpacing: '0.18em', textTransform: 'uppercase', color: R_PALETTE.mute,
              }}>(drop in real video src when ready)</div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

function useModal() { return React.useContext(ModalContext); }

// Wraps shared/VideoSlot — adds modal open on click + label-aware.
function RsVideo({ label, h = 400, tone = 'dark', radius = 0, style = {} }) {
  const { open } = useModal();
  return <VideoSlot label={label} h={h} tone={tone} radius={radius} style={style}
    onClick={() => open(label)} />;
}

// ─── shell ───────────────────────────────────────────────────────────────────
function RsShell({ children, scrollable = false }) {
  return (
    <div id={scrollable ? 'app-scroll' : undefined} style={{
      width: '100%', height: scrollable ? '100vh' : '100%',
      background: R_PALETTE.bg, color: R_PALETTE.cream,
      fontFamily: '"DM Sans", sans-serif',
      position: scrollable ? 'fixed' : 'relative',
      top: 0, left: 0, right: 0, bottom: 0,
      overflowY: scrollable ? 'auto' : 'hidden',
      overflowX: 'hidden',
    }}>{children}</div>
  );
}

// ─── ticker ──────────────────────────────────────────────────────────────────
function RsTicker({ items, animated = false }) {
  const text = items.join('  ·  ');
  return (
    <div style={{
      borderTop: `1px solid ${ACCENT}`, borderBottom: `1px solid ${ACCENT}`,
      padding: '14px 0', fontFamily: '"JetBrains Mono", monospace',
      fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: ACCENT, overflow: 'hidden', whiteSpace: 'nowrap',
      background: R_PALETTE.bg,
    }}>
      <div style={{
        display: 'inline-block', paddingLeft: 32,
        animation: animated ? 'rs-marquee 40s linear infinite' : undefined,
      }}>
        {[0,1,2,3,4,5].map((i) => <span key={i}>{text}  ·  </span>)}
      </div>
    </div>
  );
}

// inject marquee keyframes once
if (typeof document !== 'undefined' && !document.getElementById('rs-anim')) {
  const s = document.createElement('style');
  s.id = 'rs-anim';
  s.textContent = `
    @keyframes rs-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .rs-link-line { position: relative; }
    .rs-link-line::after { content:''; position:absolute; left:0; right:100%; bottom:-3px;
      height:1px; background: currentColor; transition: right .25s ease; }
    .rs-link-line:hover::after { right:0; }
    .rs-row-hover:hover { background: ${R_PALETTE.dim}; }
    .rs-row-hover .rs-row-arrow { transition: transform .2s ease; }
    .rs-row-hover:hover .rs-row-arrow { transform: translateX(8px); color: ${ACCENT}; }
    .rs-cta-btn { transition: background .15s ease, color .15s ease, transform .15s ease; }
    .rs-cta-btn:hover { transform: translateY(-2px); }
    .rs-cta-btn:active { transform: translateY(0); }
    .rs-dd-item:hover { background: ${ACCENT}; color: ${R_PALETTE.ink} !important; }
    body, html { background: ${R_PALETTE.bg}; }
  `;
  document.head.appendChild(s);
}

// ─── nav ─────────────────────────────────────────────────────────────────────
function NavItem({ entry, isOpen, onEnter, onLeave }) {
  const { path } = useRouter();
  const hasItems = entry.items && entry.items.length > 0;
  const active = entry.to
    ? path === entry.to
    : hasItems && entry.items.some((i) => path === (i.to || '').split('#')[0]);

  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave}
      style={{ position: 'relative', padding: '24px 0' }}>
      {entry.to ? (
        <RLink to={entry.to} className="rs-link-line"
          style={{
            color: active ? ACCENT : R_PALETTE.cream,
            textDecoration: 'none', paddingBottom: 4,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
            whiteSpace: 'nowrap', cursor: 'pointer',
          }}>{entry.label}</RLink>
      ) : (
        <span className="rs-link-line"
          style={{
            color: active || isOpen ? ACCENT : R_PALETTE.cream,
            paddingBottom: 4, cursor: 'default',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
            whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
          {entry.label}
          <span style={{ fontSize: 9, opacity: 0.6, transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform .2s' }}>▾</span>
        </span>
      )}

      {hasItems && isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: -20,
          minWidth: 280, background: R_PALETTE.dim,
          border: `1px solid ${R_PALETTE.hairline}`, borderTop: `2px solid ${ACCENT}`,
          padding: '12px 0', zIndex: 100,
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        }}>
          {entry.items.map((it) => {
            const cleanTo = (it.to || '').split('#')[0];
            const isHere = path === cleanTo;
            return (
              <RLink key={it.to} to={it.to} className="rs-dd-item"
                style={{
                  display: 'block', padding: '12px 24px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: 14, fontWeight: 500,
                  letterSpacing: '0.01em', textTransform: 'none',
                  color: isHere ? ACCENT : R_PALETTE.cream,
                  textDecoration: 'none', transition: 'all 0.15s ease',
                }}>{it.label}</RLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

function RsNav() {
  const [openId, setOpenId] = React.useState(null);
  const timeoutRef = React.useRef(null);

  const onEnter = (id) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenId(id);
  };
  const onLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenId(null), 120);
  };

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', borderBottom: `1px solid ${R_PALETTE.hairline}`,
      position: 'sticky', top: 0, background: 'rgba(11, 9, 8, 0.92)',
      backdropFilter: 'blur(12px)', zIndex: 50,
    }}>
      <RLink to="/" style={{
        display: 'flex', alignItems: 'center', gap: 12, color: R_PALETTE.cream,
        textDecoration: 'none', padding: '24px 0',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: ACCENT }} />
        <span style={{ fontFamily: '"Anton", sans-serif', fontSize: 20,
          letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          Courageous / Leaders
        </span>
      </RLink>

      <div style={{ display: 'flex', gap: 22 }}>
        {NAV.map((entry) => (
          <NavItem key={entry.id} entry={entry}
            isOpen={openId === entry.id}
            onEnter={() => onEnter(entry.id)}
            onLeave={onLeave} />
        ))}
      </div>

      <RLink to="/contact" style={{
        color: ACCENT, textDecoration: 'none',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
        fontWeight: 700, padding: '24px 0', whiteSpace: 'nowrap',
      }} className="rs-link-line">Contact</RLink>
    </nav>
  );
}

// inject pulse keyframes
if (typeof document !== 'undefined' && !document.getElementById('rs-pulse')) {
  const s = document.createElement('style');
  s.id = 'rs-pulse';
  s.textContent = `@keyframes rs-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }`;
  document.head.appendChild(s);
}

// ─── CTA + Footer ────────────────────────────────────────────────────────────
function RsCTA({ ctx }) {
  const F = rsFont(ctx?.fontPair);
  return (
    <section style={{ background: R_PALETTE.bg, padding: '120px 56px 140px', position: 'relative' }}>
      <RsTicker animated items={['Be the miracle', 'Spread love playfully', 'You are the treasure', 'Create · express · have fun', 'Open hearts & close sales']} />
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <h2 style={{
          fontFamily: F.head, fontWeight: 400, fontSize: 200, lineHeight: 0.86,
          margin: '0 0 48px', textTransform: 'uppercase', letterSpacing: '-0.02em',
        }}>
          This is <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>your</span><br />year of miracles.
        </h2>
        <RLink to="/leadership" className="rs-cta-btn" style={{
          display: 'inline-flex', alignItems: 'center', gap: 16,
          padding: '28px 48px', background: ACCENT, color: R_PALETTE.ink,
          textDecoration: 'none', fontFamily: F.mono, fontSize: 14, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
        }}>● Choose your expansion path →</RLink>
      </div>
    </section>
  );
}

function RsFooter() {
  return (
    <footer style={{ background: R_PALETTE.dim, color: R_PALETTE.cream, padding: '64px 56px 36px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
        <div>
          <div style={{ fontFamily: '"Anton", sans-serif', fontSize: 64, lineHeight: 0.9,
            letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
            Courageous<br /><span style={{ color: ACCENT }}>Leaders</span>
          </div>
          <p style={{ marginTop: 24, fontFamily: '"Instrument Serif", serif', fontStyle: 'italic',
            fontSize: 22, lineHeight: 1.4, color: R_PALETTE.cream, opacity: 0.8, maxWidth: 340 }}>
            For the dreamers, speakers, and visionaries who refuse to let the world stay the same.
          </p>
        </div>
        {[
          ['Activations',     [['Stage', '/activations/stage'], ['Prosperity', '/activations/prosperity']]],
          ['Masterclasses',   [['Speakers Secrets', '/masterclass/speakers-secrets'], ['Dreamers Secrets', '/masterclass/dreamers-secrets'], ['Money & Miracles', '/masterclass/money-miracles']]],
          ['Leadership',      [['Miracle Lab', '/miracle-lab'], ['Dreamers', '/dreamers'], ['Leaders', '/leaders'], ['Visionaries', '/visionary']]],
          ['More',            [['Immersions', '/immersions'], ['Shop', '/shop'], ['Hire Crystal', '/hire'], ['Contact', '/contact']]],
        ].map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: '"JetBrains Mono"', fontSize: 11, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: ACCENT, marginBottom: 18 }}>{h}</div>
            {items.map(([label, to]) => (
              to ? (
                <div key={label} style={{ marginBottom: 8 }}>
                  <RLink to={to} className="rs-link-line" style={{
                    color: R_PALETTE.cream, textDecoration: 'none', fontSize: 14,
                  }}>{label}</RLink>
                </div>
              ) : (
                <div key={label} style={{ fontSize: 14, opacity: 0.85, marginBottom: 8 }}>{label}</div>
              )
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${R_PALETTE.hairline}`, paddingTop: 24, display: 'flex',
        justifyContent: 'space-between', fontFamily: '"JetBrains Mono"', fontSize: 11,
        letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.55 }}>
        <span>© 2026 Crystal · Courageous Leaders</span>
        <span>You agree to spread love playfully ♥</span>
      </div>
    </footer>
  );
}

// ─── reusable: breadcrumb, eyebrow, section header ──────────────────────────
function RsCrumb({ here }) {
  return (
    <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: R_PALETTE.mute, marginBottom: 32 }}>
      <RLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>← Home</RLink>
      {' / Services / '}
      <span style={{ color: ACCENT }}>{here}</span>
    </div>
  );
}

function RsEyebrow({ children, color = ACCENT }) {
  return (
    <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
      letterSpacing: '0.22em', textTransform: 'uppercase', color, marginBottom: 24,
      display: 'flex', alignItems: 'center', gap: 14 }}>
      <span style={{ width: 24, height: 1, background: color }} />
      {children}
    </div>
  );
}

// ─── form mock hook ──────────────────────────────────────────────────────────
function useFormMock(initial = {}) {
  const [data, setData] = React.useState(initial);
  const [state, setState] = React.useState('idle'); // idle | loading | success
  const setField = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const submit = (e) => {
    e && e.preventDefault();
    setState('loading');
    setTimeout(() => setState('success'), 700);
  };
  const reset = () => { setState('idle'); setData(initial); };
  return { data, setField, state, submit, reset };
}

// ─── shared full-page chrome for sub-pages ──────────────────────────────────
// Wraps a sub-page with the same hero pattern + footer + CTA at the end.
function RsPage({ children, ctx, withCTA = true }) {
  return (
    <>
      <RsNav />
      {children}
      {withCTA && <RsCTA ctx={ctx} />}
      <RsFooter />
    </>
  );
}

Object.assign(window, {
  R_PALETTE, ACCENT, rsFont, NAV,
  RouterContext, RouterProvider, useRouter, RLink,
  ModalContext, ModalProvider, useModal,
  RsVideo, RsShell, RsTicker, RsNav, RsCTA, RsFooter,
  RsCrumb, RsEyebrow, useFormMock, RsPage,
});
