// page-hire.jsx — Hire Crystal as a speaker / performer

function PageHire({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const book = useFormMock({ name: '', email: '', org: '', event: '', date: '', notes: '' });

  const TOPICS = [
    { n: '01', t: 'Become a Courageous Leader', d: 'Identity, faith, and the leadership the dream requires.' },
    { n: '02', t: 'First Client to First $100k', d: 'How to build the systems and the voice that bring real revenue in.' },
    { n: '03', t: 'Speak to be Funded', d: 'The art of speaking that calls in investors, funders, and clients.' },
    { n: '04', t: 'Visionary Self-Care', d: 'Tending the leader so the movement can grow.' },
    { n: '05', t: 'Spoken Word / Performance', d: 'A 20-min performed keynote blending poetry, song, and call to action.' },
  ];

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Hire Crystal" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 96px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'end' }}>
          <h1 style={{
            fontFamily: F.head, fontWeight: 400, fontSize: 188, lineHeight: 0.86,
            margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
          }}>
            Book Crystal<br />
            for your<br />
            <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
              stage
            </span>.
          </h1>
          <div>
            <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.6, color: R_PALETTE.cream, margin: 0 }}>
              Keynote, performed talk, fireside, masterclass, or full ritual close-out for your retreat.
              Crystal moves rooms &mdash; and makes people want to take action.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['Keynote', 'Fireside', 'Performance', 'Masterclass', 'Retreat close-out'].map((tag) => (
                <span key={tag} style={{
                  padding: '8px 14px', border: `1px solid ${R_PALETTE.hairline}`,
                  fontFamily: F.mono, fontSize: 11, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: R_PALETTE.mute,
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RsTicker animated items={['Booking 2026 stages', 'Available worldwide', 'San Marcos · Los Angeles · NYC · London', 'Press play, hire crystal']} />

      {/* ─── SPEAKER REEL ─────────────────────────────────────────────── */}
      <section style={{ padding: '110px 56px' }}>
        <header style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            The <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>reel</em>.
          </h2>
          <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: R_PALETTE.mute }}>03 min · 1080p</div>
        </header>
        <RsVideo label="Crystal speaker reel · 3 min" h={620} tone="ink" />
      </section>

      {/* ─── BIO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <PhotoSlot label="Press portrait · Crystal" h={520} tone="warm" />
            <div style={{ marginTop: 16, fontFamily: F.mono, fontSize: 11, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: R_PALETTE.warm, textAlign: 'center' }}>
              Hi-res available on request
            </div>
          </div>
          <div>
            <RsEyebrow color={R_PALETTE.warm}>The bio</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 88, lineHeight: 0.92,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.015em' }}>
              A speaker, performer,<br />
              and <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
                co-creator
              </em> of dreams.
            </h2>
            <div style={{ marginTop: 36, fontFamily: F.body, fontSize: 18, lineHeight: 1.65,
              color: R_PALETTE.warm, columnCount: 2, columnGap: 32 }}>
              <p style={{ marginTop: 0 }}>
                Crystal is a leadership coach, performer, and the founder of Courageous Leaders &mdash; a coaching
                practice for the dreamers, speakers, and visionaries who refuse to let the world stay the same.
              </p>
              <p>
                She blends sacred performance with practical movement-building, helping leaders find the voice
                that calls in investors, the systems that bring in real clients, and the rhythms that sustain
                them through the scaling.
              </p>
              <p>
                Her work has touched stages in Los Angeles, New York, and across the West Coast, and her
                clients include first-time founders building their first $100k year and seasoned operators
                scaling movements that reach thousands.
              </p>
              <p style={{ marginBottom: 0, fontFamily: F.emph, fontStyle: 'italic', fontSize: 22, color: R_PALETTE.ink }}>
                On any stage, she leaves the room standing &mdash; and moving.
              </p>
            </div>

            {/* download row */}
            <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                ['One-Pager PDF', 'speaker-one-pager.pdf', '0.4 mb'],
                ['Media Kit PDF', 'crystal-media-kit.pdf', '3.2 mb'],
              ].map(([label, file, size]) => (
                <a key={file} href="#" className="rs-cta-btn" style={{
                  padding: '24px 28px', background: R_PALETTE.ink, color: R_PALETTE.cream,
                  textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                      color: ACCENT, textTransform: 'uppercase', marginBottom: 4 }}>↓ Download</div>
                    <div style={{ fontFamily: F.head, fontSize: 28, lineHeight: 1,
                      textTransform: 'uppercase', letterSpacing: '-0.005em' }}>{label}</div>
                  </div>
                  <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.16em',
                    color: R_PALETTE.mute, textTransform: 'uppercase' }}>{size}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOPICS ───────────────────────────────────────────────────── */}
      <section style={{ padding: '130px 56px', background: R_PALETTE.bg }}>
        <header style={{ marginBottom: 64 }}>
          <RsEyebrow>Signature talks</RsEyebrow>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Pick your <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
              setlist</em>.
          </h2>
        </header>

        <div style={{ borderTop: `1px solid ${R_PALETTE.hairline}` }}>
          {TOPICS.map((t, i) => (
            <div key={t.n} className="rs-row-hover" style={{
              display: 'grid', gridTemplateColumns: '120px 1.4fr 1.4fr 100px',
              alignItems: 'center', gap: 40, padding: '32px 0',
              borderBottom: `1px solid ${R_PALETTE.hairline}`,
              transition: 'background 0.2s', paddingLeft: 24, paddingRight: 24,
            }}>
              <span style={{ fontFamily: F.mono, fontSize: 14, color: ACCENT, letterSpacing: '0.14em' }}>
                TRACK {t.n}
              </span>
              <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 44, lineHeight: 1,
                margin: 0, textTransform: 'uppercase', letterSpacing: '-0.005em', color: R_PALETTE.cream }}>{t.t}</h3>
              <p style={{ fontFamily: F.body, fontSize: 16, lineHeight: 1.5, color: R_PALETTE.mute, margin: 0 }}>
                {t.d}
              </p>
              <span className="rs-row-arrow" style={{
                fontFamily: F.mono, fontSize: 13, color: R_PALETTE.cream,
                textAlign: 'right', display: 'inline-block',
              }}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOOKING FORM ─────────────────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: ACCENT, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 156, lineHeight: 0.86,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.025em' }}>
            Book the<br />
            <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none' }}>date</em>.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: 460 }}>
            Tell me about the event. If we&rsquo;re aligned, we&rsquo;ll send rates, terms, and the rider
            within 48 hours.
          </p>
        </header>

        <form onSubmit={book.submit} style={{ background: R_PALETTE.ink, color: R_PALETTE.cream,
          padding: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {book.state !== 'success' ? (
            <>
              {[
                ['name',   'Your name',         'text',  1, 'Jane Doe'],
                ['email',  'Email',             'email', 1, 'jane@brand.co'],
                ['org',    'Organization',      'text',  1, 'Brand / Festival / Co.'],
                ['date',   'Date or window',    'text',  1, 'e.g. Oct 12, 2026 — or Q1 2027'],
                ['event',  'Type of event',     'text',  2, 'Keynote · fireside · masterclass · retreat close-out'],
                ['notes',  'Anything we should know', 'textarea', 2, 'Audience, vibe, the talk you want, budget range…'],
              ].map(([k, label, type, span, ph]) => (
                <div key={k} style={{ gridColumn: `span ${span}` }}>
                  <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                    letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                    {label}
                  </label>
                  {type === 'textarea' ? (
                    <textarea required rows={4} value={book.data[k]} onChange={book.setField(k)} placeholder={ph}
                      style={{
                        width: '100%', padding: '14px 0', fontSize: 17, fontFamily: F.body,
                        background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                        color: R_PALETTE.cream, outline: 'none', resize: 'vertical',
                      }} />
                  ) : (
                    <input type={type} required value={book.data[k]} onChange={book.setField(k)} placeholder={ph}
                      style={{
                        width: '100%', padding: '14px 0', fontSize: 18, fontFamily: F.body,
                        background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                        color: R_PALETTE.cream, outline: 'none',
                      }} />
                  )}
                </div>
              ))}

              <button className="rs-cta-btn" disabled={book.state === 'loading'} style={{
                gridColumn: 'span 2', marginTop: 16, padding: '24px',
                background: ACCENT, color: R_PALETTE.ink, border: 'none',
                fontFamily: F.mono, fontWeight: 700, fontSize: 14,
                letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
              }}>{book.state === 'loading' ? '· · ·' : '● Send booking request →'}</button>
            </>
          ) : (
            <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '64px 0' }}>
              <div style={{ width: 72, height: 72, border: `2px solid ${ACCENT}`, borderRadius: '50%',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: F.head, fontSize: 44, color: ACCENT, marginBottom: 24 }}>✓</div>
              <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 44, lineHeight: 1.2,
                color: R_PALETTE.cream, marginBottom: 16 }}>
                Booking received.
              </div>
              <p style={{ fontFamily: F.body, fontSize: 17, color: R_PALETTE.mute, margin: 0, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
                You&rsquo;ll hear back within 48 hours with rates, terms, and the rider for
                <strong style={{ color: R_PALETTE.cream }}> {book.data.event}</strong>.
              </p>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

Object.assign(window, { PageHire });
