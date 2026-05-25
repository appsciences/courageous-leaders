// page-digital-products.jsx — Digital Products catalog

function PageDigitalProducts({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);

  const PRODUCTS = [
    { kind: 'Audio', t: 'Daily Anchor Meditations', sub: '30 guided sits · 7-12 min each', price: 47, hot: false, tag: 'audio' },
    { kind: 'PDF',   t: 'The Speaker\u2019s Workbook', sub: '60-page workbook · build your signature talk', price: 22, hot: true, tag: 'workbook' },
    { kind: 'Course',t: 'Money & Miracles Mini-Course', sub: '6 lessons · 90 min total · lifetime access', price: 88, hot: false, tag: 'course' },
    { kind: 'Audio', t: 'Forgiveness Activation Bundle', sub: '5 audios · clear what\u2019s in the way', price: 33, hot: false, tag: 'audio' },
    { kind: 'PDF',   t: 'The Dreamer\u2019s Field Guide', sub: '40-page field guide · live your dream', price: 14, hot: true, tag: 'workbook' },
    { kind: 'Course',t: 'Magnetic Messaging Lab', sub: '12 lessons · write copy that calls in clients', price: 144, hot: false, tag: 'course' },
    { kind: 'Audio', t: 'Sleep Soundscapes for Visionaries', sub: '8 tracks · 60 min · loopable', price: 22, hot: false, tag: 'audio' },
    { kind: 'PDF',   t: 'The Prosperity Covenant', sub: '14-page ritual workbook + signed covenant', price: 11, hot: false, tag: 'workbook' },
  ];

  const [filter, setFilter] = React.useState('all');
  const FILTERS = ['all', 'audio', 'workbook', 'course'];
  const visible = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.tag === filter);

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Digital Products" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'end' }}>
          <h1 style={{
            fontFamily: F.head, fontWeight: 400, fontSize: 188, lineHeight: 0.86,
            margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
          }}>
            Digital<br />
            <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
              products
            </em>.
          </h1>
          <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0, maxWidth: 460 }}>
            Workbooks, audio activations, and mini-courses. Buy once, keep forever. Designed to be used
            in 30 minutes or less so the wisdom actually lands in your life.
          </p>
        </div>
      </section>

      <RsTicker animated items={['Instant download', 'Yours forever', 'Use in 30 minutes or less', 'Audio · workbooks · courses']} />

      {/* ─── FILTERS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 56px 24px' }}>
        <div style={{ display: 'flex', gap: 0, border: `1px solid ${R_PALETTE.hairline}`, width: 'fit-content' }}>
          {FILTERS.map((f, i) => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '14px 28px', background: filter === f ? ACCENT : 'transparent',
              color: filter === f ? R_PALETTE.ink : R_PALETTE.cream, border: 'none',
              borderRight: i < FILTERS.length - 1 ? `1px solid ${R_PALETTE.hairline}` : 'none',
              fontFamily: F.mono, fontSize: 12, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.15s',
            }}>{f}</button>
          ))}
        </div>
      </section>

      {/* ─── PRODUCT GRID ─────────────────────────────────────────────── */}
      <section style={{ padding: '20px 56px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16 }}>
          {visible.map((p, i) => (
            <div key={p.t} style={{
              background: R_PALETTE.dim, border: `1px solid ${R_PALETTE.hairline}`,
              display: 'flex', flexDirection: 'column', position: 'relative',
              transition: 'border 0.15s',
            }}>
              <div style={{ position: 'relative' }}>
                <PhotoSlot label={`${p.kind} · cover`} h={240} tone={i % 2 ? 'warm' : 'ink'} />
                {p.hot && (
                  <span style={{
                    position: 'absolute', top: 12, right: 12,
                    padding: '4px 10px', background: ACCENT, color: R_PALETTE.ink,
                    fontFamily: F.mono, fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                  }}>● Hot</span>
                )}
                <span style={{
                  position: 'absolute', bottom: 12, left: 12,
                  padding: '4px 10px', background: R_PALETTE.ink, color: ACCENT,
                  fontFamily: F.mono, fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>{p.kind}</span>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 26, lineHeight: 1,
                  margin: '0 0 12px', textTransform: 'uppercase', color: R_PALETTE.cream, letterSpacing: '-0.005em' }}>
                  {p.t}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: 13, lineHeight: 1.5,
                  color: R_PALETTE.mute, margin: '0 0 20px', flex: 1 }}>{p.sub}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: F.head, fontSize: 36, color: ACCENT, lineHeight: 1 }}>${p.price}</span>
                  <button className="rs-cta-btn" style={{
                    padding: '10px 16px', background: 'transparent',
                    color: R_PALETTE.cream, border: `1px solid ${R_PALETTE.cream}`,
                    fontFamily: F.mono, fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer',
                  }}>Buy →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BUNDLE PROMO ─────────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: ACCENT, color: R_PALETTE.ink }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.22em',
              textTransform: 'uppercase', marginBottom: 20 }}>Library bundle</div>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.88,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              Get the whole<br />
              <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none' }}>library</em>.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.6, margin: '24px 0 0', maxWidth: 520 }}>
              Every digital product, current and future. One price. Forever updates.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: F.head, fontSize: 132, lineHeight: 0.9,
              letterSpacing: '-0.025em' }}>$222</div>
            <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
              textTransform: 'uppercase', opacity: 0.7, marginTop: 8 }}>
              Save $169 · lifetime access
            </div>
            <a href="#" className="rs-cta-btn" style={{
              display: 'inline-block', marginTop: 32, padding: '20px 32px',
              background: R_PALETTE.ink, color: ACCENT, textDecoration: 'none',
              fontFamily: F.mono, fontSize: 14, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>● Get the bundle →</a>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageDigitalProducts });
