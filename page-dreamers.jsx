// page-dreamers.jsx — Courageous Dreamers (annual membership + 3 accountability groups)

function PageDreamers({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const reg = useFormMock({ name: '', email: '', dream: '' });

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Courageous Dreamers" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 96px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 72, alignItems: 'center' }}>
          {/* LEFT — headline, description, bullets */}
          <div>
            <RsEyebrow>Annual membership · Courageous community</RsEyebrow>
            <h1 style={{
              fontFamily: F.head, fontWeight: 400, fontSize: 168, lineHeight: 0.86,
              margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
            }}>
              Dream<br />
              <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
                out loud
              </em>.
            </h1>
            <p style={{ fontFamily: F.body, fontSize: 21, lineHeight: 1.55, margin: '36px 0 0', color: R_PALETTE.cream, maxWidth: 560 }}>
              A courageous community designed to help you stay accountable, take aligned action,
              overcome fears and self-doubt, and{' '}
              <strong style={{ color: ACCENT, fontWeight: 700 }}>bring your dreams into reality</strong>{' '}
              alongside other visionaries, creatives, and purpose-driven leaders.
            </p>

            {/* membership inclusions */}
            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                'Weekly group calls',
                'Access to video courses',
                'Goal setting & action mapping',
                'Courageous community',
                'Celebrate your wins & overcome your challenges',
              ].map((b, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 0', borderTop: `1px solid ${R_PALETTE.hairline}`,
                  gridColumn: i === 4 ? 'span 2' : 'span 1',
                }}>
                  <span style={{ width: 8, height: 8, background: ACCENT, flexShrink: 0,
                    transform: 'rotate(45deg)' }} />
                  <span style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: R_PALETTE.cream }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — big hero image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -30, opacity: 0.4, pointerEvents: 'none' }}>
              <HalftoneField color={ACCENT} bg="transparent" />
            </div>
            <PhotoSlot label="Courageous Dreamers · community gathering"
              h={620} tone="warm" style={{ position: 'relative', border: `1px solid ${ACCENT}` }} />
          </div>
        </div>
      </section>

      <RsTicker animated items={['Yes, dreams do come true', 'Dream out loud', 'You are worthy', 'Time to shine']} />

      {/* ─── EXPLAINER VIDEO + DREAM CIRCLE COPY ──────────────────────── */}
      <section style={{ padding: '110px 56px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 32, alignItems: 'stretch' }}>
        <div style={{ background: R_PALETTE.dim, padding: 40, border: `1px solid ${R_PALETTE.hairline}`,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <RsEyebrow>What is it?</RsEyebrow>
            <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 56, lineHeight: 0.95,
              margin: '0 0 24px', textTransform: 'uppercase' }}>
              The dream <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>circle</em>.
            </h3>
            <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0 }}>
              Most coaching teaches strategy. Courageous Dreamers is{' '}
              <em style={{ fontFamily: F.emph, color: R_PALETTE.cream }}>not coaching</em> &mdash; it&rsquo;s
              about implementation and making ideas turn into dreams through aligned action.
            </p>
          </div>
          <div style={{ marginTop: 32, fontFamily: F.emph, fontStyle: 'italic', fontSize: 22,
            lineHeight: 1.4, color: R_PALETTE.cream, borderLeft: `2px solid ${ACCENT}`, paddingLeft: 20 }}>
            &ldquo;The circle keeps you accountable. The accountability turns dreams into reality.&rdquo;
          </div>
        </div>
        <RsVideo label="What is Courageous Dreamers · 90s" h={520} tone="dark" />
      </section>

      {/* ─── ANNUAL MEMBERSHIP · 3 ACCOUNTABILITY GROUPS ──────────────── */}
      <section style={{ padding: '130px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            One membership.<br />
            <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>Three</em><br />
            accountability groups.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.55, color: R_PALETTE.warm, margin: 0, maxWidth: 460 }}>
            An <em style={{ fontFamily: F.emph, color: R_PALETTE.ink }}>annual membership</em> that provides the support
            to help your dreams come true. Your membership opens access to three different accountability groups &mdash;
            move between them as your work shifts.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0,
          border: `1px solid ${R_PALETTE.ink}` }}>
          {[
            {
              n: '01',
              t: 'Courageous Dreamers',
              sub: 'Business · Entrepreneurial · Personal Transformation',
              d: 'Build the business, take the leap, transform the patterns. For the dreamers turning ideas into real-world movements.',
            },
            {
              n: '02',
              t: 'Courageous Writers',
              sub: 'Get your book + other writing projects finally done & shared',
              d: 'For the writers carrying a book, an essay collection, a body of work that is ready to be in the world.',
              feature: true,
            },
            {
              n: '03',
              t: 'Courageous Creatives',
              sub: 'Stop being a closet creative · the world needs your art',
              d: 'For the painters, musicians, designers, makers, and image-makers ready to create beauty and spread it.',
            },
          ].map((s, i) => (
            <div key={s.n} style={{
              padding: '44px 36px', minHeight: 380, position: 'relative',
              borderRight: i < 2 ? `1px solid ${R_PALETTE.ink}` : 'none',
              background: s.feature ? ACCENT : 'transparent',
              color: R_PALETTE.ink,
            }}>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
                color: s.feature ? R_PALETTE.ink : ACCENT, marginBottom: 24, textTransform: 'uppercase',
                opacity: s.feature ? 0.75 : 1 }}>
                Group {s.n}
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 44, lineHeight: 0.95,
                margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{s.t}</h3>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 19, lineHeight: 1.4,
                margin: '0 0 24px', color: s.feature ? R_PALETTE.ink : R_PALETTE.warm, opacity: s.feature ? 0.85 : 1 }}>
                {s.sub}
              </p>
              <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6, margin: 0,
                color: R_PALETTE.ink, opacity: s.feature ? 0.92 : 0.78 }}>{s.d}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 48, padding: '36px 48px', background: R_PALETTE.ink, color: R_PALETTE.cream,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>Annual membership</div>
            <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 26, lineHeight: 1.3 }}>
              One yes. All three groups. A whole year of dreams coming true.
            </div>
          </div>
          <a href="#enrol" className="rs-cta-btn" style={{
            padding: '20px 32px', background: ACCENT, color: R_PALETTE.ink, textDecoration: 'none',
            fontFamily: F.mono, fontWeight: 700, fontSize: 13,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>● Become a member →</a>
        </div>
      </section>

      {/* ─── MASTERCLASS REGISTRATION ─────────────────────────────────── */}
      <section id="enrol" style={{ padding: '140px 56px', background: R_PALETTE.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <RsEyebrow>The free masterclass</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 120, lineHeight: 0.88,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              Dreamers<br />
              <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>masterclass</em>.
            </h2>
            <div style={{ marginTop: 40, padding: '32px 0', borderTop: `1px solid ${R_PALETTE.hairline}`,
              borderBottom: `1px solid ${R_PALETTE.hairline}`, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              <div>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                  color: R_PALETTE.mute, textTransform: 'uppercase', marginBottom: 8 }}>Date</div>
                <div style={{ fontFamily: F.head, fontSize: 32, color: R_PALETTE.cream, lineHeight: 1 }}>Sept 18</div>
              </div>
              <div>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                  color: R_PALETTE.mute, textTransform: 'uppercase', marginBottom: 8 }}>Time</div>
                <div style={{ fontFamily: F.head, fontSize: 32, color: R_PALETTE.cream, lineHeight: 1 }}>4 PM PT</div>
              </div>
              <div>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                  color: R_PALETTE.mute, textTransform: 'uppercase', marginBottom: 8 }}>Cost</div>
                <div style={{ fontFamily: F.head, fontSize: 32, color: ACCENT, lineHeight: 1 }}>FREE</div>
              </div>
            </div>
            <p style={{ marginTop: 32, fontFamily: F.body, fontSize: 17, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0 }}>
              Ninety minutes. Crystal walks you through the secret techniques for manifesting your dreams faster, then
              opens the floor for live coaching. Bring a dream. Leave with a clear first move.
            </p>
          </div>

          <form onSubmit={reg.submit} style={{
            background: R_PALETTE.dim, padding: 40, border: `1px solid ${ACCENT}`, minHeight: 520,
          }}>
            {reg.state !== 'success' ? (
              <>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 40, lineHeight: 0.95,
                  margin: '0 0 32px', textTransform: 'uppercase' }}>Save your seat.</h3>

                {[
                  ['name', 'Your name', 'text', 'Crystal Smith'],
                  ['email', 'Email', 'email', 'you@yourname.com'],
                  ['dream', 'The dream (one line)', 'text', 'My dream is to _____'],
                ].map(([k, label, type, ph]) => (
                  <div key={k} style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                      letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                      {label}
                    </label>
                    <input type={type} required value={reg.data[k]} onChange={reg.setField(k)} placeholder={ph}
                      style={{
                        width: '100%', padding: '14px 0', fontSize: 18, fontFamily: F.body,
                        background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                        color: R_PALETTE.cream, outline: 'none',
                      }} />
                  </div>
                ))}

                <button className="rs-cta-btn" disabled={reg.state === 'loading'} style={{
                  width: '100%', padding: '20px', background: ACCENT, color: R_PALETTE.ink,
                  border: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', marginTop: 8,
                }}>{reg.state === 'loading' ? '· · ·' : '● Register me'}</button>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                height: '100%', textAlign: 'center', gap: 24, minHeight: 440 }}>
                <div style={{ width: 64, height: 64, border: `2px solid ${ACCENT}`, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: F.head, fontSize: 40, color: ACCENT }}>✓</div>
                <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 36, lineHeight: 1.2,
                  color: R_PALETTE.cream }}>
                  Welcome, dreamer.
                </div>
                <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.55, color: R_PALETTE.mute, margin: 0 }}>
                  Calendar details on the way to{' '}
                  <strong style={{ color: R_PALETTE.cream }}>{reg.data.email}</strong>.<br />
                  Bring your dream &mdash; we&rsquo;ll bring the room.
                </p>
                <button onClick={reg.reset} style={{
                  marginTop: 8, padding: '12px 24px', background: 'transparent',
                  border: `1px solid ${R_PALETTE.hairline}`, color: R_PALETTE.mute,
                  fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                  cursor: 'pointer',
                }}>register another</button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ─── DREAMER TESTIMONIES ──────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.bg }}>
        <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
          margin: '0 0 56px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          What the <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>community</span> says.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
          {[
            { q: 'I had a draft sitting for 4 years. The Writers group helped me finish it in 6 weeks.', n: 'D. — author + dreamer' },
            { q: 'I stopped being a closet creative. My art is finally in the world.', n: 'M. — visual artist' },
            { q: 'The community keeps me honest. The accountability turns dreams into reality.', n: 'A. — founder' },
          ].map((t, i) => (
            <div key={i} style={{
              padding: '40px 32px', position: 'relative',
              background: i === 1 ? ACCENT : R_PALETTE.dim,
              color: i === 1 ? R_PALETTE.ink : R_PALETTE.cream,
            }}>
              <span style={{ fontFamily: F.head, fontSize: 120, lineHeight: 0.5, position: 'absolute',
                top: 36, left: 28, color: i === 1 ? R_PALETTE.ink : ACCENT, opacity: 0.95 }}>&ldquo;</span>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 26, lineHeight: 1.25,
                margin: '32px 0 24px', position: 'relative' }}>{t.q}</p>
              <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: i === 1 ? R_PALETTE.ink : ACCENT, opacity: i === 1 ? 0.75 : 1 }}>{t.n}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageDreamers });
