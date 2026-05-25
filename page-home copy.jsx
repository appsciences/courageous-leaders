// page-home.jsx — Sacred Rockstar Home

function PageHome({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const tag = (ctx.tagline || 'Empowering Courageous Leaders, Creatives, & Visionaries.').trim().replace(/\.+$/, '');

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '72px 56px 100px', minHeight: 920 }}>
        {/* spotlight halftone, top right — with small image tucked into corner */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 560, height: 760, pointerEvents: 'none' }}>
          <div style={{ width: '100%', height: '100%', opacity: 0.5 }}>
            <HalftoneField color={ACCENT} bg="transparent" />
          </div>
          {/* small image tucked into halftone corner */}
          <div style={{
            position: 'absolute', top: 48, right: 56, width: 200, height: 240,
            pointerEvents: 'auto', border: `1px solid ${ACCENT}`,
            boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
          }}>
            <PhotoSlot label="Crystal · portrait" h="100%" tone="warm" />
          </div>
        </div>

        <div style={{ marginBottom: 60, fontFamily: F.mono, fontSize: 12,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: R_PALETTE.mute }}>
          VOL. 01 / 2026 — A SACRED ROCKSTAR MANIFESTO
        </div>

        <h1 style={{
          fontFamily: F.head, fontWeight: 400,
          fontSize: 'clamp(60px, 6.4vw, 96px)', lineHeight: 1.0,
          margin: 0, letterSpacing: '-0.015em', textTransform: 'uppercase',
          position: 'relative', zIndex: 1, maxWidth: 1280,
        }}>
          Empowering{' '}
          <span style={{ fontFamily: F.emph, fontStyle: 'italic', fontWeight: 400,
            textTransform: 'none', color: ACCENT }}>courageous leaders</span>,{' '}
          <span style={{ fontFamily: F.emph, fontStyle: 'italic', fontWeight: 400,
            textTransform: 'none', color: ACCENT }}>creatives</span>, and{' '}
          <span style={{ fontFamily: F.emph, fontStyle: 'italic', fontWeight: 400,
            textTransform: 'none', color: ACCENT }}>visionaries</span>{' '}
          to turn their dreams, gifts, &amp; messages into real-world movements and meaningful impact.
        </h1>

        <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'end' }}>
          <p style={{
            fontFamily: F.body, fontSize: 22, lineHeight: 1.55, color: R_PALETTE.cream,
            maxWidth: 580, margin: 0,
          }}>{ctx.subTagline || 'Coaching for the dreamers, speakers, and visionaries who refuse to let the world stay the same.'}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <RLink to="/leadership" className="rs-cta-btn" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '24px 28px', background: ACCENT, color: R_PALETTE.ink,
              textDecoration: 'none', fontFamily: F.mono, fontSize: 13,
              fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              <span>Choose your expansion path</span><span>→</span>
            </RLink>
            <RLink to="/masterclasses" className="rs-cta-btn" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '24px 28px', background: 'transparent', color: R_PALETTE.cream,
              textDecoration: 'none', fontFamily: F.mono, fontSize: 13,
              fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
              border: `1px solid ${R_PALETTE.cream}`,
            }}>
              <span>Free masterclasses</span><span>↗</span>
            </RLink>
          </div>
        </div>
      </section>

      <RsTicker animated items={['Open hearts & close sales', 'Manifest your wildest dreams', 'Public speaking that funds movements', 'In-person creative immersions', 'Hire Crystal']} />

      {/* ─── SERVICES (tracklist) ─────────────────────────────────────── */}
      <section style={{ padding: '120px 0 0', background: R_PALETTE.bg }}>
        <div style={{ padding: '0 56px', marginBottom: 80 }}>
          <RsEyebrow>Side A · The Programs</RsEyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'baseline' }}>
            <h2 style={{
              fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.92,
              margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase',
            }}>
              Choose your <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>next-level</span><br />
              expansion path<br />
              and step into it<br />
              with <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>courage</span>.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.55, color: R_PALETTE.mute, margin: 0, maxWidth: 460 }}>
              From first ideas to large-scale impact, choose the path that supports your vision.
              Five tracks, same heat &mdash; pick the rhythm of support your dream is asking for.
            </p>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${R_PALETTE.hairline}` }}>
          {[
            { id: 'dreamers',  n: '01', name: 'Courageous Dreamers',    blurb: 'Activate your highest potential & purpose. Live your wildest dreams.' },
            { id: 'speakers',  n: '02', name: 'Courageous Speakers',    blurb: 'Tell your story to get more investors, funders, and clients.' },
            { id: 'leaders',   n: '03', name: 'Courageous Leaders',     blurb: 'Group and one-on-one support to market and lead your movement.' },
            { id: 'visionary', n: '04', name: 'Courageous Visionaries', blurb: 'Group and one-on-one support for well-established visionaries ready to have more impact with less stress.' },
            { id: 'immersions',n: '05', name: 'Creative Immersions',    blurb: 'In-person events bringing together creators, artists, and musicians to co-create magic & content.' },
          ].map((s) => (
            <RLink key={s.id} to={`/${s.id}`} className="rs-row-hover"
              style={{
                display: 'grid', gridTemplateColumns: '120px 1.4fr 1.4fr 200px',
                alignItems: 'center', gap: 40, padding: '32px 56px',
                borderBottom: `1px solid ${R_PALETTE.hairline}`,
                color: R_PALETTE.cream, textDecoration: 'none',
                transition: 'background 0.2s',
              }}>
              <span style={{ fontFamily: F.mono, fontSize: 14, color: ACCENT, letterSpacing: '0.14em' }}>
                TRACK {s.n}
              </span>
              <h3 style={{
                fontFamily: F.head, fontWeight: 400, fontSize: 52, lineHeight: 1,
                margin: 0, textTransform: 'uppercase', letterSpacing: '-0.01em',
              }}>{s.name}</h3>
              <p style={{ fontFamily: F.body, fontSize: 16, lineHeight: 1.5, color: R_PALETTE.mute, margin: 0 }}>
                {s.blurb}
              </p>
              <span style={{
                fontFamily: F.mono, fontSize: 13, letterSpacing: '0.14em',
                textTransform: 'uppercase', textAlign: 'right', display: 'flex',
                justifyContent: 'flex-end', alignItems: 'center', gap: 12,
              }}>
                <span>Press play</span>
                <span className="rs-row-arrow" style={{ width: 32, height: 32, border: `1px solid ${R_PALETTE.cream}`,
                  borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>▶</span>
              </span>
            </RLink>
          ))}
        </div>
      </section>

      {/* ─── 4 PILLARS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 80, alignItems: 'end' }}>
          <h2 style={{
            fontFamily: F.head, fontWeight: 400, fontSize: 140, lineHeight: 0.88,
            margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase',
          }}>
            The four<br /><span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>pillars</span>.
          </h2>
          <div style={{ paddingBottom: 12 }}>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: R_PALETTE.warm, margin: 0, maxWidth: 480 }}>
              Built to support the leader, not just the business. Wherever you are in the journey,
              we weave these four to create the clarity, courage, and real-world results you came for.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          border: `1px solid ${R_PALETTE.ink}` }}>
          {PILLARS.map((p, i) => (
            <div key={p.n} style={{
              padding: '48px 40px', minHeight: 280, position: 'relative',
              borderRight: (i % 2 === 0) ? `1px solid ${R_PALETTE.ink}` : 'none',
              borderBottom: i < 2 ? `1px solid ${R_PALETTE.ink}` : 'none',
            }}>
              <div style={{
                position: 'absolute', top: 40, right: 40,
                fontFamily: F.head, fontSize: 96, lineHeight: 0.8,
                color: ACCENT, opacity: 0.9,
              }}>{p.n}</div>
              <h3 style={{
                fontFamily: F.head, fontWeight: 400, fontSize: 42, lineHeight: 1,
                margin: '0 0 24px', maxWidth: 360, textTransform: 'uppercase', letterSpacing: '-0.005em',
              }}>{p.t}</h3>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 24, lineHeight: 1.35,
                color: R_PALETTE.warm, margin: 0, maxWidth: 440 }}>&ldquo;{p.d}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WORK WITH CRYSTAL ─────────────────────────────────────────── */}
      <section id="work" style={{ padding: '140px 56px', background: R_PALETTE.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 80, alignItems: 'end' }}>
          <div>
            <RsEyebrow>Side B · Work with Crystal</RsEyebrow>
            <h2 style={{
              fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.88,
              margin: 0, letterSpacing: '-0.02em', textTransform: 'uppercase',
            }}>
              From first clients<br />to <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>global movements</span><br />
              we help your dreams<br />come true.
            </h2>
          </div>
          <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0 }}>
            For the founders bringing their first project to life &mdash; and for the seasoned operators who&rsquo;ve
            already built it big and are scaling or transitioning &mdash; a fellow visionary stands beside you.
            Not coach. Not employee. <em style={{ fontFamily: F.emph, color: R_PALETTE.cream }}>Best friend to the vision.</em>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 80 }}>
          <RsVideo label="Crystal coaching · 90s reel" h={420} tone="dark" />
          <RsVideo label="On stage · highlight" h={420} tone="ink" />
          <RsVideo label="Client transformation" h={420} tone="dark" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
          {TESTIMONIES.map((t, i) => (
            <div key={i} style={{
              padding: '48px 40px', position: 'relative',
              background: i === 1 ? ACCENT : R_PALETTE.dim,
              color: i === 1 ? R_PALETTE.ink : R_PALETTE.cream,
            }}>
              <span style={{
                fontFamily: F.head, fontSize: 120, lineHeight: 0.5, position: 'absolute',
                top: 36, left: 28, color: i === 1 ? R_PALETTE.ink : ACCENT, opacity: 0.95,
              }}>&ldquo;</span>
              <p style={{
                fontFamily: F.emph, fontStyle: 'italic', fontSize: 28, lineHeight: 1.25,
                margin: '40px 0 32px', position: 'relative', zIndex: 1,
              }}>{t.quote}</p>
              <div style={{
                fontFamily: F.mono, fontSize: 12, letterSpacing: '0.16em',
                textTransform: 'uppercase', opacity: i === 1 ? 0.75 : 1,
                color: i === 1 ? R_PALETTE.ink : ACCENT,
              }}>{t.name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageHome });
