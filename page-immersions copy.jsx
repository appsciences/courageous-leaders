// page-immersions.jsx — Creative Immersions

function PageImmersions({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const wait = useFormMock({ email: '' });

  const UPCOMING = [
    {
      id: 'june-6',
      date: 'JUN 06',
      year: '2026',
      title: 'June 6th Creative Immersion',
      where: 'San Marcos, CA',
      kind: 'Day immersion',
      blurb: 'A single Saturday. Songwriters, painters, and storytellers in one room. Leave with one shipped thing and ten new friends.',
      seats: 20,
      status: 'open',
    },
    {
      id: 'bonfire-bloom',
      date: 'OCT 11–13',
      year: '2026',
      title: 'Bonfire & Bloom',
      where: 'San Marcos, CA',
      kind: 'Weekend immersion',
      blurb: 'A weekend of songwriters and storytellers around fire. Strings, sage, and the dreams nobody\u2019s named out loud yet.',
      seats: 18,
      status: 'open',
    },
    {
      id: 'single-sunday',
      date: 'NOV 02',
      year: '2026',
      title: 'Single Sunday: Co-create',
      where: 'Topanga, CA',
      kind: 'Day immersion',
      blurb: 'A one-day creative co-lab. Musicians + creators in one room. Leave with a track and a friend.',
      seats: 24,
      status: 'open',
    },
    {
      id: 'winter-mountaintop',
      date: 'JAN 17–19',
      year: '2027',
      title: 'Winter Mountaintop',
      where: 'Ojai, CA',
      kind: 'Weekend immersion · invite only',
      blurb: 'A retreat for the leaders carrying movements. Rest, ritual, and a writing room that closes the year out clean.',
      seats: 12,
      status: 'waitlist',
    },
  ];

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Creative Immersions" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 96px', position: 'relative' }}>
        <h1 style={{
          fontFamily: F.head, fontWeight: 400, fontSize: 208, lineHeight: 0.84,
          margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
        }}>
          Co-create<br />
          <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
            magic
          </span>,<br />in person.
        </h1>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }}>
          <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.55, margin: 0, color: R_PALETTE.cream, maxWidth: 580 }}>
            Day and weekend events that bring creators and musicians into one room to make something together.
            No conference. No green room. We light a fire and we make.
          </p>
          <a href="#upcoming" className="rs-cta-btn" style={{
            justifySelf: 'end', alignSelf: 'end',
            display: 'inline-flex', alignItems: 'center', gap: 16,
            padding: '24px 36px', background: ACCENT, color: R_PALETTE.ink,
            textDecoration: 'none', fontFamily: F.mono, fontSize: 13, fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>See upcoming →</a>
        </div>
      </section>

      <RsTicker animated items={['No conference', 'No green room', 'Just fire, sound, and shipping together', 'Bonfire & Bloom · Oct 11']} />

      {/* ─── EXPLAINER VIDEO ─────────────────────────────────────────── */}
      <section style={{ padding: '110px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 32 }}>
          <div style={{ background: R_PALETTE.dim, padding: 40, border: `1px solid ${R_PALETTE.hairline}`,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <RsEyebrow>What is a Creative Immersion?</RsEyebrow>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 30, lineHeight: 1.3,
                color: R_PALETTE.cream, margin: 0 }}>
                A small room.<br />
                Hand-picked creators.<br />
                <span style={{ color: ACCENT }}>One thing made together.</span>
              </p>
            </div>
            <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6, color: R_PALETTE.mute, margin: '24px 0 0' }}>
              We blend coaching, song, writing, ritual, and rest. Every immersion produces something
              real &mdash; a track, a book chapter, a launch, a covenant.
            </p>
          </div>
          <RsVideo label="What is a Creative Immersion · 90s" h={520} tone="ink" />
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─────────────────────────────────────────── */}
      <section id="upcoming" style={{ padding: '120px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
              Upcoming
            </span> dates.
          </h2>
          <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: R_PALETTE.warm }}>
            ● {UPCOMING.filter(u => u.status === 'open').length} open · {UPCOMING.filter(u => u.status === 'waitlist').length} waitlist
          </div>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0,
          borderTop: `1px solid ${R_PALETTE.ink}`,
          borderBottom: `1px solid ${R_PALETTE.ink}` }}>
          {UPCOMING.map((e, i) => (
            <div key={e.id} id={e.id} style={{
              display: 'grid', gridTemplateColumns: '180px 1fr 1fr 180px',
              alignItems: 'center', gap: 32, padding: '40px 0',
              borderBottom: i < UPCOMING.length - 1 ? `1px solid ${R_PALETTE.ink}` : 'none',
            }}>
              <div>
                <div style={{ fontFamily: F.head, fontSize: 56, lineHeight: 0.9,
                  color: R_PALETTE.ink, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>{e.date}</div>
                <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.16em',
                  color: R_PALETTE.warm, textTransform: 'uppercase', marginTop: 6 }}>{e.year} · {e.where}</div>
              </div>
              <div>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>{e.kind}</div>
                <div style={{ fontFamily: F.head, fontSize: 44, lineHeight: 1,
                  textTransform: 'uppercase', letterSpacing: '-0.005em' }}>{e.title}</div>
              </div>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 18, lineHeight: 1.45,
                color: R_PALETTE.warm, margin: 0 }}>{e.blurb}</p>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.16em',
                  color: R_PALETTE.warm, textTransform: 'uppercase', marginBottom: 12 }}>
                  {e.status === 'open' ? `${e.seats} seats` : 'waitlist'}
                </div>
                <a href="#" className="rs-cta-btn" style={{
                  display: 'inline-block', padding: '14px 22px',
                  background: e.status === 'open' ? R_PALETTE.ink : 'transparent',
                  color: e.status === 'open' ? ACCENT : R_PALETTE.ink,
                  border: e.status === 'open' ? 'none' : `1px solid ${R_PALETTE.ink}`,
                  textDecoration: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 12,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>{e.status === 'open' ? 'Reserve →' : 'Join waitlist'}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PAST EVENTS GALLERY ─────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.bg }}>
        <header style={{ marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            From the<br />
            <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>archive</span>.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.55, color: R_PALETTE.mute, margin: 0, maxWidth: 380 }}>
            Photos and short films from immersions past. Click any tile to watch or expand.
          </p>
        </header>

        {/* photo + video collage */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gridTemplateRows: '280px 280px',
          gap: 12 }}>
          <PhotoSlot label="Bonfire & Bloom 2025 · group" tone="dark" h="100%" style={{ gridRow: 'span 2' }} />
          <RsVideo label="Single Sunday 2025 · 60s edit" h="100%" tone="ink" />
          <PhotoSlot label="Mountaintop 2024 · ritual" tone="ink" h="100%" />
          <PhotoSlot label="Single Sunday 2024 · studio" tone="dark" h="100%" />
          <RsVideo label="Bonfire 2024 · sing-around" h="100%" tone="ink" />
        </div>

        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12 }}>
          {['Camping nights', 'Late kitchen', 'Songwriting circle', 'Morning yoga'].map((label, i) => (
            <PhotoSlot key={i} label={label} h={220} tone={i % 2 ? 'dark' : 'ink'} />
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIES (written + video) ─────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 56 }}>
          <RsEyebrow color={R_PALETTE.warm}>From the people who came</RsEyebrow>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            They said it<br />better than <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>I could</em>.
          </h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 32 }}>
          <RsVideo label="Testimonial · J. · 60s" h={300} tone="ink" />
          <div style={{ background: ACCENT, color: R_PALETTE.ink, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: F.head, fontSize: 120, lineHeight: 0.4, opacity: 0.95 }}>&ldquo;</span>
            <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 26, lineHeight: 1.3,
              margin: 0, maxWidth: 360 }}>
              I came tired. I left with a song, a sister, and a strategy.
            </p>
            <div style={{ fontFamily: rsFont().mono, fontSize: 12, letterSpacing: '0.16em',
              textTransform: 'uppercase', marginTop: 24 }}>R. — Bonfire & Bloom 2025</div>
          </div>
          <RsVideo label="Testimonial · D. · 60s" h={300} tone="ink" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            { q: 'The room held me in a way no conference ever has.', n: 'M. — songwriter' },
            { q: 'I shipped my first EP six weeks after Single Sunday.', n: 'N. — musician' },
          ].map((t, i) => (
            <div key={i} style={{
              padding: '36px 32px', position: 'relative',
              background: R_PALETTE.bg, color: R_PALETTE.cream,
            }}>
              <span style={{ fontFamily: F.head, fontSize: 100, lineHeight: 0.4,
                color: ACCENT, opacity: 0.95, position: 'absolute', top: 32, left: 24 }}>&ldquo;</span>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 24, lineHeight: 1.3,
                margin: '32px 0 24px' }}>{t.q}</p>
              <div style={{ fontFamily: rsFont().mono, fontSize: 12, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: ACCENT }}>{t.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WAITLIST ─────────────────────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: R_PALETTE.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RsEyebrow>The Immersion list</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.88,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              Get the next date<br /><em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>first</em>.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.6, color: R_PALETTE.mute, marginTop: 32, maxWidth: 520 }}>
              We announce immersions on the list before anywhere else. A short note when something opens,
              never anything in between.
            </p>
          </div>
          <form onSubmit={wait.submit} style={{ background: R_PALETTE.dim, padding: 36, border: `1px solid ${ACCENT}` }}>
            {wait.state !== 'success' ? (
              <>
                <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
                  Your email
                </label>
                <input type="email" required value={wait.data.email} onChange={wait.setField('email')}
                  placeholder="you@yourname.com" style={{
                    width: '100%', padding: '20px 0', fontSize: 22, fontFamily: F.head,
                    background: 'transparent', border: 'none', borderBottom: `1.5px solid ${ACCENT}`,
                    color: R_PALETTE.cream, outline: 'none', marginBottom: 28,
                  }} />
                <button className="rs-cta-btn" style={{
                  width: '100%', padding: '18px', background: ACCENT, color: R_PALETTE.ink,
                  border: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
                }}>● Tell me first</button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontFamily: F.head, fontSize: 56, color: ACCENT, lineHeight: 0.8, marginBottom: 16 }}>✦</div>
                <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 28, color: R_PALETTE.cream }}>
                  Done. You&rsquo;re on the list.
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageImmersions });
