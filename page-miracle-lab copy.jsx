// page-miracle-lab.jsx — 40-Day Miracle Lab (donate what you can $14–$400)

function PageMiracleLab({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const reg = useFormMock({ name: '', email: '', amount: '14' });
  const [amount, setAmount] = React.useState(48);

  const TIERS = [14, 48, 144, 333, 400];

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Miracle Lab" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 96px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 520, height: 600,
          opacity: 0.35, pointerEvents: 'none' }}>
          <HalftoneField color={ACCENT} bg="transparent" />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280 }}>
          <RsEyebrow>40-day container · Donate what you can</RsEyebrow>
          <h1 style={{
            fontFamily: F.head, fontWeight: 400, fontSize: 208, lineHeight: 0.84,
            margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
          }}>
            Miracle<br /><em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>Lab</em>.
          </h1>
          <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 36, lineHeight: 1.3,
            color: R_PALETTE.cream, margin: '40px 0 0', maxWidth: 760 }}>
            &ldquo;Forty days. One container. The lab where we manifest miracles in our lives &mdash; together.&rdquo;
          </p>
          <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.6, color: R_PALETTE.mute,
            margin: '24px 0 0', maxWidth: 640 }}>
            A pay-what-you-can 40-day group experience. Daily prompts, weekly live calls,
            a small pod for accountability, and a witness for the miracles as they land.
            Suggested donation: <strong style={{ color: ACCENT }}>$14&ndash;$400</strong> &mdash; whatever opens you.
          </p>
        </div>
      </section>

      <RsTicker animated items={['Donate what you can · $14–$400', '40 days · One container · Real miracles', 'Daily prompts · Weekly calls · Pod of 4']} />

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section style={{ padding: '130px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            How the<br />lab <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>works</em>.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.55, color: R_PALETTE.warm, margin: 0, maxWidth: 460 }}>
            Forty days, four chapters. Every dreamer leaves with documented miracles, a pod of accomplices,
            and a working rhythm to keep the miracles coming.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 0,
          border: `1px solid ${R_PALETTE.ink}` }}>
          {[
            { n: 'Days 01–10', t: 'Decide', d: 'Name the miracles. Declare the container. Choose to be the version of you who receives.' },
            { n: 'Days 11–20', t: 'Disrupt', d: 'Identify the patterns blocking the channel. Move the body. Forgive what needs forgiving.' },
            { n: 'Days 21–30', t: 'Receive',  d: 'The miracles begin landing. We document, celebrate, and let the rhythm deepen.' },
            { n: 'Days 31–40', t: 'Anchor',   d: 'Set the practice you carry past the lab. The miracles keep arriving on the calendar.' },
          ].map((s, i) => (
            <div key={s.n} style={{
              padding: '40px 28px', minHeight: 280,
              borderRight: i < 3 ? `1px solid ${R_PALETTE.ink}` : 'none',
              background: i === 2 ? ACCENT : 'transparent',
              color: R_PALETTE.ink,
            }}>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                color: i === 2 ? R_PALETTE.ink : ACCENT, marginBottom: 20, textTransform: 'uppercase', opacity: i === 2 ? 0.75 : 1 }}>
                {s.n}
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 56, lineHeight: 0.95,
                margin: '0 0 24px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{s.t}.</h3>
              <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6, margin: 0,
                opacity: i === 2 ? 0.95 : 0.85 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DONATE & JOIN ─────────────────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: R_PALETTE.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <RsEyebrow>Donate what you can</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.88,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              You set the <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>price</em>.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.65, color: R_PALETTE.mute,
              margin: '32px 0 0', maxWidth: 540 }}>
              The lab is pay-what-you-can with a suggested range of $14 to $400. Pay what feels generous
              and possible for you &mdash; no questions, no judgement. Your donation funds scholarship seats
              for the next cohort.
            </p>

            <div style={{ marginTop: 48, padding: '32px 0', borderTop: `1px solid ${R_PALETTE.hairline}`,
              borderBottom: `1px solid ${R_PALETTE.hairline}` }}>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: R_PALETTE.mute, marginBottom: 12 }}>Suggested range</div>
              <div style={{ fontFamily: F.head, fontSize: 88, lineHeight: 0.9,
                color: R_PALETTE.cream, letterSpacing: '-0.02em' }}>
                $14<span style={{ color: ACCENT }}>&ndash;</span>$400
              </div>
            </div>

            <p style={{ marginTop: 32, fontFamily: F.emph, fontStyle: 'italic', fontSize: 22, lineHeight: 1.45,
              color: R_PALETTE.cream }}>
              &ldquo;If $14 is what opens you, that&rsquo;s the right number. If $400 is what feels generous,
              that&rsquo;s the right number too.&rdquo;
            </p>
          </div>

          {/* JOIN FORM */}
          <form onSubmit={reg.submit} style={{
            background: R_PALETTE.dim, padding: 44, border: `1px solid ${ACCENT}`, position: 'sticky', top: 100,
          }}>
            {reg.state !== 'success' ? (
              <>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 40, lineHeight: 0.95,
                  margin: '0 0 32px', textTransform: 'uppercase' }}>Join the lab.</h3>

                {/* Amount picker */}
                <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>
                  Your donation
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, marginBottom: 18 }}>
                  {TIERS.map((t) => (
                    <button type="button" key={t} onClick={() => setAmount(t)} style={{
                      padding: '14px 4px', background: amount === t ? ACCENT : 'transparent',
                      color: amount === t ? R_PALETTE.ink : R_PALETTE.cream,
                      border: `1px solid ${amount === t ? ACCENT : R_PALETTE.hairline}`,
                      fontFamily: F.mono, fontWeight: 700, fontSize: 14,
                      letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 0.15s',
                    }}>${t}</button>
                  ))}
                </div>
                <input type="range" min="14" max="400" step="1" value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: ACCENT, marginBottom: 8 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between',
                  fontFamily: F.mono, fontSize: 11, letterSpacing: '0.14em',
                  color: R_PALETTE.mute, textTransform: 'uppercase', marginBottom: 28 }}>
                  <span>$14 · floor</span>
                  <span style={{ fontFamily: F.head, fontSize: 28, color: ACCENT, lineHeight: 1 }}>${amount}</span>
                  <span>$400 · ceiling</span>
                </div>

                {[
                  ['name',  'Your name', 'text',  'Crystal Smith'],
                  ['email', 'Email',     'email', 'you@yourname.com'],
                ].map(([k, label, type, ph]) => (
                  <div key={k} style={{ marginBottom: 24 }}>
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
                }}>{reg.state === 'loading' ? '· · ·' : `✦ Donate $${amount} & join`}</button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontFamily: F.head, fontSize: 80, color: ACCENT, lineHeight: 0.8, marginBottom: 24 }}>✦</div>
                <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 32, lineHeight: 1.2,
                  color: R_PALETTE.cream, marginBottom: 16 }}>
                  You&rsquo;re in the lab.
                </div>
                <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0 }}>
                  Welcome email + Day 1 prompt on the way to<br />
                  <strong style={{ color: R_PALETTE.cream }}>{reg.data.email}</strong>
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ─── TESTIMONIES ─────────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.dim }}>
        <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 84, lineHeight: 0.9,
          margin: '0 0 56px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          What past <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>cohorts</em> said.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
          {[
            { q: 'Eight miracles documented in 40 days. I stopped counting at twelve.', n: 'D. — Cohort 03' },
            { q: 'I came in skeptical. I left with a partner, a contract, and a clean nervous system.', n: 'M. — Cohort 04' },
            { q: 'Pay-what-you-can met me where I was. The miracles met me where I needed.', n: 'A. — Cohort 02' },
          ].map((t, i) => (
            <div key={i} style={{
              padding: '40px 32px', position: 'relative',
              background: i === 1 ? ACCENT : R_PALETTE.bg,
              color: i === 1 ? R_PALETTE.ink : R_PALETTE.cream,
            }}>
              <span style={{ fontFamily: F.head, fontSize: 100, lineHeight: 0.5, position: 'absolute',
                top: 32, left: 24, color: i === 1 ? R_PALETTE.ink : ACCENT, opacity: 0.95 }}>&ldquo;</span>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 24, lineHeight: 1.3,
                margin: '32px 0 24px' }}>{t.q}</p>
              <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: i === 1 ? R_PALETTE.ink : ACCENT, opacity: i === 1 ? 0.75 : 1 }}>{t.n}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageMiracleLab });
