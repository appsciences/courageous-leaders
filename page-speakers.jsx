// page-speakers.jsx — Courageous Speakers

function PageSpeakers({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const webinar = useFormMock({ email: '' });
  const activation = useFormMock({ email: '' });

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Courageous Speakers" />
      </section>

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 96px', position: 'relative' }}>
        <h1 style={{
          fontFamily: F.head, fontWeight: 400, fontSize: 240, lineHeight: 0.84,
          margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
        }}>
          Speak<br />
          <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>to be funded</span>.
        </h1>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }}>
          <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.55, margin: 0, color: R_PALETTE.cream, maxWidth: 580 }}>
            Public speaking with the purpose of bringing in investors, funders, and clients.
            Find the voice that calls in the room you were made to lead.
          </p>
          <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: R_PALETTE.mute, textAlign: 'right' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT,
              display: 'inline-block', marginRight: 8, animation: 'rs-pulse 1.8s ease infinite' }} />
            Open enrolment · 02 cohorts left for 2026
          </div>
        </div>
      </section>

      <RsTicker animated items={['Stage-ready in 8 weeks', 'Free webinar inside', 'Co-written speeches', 'Speaker reel below']} />

      {/* ─── EXPLAINER VIDEO + FREE DOWNLOAD ───────────────────────────── */}
      <section style={{ padding: '110px 56px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32 }}>
        <RsVideo label="What is Courageous Speakers · 90s" h={500} tone="ink" />
        <div style={{ background: ACCENT, color: R_PALETTE.ink, padding: 40,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.18em',
              textTransform: 'uppercase', marginBottom: 24 }}>Free · no email</div>
            <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 64, lineHeight: 0.9,
              margin: '0 0 24px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
              Speaker<br />Activation
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, opacity: 0.85 }}>
              A 14-page activator. Get clear on what you stand for &mdash; and how to say it from any stage.
            </p>
          </div>
          <a href="#" onClick={(e) => { e.preventDefault(); activation.submit(); }} className="rs-cta-btn" style={{
            display: 'block', padding: '20px',
            background: R_PALETTE.ink, color: ACCENT, textAlign: 'center', textDecoration: 'none',
            fontFamily: F.mono, fontSize: 13, fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', marginTop: 32,
          }}>
            {activation.state === 'success' ? '✓ Downloading…' : '↓ Download PDF'}
          </a>
        </div>
      </section>

      {/* ─── WEBINAR EMAIL GATE ────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <RsEyebrow color={R_PALETTE.warm}>The Webinar · Free Access</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.88,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              One hour.<br />
              <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>One voice.</span>
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.55, color: R_PALETTE.warm,
              maxWidth: 520, marginTop: 32, marginBottom: 0 }}>
              Drop your email. Watch immediately. No verification, no waiting &mdash; just one hour on how to
              speak so investors lean in.
            </p>
          </div>
          <form onSubmit={webinar.submit} style={{
            background: R_PALETTE.ink, padding: 36, color: R_PALETTE.cream, minHeight: 280,
          }}>
            {webinar.state !== 'success' ? (
              <>
                <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
                  your email →
                </label>
                <input type="email" required value={webinar.data.email} onChange={webinar.setField('email')}
                  placeholder="you@yourname.com" style={{
                    width: '100%', padding: '20px 0', fontSize: 24, fontFamily: F.head,
                    background: 'transparent', border: 'none', borderBottom: `1.5px solid ${ACCENT}`,
                    color: R_PALETTE.cream, outline: 'none', marginBottom: 32, letterSpacing: '0.02em',
                  }} />
                <button className="rs-cta-btn" disabled={webinar.state === 'loading'} style={{
                  width: '100%', padding: '20px', background: ACCENT, color: R_PALETTE.ink,
                  border: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
                }}>{webinar.state === 'loading' ? '· · ·' : '► Watch now'}</button>
                <p style={{ marginTop: 16, fontSize: 11, fontFamily: F.mono,
                  letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center', opacity: 0.6 }}>
                  Instant access · no verification
                </p>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                height: '100%', textAlign: 'center', gap: 16 }}>
                <div style={{ width: 56, height: 56, border: `2px solid ${ACCENT}`, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: F.head, fontSize: 32, color: ACCENT }}>✓</div>
                <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 28, lineHeight: 1.3 }}>
                  You&rsquo;re in. Check your inbox.
                </div>
                <button onClick={() => useModal().open('Courageous Speaker Webinar')} className="rs-cta-btn" style={{
                  marginTop: 12, padding: '14px 28px', background: ACCENT, color: R_PALETTE.ink,
                  border: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 12,
                  letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer' }}>
                  ► Or watch now
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ─── PROGRAMS ──────────────────────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: R_PALETTE.bg }}>
        <header style={{ marginBottom: 64 }}>
          <RsEyebrow>Two ways in</RsEyebrow>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 132, lineHeight: 0.88,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Group<br /><span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>or</span> intimate.
          </h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ padding: 48, background: R_PALETTE.dim, border: `1px solid ${ACCENT}` }}>
            <div style={{ fontFamily: rsFont().mono, fontSize: 12, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: ACCENT, marginBottom: 24 }}>01 · Group</div>
            <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 56, lineHeight: 0.95,
              margin: '0 0 24px', textTransform: 'uppercase' }}>Speaker Circle</h3>
            <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.55, margin: '0 0 32px', color: R_PALETTE.mute }}>
              An 8-week circle. Build your signature talk together &mdash; live coaching, peer practice,
              stage-ready feedback every week.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', fontFamily: F.mono, fontSize: 13,
              letterSpacing: '0.06em', lineHeight: 2, color: R_PALETTE.cream }}>
              <li>→ Weekly group calls (8 weeks)</li>
              <li>→ Signature talk co-developed</li>
              <li>→ Accountability pod of speakers</li>
              <li>→ Recorded coached delivery</li>
            </ul>
            <a href="#" className="rs-cta-btn" style={{ display: 'inline-block', padding: '18px 32px',
              background: ACCENT, color: R_PALETTE.ink, textDecoration: 'none',
              fontFamily: F.mono, fontWeight: 700, fontSize: 13, letterSpacing: '0.18em',
              textTransform: 'uppercase' }}>Apply →</a>
          </div>

          <div style={{ padding: 48, background: ACCENT, color: R_PALETTE.ink }}>
            <div style={{ fontFamily: rsFont().mono, fontSize: 12, letterSpacing: '0.18em',
              textTransform: 'uppercase', marginBottom: 24 }}>02 · One-on-one</div>
            <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 56, lineHeight: 0.95,
              margin: '0 0 24px', textTransform: 'uppercase' }}>
              Co-written<br /><span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none' }}>speeches</span>
            </h3>
            <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.55, margin: '0 0 32px' }}>
              Tailored, intimate. We sit at the table and co-write the speech that gets you the keynote,
              the funders&rsquo; meeting, the room.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', fontFamily: F.mono, fontSize: 13,
              letterSpacing: '0.06em', lineHeight: 2 }}>
              <li>→ Vision + audience strategy session</li>
              <li>→ Two co-writing intensives</li>
              <li>→ Delivery + rehearsal coaching</li>
              <li>→ Stage-day support</li>
            </ul>
            <a href="#" className="rs-cta-btn" style={{ display: 'inline-block', padding: '18px 32px',
              background: R_PALETTE.ink, color: ACCENT, textDecoration: 'none',
              fontFamily: F.mono, fontWeight: 700, fontSize: 13, letterSpacing: '0.18em',
              textTransform: 'uppercase' }}>Book fit call →</a>
          </div>
        </div>
      </section>

      {/* ─── SPEAKER REEL ──────────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.bg }}>
        <header style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            The <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>reel</span>.
          </h2>
          <RLink to="/hire" className="rs-link-line" style={{ fontFamily: F.mono, fontSize: 13, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, textDecoration: 'none' }}>↗ Hire Crystal to speak</RLink>
        </header>
        <RsVideo label="Crystal speaker reel · 3 min" h={620} tone="ink" />
      </section>
    </>
  );
}

Object.assign(window, { PageSpeakers });
