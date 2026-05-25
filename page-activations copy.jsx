// page-activations.jsx — Stage Activation + Prosperity Activation
// Simple landing: image + description + download button → email gate → thank-you page

const ACTIVATIONS = {
  stage: {
    slug: 'stage',
    name: 'Stage Activation',
    tagline: 'Activate the voice that opens rooms.',
    sub: 'A free audio + workbook activation to wake up the speaker you came here to be.',
    description: [
      'Stage Activation is a guided audio + workbook ritual designed to clear the fear, doubt, and old stories that keep your voice small. Forty minutes. One sit-down. A different person on the other side.',
      'You\u2019ll move through three activations: claim the territory, name the truth, and step on the stage that\u2019s waiting for you. By the end, you\u2019ll have a one-line clarity statement and your next stage already in your sights.',
    ],
    bullets: [
      'A 40-minute guided audio (MP3)',
      'A printable activation workbook (PDF)',
      'Three exercises to claim, name, and step',
      'A signed clarity statement to keep on your wall',
    ],
    fbGroupName: 'Courageous Speakers · Community',
  },
  prosperity: {
    slug: 'prosperity',
    name: 'Prosperity Activation',
    tagline: 'Open the channel. Receive the wealth.',
    sub: 'A free audio + workbook activation to align you with the prosperity that is already yours.',
    description: [
      'Prosperity Activation is a guided audio + workbook ritual designed to dissolve the bad programming around money and open you up to receive without resistance. Forty minutes. One sit-down. A different relationship with prosperity on the other side.',
      'You\u2019ll move through three activations: forgive the old story, name what you\u2019re ready to receive, and become the open channel. By the end, you\u2019ll have a written covenant with your prosperity and a daily practice that holds it.',
    ],
    bullets: [
      'A 40-minute guided audio (MP3)',
      'A printable activation workbook (PDF)',
      'A money-forgiveness ritual',
      'A signed prosperity covenant to keep on your altar',
    ],
    fbGroupName: 'Prosperous Visionaries · Community',
  },
};

function PageActivation({ ctx = {}, slug }) {
  const F = rsFont(ctx.fontPair);
  const a = ACTIVATIONS[slug] || ACTIVATIONS.stage;
  // stage: idle → email-gate → thank-you
  const [stage, setStage] = React.useState('idle');
  const email = useFormMock({ email: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    email.submit(e);
    setTimeout(() => setStage('thank-you'), 800);
  };

  // THANK YOU PAGE
  if (stage === 'thank-you') {
    return (
      <>
        <section style={{ padding: '56px 56px 40px' }}>
          <RsCrumb here={`${a.name} · Thank You`} />
        </section>

        <section style={{ padding: '0 56px 96px', textAlign: 'center' }}>
          <div style={{ fontFamily: F.head, fontSize: 72, lineHeight: 0.8, color: ACCENT, marginBottom: 24 }}>✦</div>
          <h1 style={{
            fontFamily: F.head, fontWeight: 400, fontSize: 156, lineHeight: 0.86,
            margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
          }}>
            You&rsquo;re <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>in</em>.
          </h1>
          <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.55, color: R_PALETTE.cream,
            margin: '40px auto 0', maxWidth: 700 }}>
            Check <strong style={{ color: ACCENT }}>{email.data.email}</strong> &mdash; your activation download
            is on its way. While you wait, hit play below and meet Crystal personally.
          </p>
        </section>

        {/* Welcome video */}
        <section style={{ padding: '40px 56px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: 1200, margin: '0 auto' }}>
            <RsVideo label={`A personal welcome from Crystal · 2 min`} h={580} tone="ink" />
          </div>
        </section>

        {/* Facebook group join */}
        <section style={{ padding: '100px 56px', background: ACCENT, color: R_PALETTE.ink }}>
          <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.22em',
                textTransform: 'uppercase', marginBottom: 20 }}>One more thing</div>
              <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 84, lineHeight: 0.9,
                margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                Join the <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none' }}>circle</em>.
              </h2>
              <p style={{ fontFamily: F.body, fontSize: 17, lineHeight: 1.6, margin: '24px 0 0', maxWidth: 480 }}>
                The activation lands different in community. Step into <strong>{a.fbGroupName}</strong> on Facebook
                &mdash; live Q&amp;As, monthly anchors, and a room of others doing the work alongside you.
              </p>
            </div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rs-cta-btn" style={{
              padding: '24px 32px', background: R_PALETTE.ink, color: ACCENT, textAlign: 'center',
              textDecoration: 'none', fontFamily: F.mono, fontSize: 14, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Join the Facebook group →
            </a>
          </div>
        </section>

        {/* what's next */}
        <section style={{ padding: '100px 56px', background: R_PALETTE.bg }}>
          <header style={{ marginBottom: 48 }}>
            <RsEyebrow>While you&rsquo;re here</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 72, lineHeight: 0.9,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.015em' }}>
              Keep <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>going</em>.
            </h2>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0,
            borderTop: `1px solid ${R_PALETTE.hairline}`, borderBottom: `1px solid ${R_PALETTE.hairline}` }}>
            {[
              { eyebrow: 'Free masterclass', t: 'Speakers Secrets', to: '/masterclass/speakers-secrets' },
              { eyebrow: '40-day container', t: 'Miracle Lab', to: '/miracle-lab' },
              { eyebrow: 'Group + 1:1', t: 'Courageous Leaders', to: '/leaders' },
            ].map((card, i) => (
              <RLink key={card.to} to={card.to} className="rs-row-hover" style={{
                padding: '40px 32px', textDecoration: 'none', color: R_PALETTE.cream,
                borderRight: i < 2 ? `1px solid ${R_PALETTE.hairline}` : 'none',
              }}>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>{card.eyebrow}</div>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 44, lineHeight: 1,
                  margin: '0 0 16px', textTransform: 'uppercase' }}>{card.t}</h3>
                <span className="rs-row-arrow" style={{ fontFamily: F.mono, fontSize: 12,
                  letterSpacing: '0.14em', textTransform: 'uppercase' }}>Go →</span>
              </RLink>
            ))}
          </div>
        </section>
      </>
    );
  }

  // MAIN ACTIVATION PAGE (idle or email-gate stage)
  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here={a.name} />
      </section>

      <section style={{ padding: '0 56px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', minHeight: 560 }}>
        <div>
          <RsEyebrow>Free activation</RsEyebrow>
          <h1 style={{
            fontFamily: F.head, fontWeight: 400, fontSize: 124, lineHeight: 0.86,
            margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
          }}>
            {a.name.split(' ').slice(0, -1).join(' ')}{' '}
            <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
              {a.name.split(' ').slice(-1)[0]}
            </em>.
          </h1>
          <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 32, lineHeight: 1.3,
            color: R_PALETTE.cream, margin: '32px 0 0', maxWidth: 540 }}>
            &ldquo;{a.tagline}&rdquo;
          </p>
          <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.6, color: R_PALETTE.mute,
            margin: '24px 0 0', maxWidth: 540 }}>{a.sub}</p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -20, opacity: 0.4, pointerEvents: 'none' }}>
            <HalftoneField color={ACCENT} bg="transparent" />
          </div>
          <PhotoSlot label={`${a.name} · cover art`} h={520} tone="ink"
            style={{ position: 'relative', border: `1px solid ${ACCENT}` }} />
        </div>
      </section>

      <RsTicker animated items={['Free download · No payment', a.tagline, '40-min guided audio + workbook', 'Yours forever']} />

      {/* DESCRIPTION + DOWNLOAD */}
      <section style={{ padding: '120px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <h2 style={{
              fontFamily: F.head, fontWeight: 400, fontSize: 72, lineHeight: 0.9,
              margin: '0 0 36px', textTransform: 'uppercase', letterSpacing: '-0.02em',
            }}>
              What&rsquo;s <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>inside</em>.
            </h2>
            {a.description.map((p, i) => (
              <p key={i} style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.7,
                color: R_PALETTE.cream, margin: '0 0 24px' }}>{p}</p>
            ))}
            <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', fontFamily: F.body,
              fontSize: 17, lineHeight: 1.6, color: R_PALETTE.cream }}>
              {a.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, padding: '14px 0',
                  borderBottom: i < a.bullets.length - 1 ? `1px solid ${R_PALETTE.hairline}` : 'none' }}>
                  <span style={{ color: ACCENT, fontFamily: F.mono, flexShrink: 0 }}>→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DOWNLOAD CARD */}
          <div style={{ position: 'sticky', top: 100,
            background: R_PALETTE.dim, padding: 40, border: `1px solid ${ACCENT}`,
          }}>
            {stage === 'idle' && (
              <>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>Step 1 of 2</div>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 44, lineHeight: 0.95,
                  margin: '0 0 24px', textTransform: 'uppercase' }}>
                  Ready to <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>receive</em>?
                </h3>
                <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6,
                  color: R_PALETTE.mute, margin: '0 0 32px' }}>
                  Tap the button. We&rsquo;ll send the activation straight to your inbox.
                </p>
                <button onClick={() => setStage('email-gate')} className="rs-cta-btn" style={{
                  width: '100%', padding: '24px', background: ACCENT, color: R_PALETTE.ink,
                  border: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 14,
                  letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                }}>
                  <span>↓ Download free</span>
                  <span>→</span>
                </button>
              </>
            )}

            {stage === 'email-gate' && (
              <form onSubmit={onSubmit}>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>Step 2 of 2 · last one</div>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 40, lineHeight: 0.95,
                  margin: '0 0 24px', textTransform: 'uppercase' }}>
                  Where should we <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>send</em> it?
                </h3>
                <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                  Your email
                </label>
                <input type="email" required autoFocus value={email.data.email} onChange={email.setField('email')}
                  placeholder="you@yourname.com" style={{
                    width: '100%', padding: '18px 0', fontSize: 20, fontFamily: F.head,
                    background: 'transparent', border: 'none', borderBottom: `1.5px solid ${ACCENT}`,
                    color: R_PALETTE.cream, outline: 'none', marginBottom: 24,
                  }} />
                <button type="submit" disabled={email.state === 'loading'} className="rs-cta-btn" style={{
                  width: '100%', padding: '20px', background: ACCENT, color: R_PALETTE.ink,
                  border: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
                }}>{email.state === 'loading' ? '· · · sending' : '● Send me the activation'}</button>
                <p style={{ marginTop: 16, fontFamily: F.mono, fontSize: 10,
                  letterSpacing: '0.16em', textTransform: 'uppercase', textAlign: 'center',
                  color: R_PALETTE.mute }}>
                  One email · unsubscribe anytime
                </p>
                <button type="button" onClick={() => setStage('idle')} style={{
                  marginTop: 16, padding: 0, background: 'transparent', border: 'none',
                  color: R_PALETTE.mute, fontFamily: F.mono, fontSize: 11,
                  letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer',
                  width: '100%', textAlign: 'center',
                }}>← back</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function PageActivationStage(p)      { return <PageActivation {...p} slug="stage" />; }
function PageActivationProsperity(p) { return <PageActivation {...p} slug="prosperity" />; }

Object.assign(window, { PageActivationStage, PageActivationProsperity });
