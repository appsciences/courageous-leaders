// page-shop.jsx — Physical + branded merchandise shop

function PageShop({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);

  const ITEMS = [
    { t: 'Courageous Tee · Black', kind: 'apparel', price: 44, sizes: 'XS – XXL', tone: 'ink' },
    { t: 'Sacred Rockstar Hoodie', kind: 'apparel', price: 88, sizes: 'XS – XXL', tone: 'dark' },
    { t: 'Manifesto Print · 18×24', kind: 'print', price: 32, sizes: 'limited run', tone: 'warm' },
    { t: 'Spread Love Tote', kind: 'accessory', price: 28, sizes: 'one size', tone: 'ink' },
    { t: 'Year of Miracles Journal', kind: 'paper', price: 36, sizes: '160 pages · linen', tone: 'warm' },
    { t: 'Open Hearts Cap', kind: 'accessory', price: 36, sizes: 'one size · adjustable', tone: 'dark' },
    { t: 'Speaker Pin Set', kind: 'accessory', price: 18, sizes: 'set of 3', tone: 'ink' },
    { t: 'Visionary Mug', kind: 'home', price: 24, sizes: '12 oz · ceramic', tone: 'warm' },
  ];

  const [filter, setFilter] = React.useState('all');
  const FILTERS = ['all', 'apparel', 'print', 'accessory', 'paper', 'home'];
  const visible = filter === 'all' ? ITEMS : ITEMS.filter((p) => p.kind === filter);

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Shop" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'end' }}>
          <h1 style={{
            fontFamily: F.head, fontWeight: 400, fontSize: 188, lineHeight: 0.86,
            margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
          }}>
            The<br />
            <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
              merch
            </em>.
          </h1>
          <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0, maxWidth: 460 }}>
            Wear the manifesto. Drink the message. Carry the dream. Every piece is printed in small runs &mdash;
            once they&rsquo;re gone, the next drop is something new.
          </p>
        </div>
      </section>

      <RsTicker animated items={['Free delivery over $80', 'Small batch · limited drops', 'Printed in California', 'Worldwide delivery']} />

      {/* ─── FILTERS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 56px 24px' }}>
        <div style={{ display: 'flex', gap: 0, border: `1px solid ${R_PALETTE.hairline}`, width: 'fit-content', flexWrap: 'wrap' }}>
          {FILTERS.map((f, i) => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '14px 24px', background: filter === f ? ACCENT : 'transparent',
              color: filter === f ? R_PALETTE.ink : R_PALETTE.cream, border: 'none',
              borderRight: i < FILTERS.length - 1 ? `1px solid ${R_PALETTE.hairline}` : 'none',
              fontFamily: F.mono, fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.15s',
            }}>{f}</button>
          ))}
        </div>
      </section>

      {/* ─── GRID ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '20px 56px 120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16 }}>
          {visible.map((it, i) => (
            <div key={it.t} style={{
              background: R_PALETTE.dim, border: `1px solid ${R_PALETTE.hairline}`,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ position: 'relative' }}>
                <PhotoSlot label={it.t} h={300} tone={it.tone} />
                <span style={{
                  position: 'absolute', top: 12, left: 12,
                  padding: '4px 10px', background: R_PALETTE.ink, color: ACCENT,
                  fontFamily: F.mono, fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>{it.kind}</span>
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 24, lineHeight: 1.0,
                  margin: '0 0 10px', textTransform: 'uppercase', color: R_PALETTE.cream }}>
                  {it.t}
                </h3>
                <p style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: R_PALETTE.mute, margin: '0 0 20px', flex: 1 }}>
                  {it.sizes}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: F.head, fontSize: 32, color: ACCENT, lineHeight: 1 }}>${it.price}</span>
                  <button className="rs-cta-btn" style={{
                    padding: '10px 16px', background: 'transparent',
                    color: R_PALETTE.cream, border: `1px solid ${R_PALETTE.cream}`,
                    fontFamily: F.mono, fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer',
                  }}>Add →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROMO BAND ─────────────────────────────────────────────── */}
      <section style={{ padding: '100px 56px', background: R_PALETTE.dim, textAlign: 'center' }}>
        <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 38, lineHeight: 1.3,
          color: R_PALETTE.cream, margin: 0, maxWidth: 880, marginLeft: 'auto', marginRight: 'auto' }}>
          &ldquo;Every piece is a reminder you carry into the room. Wear it. Use it. Spread love playfully.&rdquo;
        </p>
      </section>
    </>
  );
}

Object.assign(window, { PageShop });
