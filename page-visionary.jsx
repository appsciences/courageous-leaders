// page-visionary.jsx — Courageous Visionary + Visionary Fairy

function PageVisionary({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const fairy = useFormMock({ name: '', email: '', whatHurts: '' });

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Courageous Visionary" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 96px', position: 'relative' }}>
        <h1 style={{
          fontFamily: F.head, fontWeight: 400, fontSize: 180, lineHeight: 0.86,
          margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
        }}>
          Care for yourself<br />
          <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
            as powerfully
          </span><br />
          as your vision.
        </h1>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }}>
          <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.55, margin: 0, color: R_PALETTE.cream, maxWidth: 580 }}>
            You are actually more important than your vision. Without you well, who courageously leads the
            movement into the impact it&rsquo;s meant for? This is the work of staying whole while you build.
          </p>
          <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 24, lineHeight: 1.4,
            color: R_PALETTE.mute, textAlign: 'right' }}>
            For the visionary<br />who carries thousands<br />
            <span style={{ color: ACCENT }}>&mdash; or millions.</span>
          </div>
        </div>
      </section>

      <RsTicker animated items={['Delegation', 'Nervous-system practice', 'Self-care plans', 'Rhythms of rest', 'Celebrating wins', 'Visionary Fairy on call']} />

      {/* ─── EXPLAINER VIDEO ─────────────────────────────────────────── */}
      <section style={{ padding: '110px 56px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32 }}>
        <RsVideo label="What is Courageous Visionary · 90s" h={500} tone="ink" />
        <div style={{ background: R_PALETTE.dim, padding: 40, border: `1px solid ${R_PALETTE.hairline}`,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <RsEyebrow>The Visionary&rsquo;s burden</RsEyebrow>
            <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 30, lineHeight: 1.3,
              color: R_PALETTE.cream, margin: 0 }}>
              &ldquo;Doing less<br />
              <span style={{ color: ACCENT }}>= stressing less</span><br />
              = more success.&rdquo;
            </p>
          </div>
          <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0, marginTop: 24 }}>
            For you, your team, your movement. We stop the back-burner. We start the rhythms.
            We pay you the same care your vision gets.
          </p>
        </div>
      </section>

      {/* ─── VISIONARY FAIRY ─────────────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: ACCENT, color: R_PALETTE.ink, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -60, opacity: 0.18, pointerEvents: 'none' }}>
          <svg width="540" height="540" viewBox="0 0 200 200">
            {[0,30,60,90,120,150].map(a => (
              <line key={a} x1={100} y1={100} x2={100 + Math.cos(a*Math.PI/180)*100} y2={100 + Math.sin(a*Math.PI/180)*100}
                stroke={R_PALETTE.ink} strokeWidth="0.5" />
            ))}
            <circle cx="100" cy="100" r="60" fill="none" stroke={R_PALETTE.ink} strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke={R_PALETTE.ink} strokeWidth="0.5" />
            <circle cx="100" cy="100" r="20" fill="none" stroke={R_PALETTE.ink} strokeWidth="0.5" />
          </svg>
        </div>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.22em',
              textTransform: 'uppercase', marginBottom: 24 }}>The Signature Offer ✦</div>
            <h2 style={{
              fontFamily: F.head, fontWeight: 400, fontSize: 168, lineHeight: 0.84,
              margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
            }}>
              Visionary<br />
              <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none' }}>Fairy</span>.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 20, lineHeight: 1.55, margin: '32px 0 0', maxWidth: 520 }}>
              For the well-established visionary. We tend to <em style={{ fontFamily: F.emph }}>you</em> &mdash; nervous system, body, joy,
              spirit &mdash; with the same fierce devotion you give the work.
            </p>
          </div>
          <div style={{ background: R_PALETTE.ink, color: R_PALETTE.cream, padding: 44,
            borderLeft: `4px solid ${R_PALETTE.ink}` }}>
            <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 26, lineHeight: 1.35, marginBottom: 32, color: R_PALETTE.cream }}>
              &ldquo;One client texted me at 11pm wanting to quit.<br />
              <span style={{ color: ACCENT }}>By Thursday she&rsquo;d done $8k in sales.&rdquo;</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: F.mono,
              fontSize: 13, letterSpacing: '0.08em', lineHeight: 2.1, color: R_PALETTE.cream }}>
              <li>→ On-call energetic + strategic support</li>
              <li>→ Emergency nervous-system practices</li>
              <li>→ Self-care plans that actually hold</li>
              <li>→ Delegation architecture</li>
              <li>→ Celebrating-wins rhythm</li>
              <li>→ Devoted witness to you AND the vision</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── SELF-CARE PRINCIPLES ─────────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 80 }}>
          <RsEyebrow color={R_PALETTE.warm}>The five practices</RsEyebrow>
          <h2 style={{
            fontFamily: F.head, fontWeight: 400, fontSize: 124, lineHeight: 0.88,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em',
          }}>
            Architecting <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
            rhythms</span><br />of sustainable leadership.
          </h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          border: `1px solid ${R_PALETTE.ink}` }}>
          {[
            { n: '01', t: 'Delegate, fiercely', d: 'Stay in your visionary role. Fiercely delegate the rest. No ifs, ands, or buts.' },
            { n: '02', t: 'Architect the nervous system', d: 'Daily and emergency practices. Your body learning it is safe to receive next-level success.' },
            { n: '03', t: 'Plan the joy', d: 'Self-care plans that prioritize joy, family, nature, spirituality. Not the back burner. The front.' },
            { n: '04', t: 'Celebrate the wins', d: 'Small, medium, big. We create the celebration rhythm. We do not plow past.' },
            { n: '05', t: 'Steward the momentum', d: 'I see where the first snowball goes down the hill. We push it together. The avalanche follows.' },
          ].map((s, i) => (
            <div key={s.n} style={{
              padding: '44px 40px', minHeight: 240, position: 'relative',
              gridColumn: i === 4 ? 'span 2' : 'span 1',
              borderRight: (i % 2 === 0 && i !== 4) ? `1px solid ${R_PALETTE.ink}` : 'none',
              borderBottom: i < 3 ? `1px solid ${R_PALETTE.ink}` : 'none',
              background: i === 4 ? ACCENT : 'transparent',
              color: i === 4 ? R_PALETTE.ink : R_PALETTE.ink,
            }}>
              <div style={{ position: 'absolute', top: 36, right: 40,
                fontFamily: F.head, fontSize: 88, lineHeight: 0.8,
                color: i === 4 ? R_PALETTE.ink : ACCENT, opacity: i === 4 ? 0.5 : 0.9 }}>{s.n}</div>
              <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 36, lineHeight: 1,
                margin: '0 0 20px', maxWidth: 360, textTransform: 'uppercase' }}>{s.t}.</h3>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4,
                color: i === 4 ? R_PALETTE.ink : R_PALETTE.warm, margin: 0, maxWidth: 540, opacity: i === 4 ? 0.92 : 1 }}>
                &ldquo;{s.d}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VISIONARY FAIRY APPLICATION ──────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: R_PALETTE.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <RsEyebrow>For the visionary on call</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.9,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              Call in the<br /><span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>fairy</span>.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.6, color: R_PALETTE.mute,
              maxWidth: 480, marginTop: 40 }}>
              A short note about where you are now. If we&rsquo;re a fit, a deeper conversation lands within
              the week. The Visionary Fairy is by invitation.
            </p>

            <div style={{ marginTop: 48, padding: '28px 0', borderTop: `1px solid ${R_PALETTE.hairline}`,
              borderBottom: `1px solid ${R_PALETTE.hairline}` }}>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: R_PALETTE.mute, marginBottom: 8 }}>VBF · per quarter</div>
              <div style={{ fontFamily: F.head, fontSize: 80, lineHeight: 0.9,
                color: R_PALETTE.cream, letterSpacing: '-0.02em' }}>
                $3,333<span style={{ fontFamily: F.emph, fontStyle: 'italic',
                  textTransform: 'none', color: ACCENT, fontSize: 36, marginLeft: 16 }}>
                  or $2,500 paid in full
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={fairy.submit} style={{
            background: R_PALETTE.dim, padding: 44, border: `1px solid ${ACCENT}`, minHeight: 520,
          }}>
            {fairy.state !== 'success' ? (
              <>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 40, lineHeight: 0.95,
                  margin: '0 0 32px', textTransform: 'uppercase' }}>
                  Tell me where it <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>hurts</em>.
                </h3>

                {[
                  ['name', 'Your name', 'text', 'Crystal Smith'],
                  ['email', 'Email', 'email', 'you@yourname.com'],
                ].map(([k, label, type, ph]) => (
                  <div key={k} style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                      letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                      {label}
                    </label>
                    <input type={type} required value={fairy.data[k]} onChange={fairy.setField(k)} placeholder={ph}
                      style={{
                        width: '100%', padding: '14px 0', fontSize: 18, fontFamily: F.body,
                        background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                        color: R_PALETTE.cream, outline: 'none',
                      }} />
                  </div>
                ))}

                <div style={{ marginBottom: 32 }}>
                  <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                    letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                    What hurts right now?
                  </label>
                  <textarea required rows={4} value={fairy.data.whatHurts} onChange={fairy.setField('whatHurts')}
                    placeholder="The exhaustion, the team thing, the 3am thoughts — say it plain."
                    style={{
                      width: '100%', padding: '14px 0', fontSize: 17, fontFamily: F.body,
                      background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                      color: R_PALETTE.cream, outline: 'none', resize: 'vertical',
                    }} />
                </div>

                <button className="rs-cta-btn" disabled={fairy.state === 'loading'} style={{
                  width: '100%', padding: '20px', background: ACCENT, color: R_PALETTE.ink,
                  border: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
                }}>{fairy.state === 'loading' ? '· · ·' : '✦ Send to Crystal'}</button>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                height: '100%', minHeight: 440, textAlign: 'center', gap: 20 }}>
                <div style={{ fontFamily: F.head, fontSize: 80, color: ACCENT, lineHeight: 0.8 }}>✦</div>
                <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 36, lineHeight: 1.2,
                  color: R_PALETTE.cream }}>
                  Received. Breathe.
                </div>
                <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0 }}>
                  Crystal will reach out to <strong style={{ color: R_PALETTE.cream }}>{fairy.data.email}</strong> within
                  3 business days. In the meantime &mdash; go drink some water.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageVisionary });
