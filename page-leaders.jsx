// page-leaders.jsx — Courageous Leaders (1:1) + VBF tier

function PageLeaders({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const [tier, setTier] = React.useState('leaders'); // leaders | vbf
  const apply = useFormMock({ name: '', email: '', vision: '', stage: '' });

  const TIERS = {
    leaders: {
      title: 'Courageous Leaders',
      tag: 'Step into your next level of leadership',
      price: '$2,222',
      perQ: '/quarter',
      paidFull: '$1,900 paid in full',
      includes: [
        '2 × 1-hour calls per week (or 3 × 40-min)',
        'Real action maps, mapped quarter by quarter',
        'Co-creator by your side — co-space holder for miracles',
        'Limited co-writing & messaging support',
        'Access to the proprietary platform (PM, finance, team)',
        'Weave of the 4 pillars as needed',
      ],
    },
    vbf: {
      title: 'Visionary Best Friend',
      tag: 'For the visionary who carries the whole movement',
      price: '$3,333',
      perQ: '/quarter',
      paidFull: '$2,500 paid in full',
      includes: [
        'Everything in Courageous Leaders, and:',
        'Unlimited text & email support',
        'Impromptu calls (energetic or strategic) on demand',
        'You-first: nervous-system, joy, family, spirituality',
        'Delegation architecture & rhythms of rest',
        'Devoted witness — your loudest cheerleader',
      ],
    },
  };

  const t = TIERS[tier];

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Courageous Leaders" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 96px', position: 'relative' }}>
        <h1 style={{
          fontFamily: F.head, fontWeight: 400, fontSize: 224, lineHeight: 0.84,
          margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
        }}>
          Step into<br />your <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>next-level</span><br />leadership.
        </h1>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }}>
          <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.55, margin: 0, color: R_PALETTE.cream, maxWidth: 580 }}>
            One-on-one with Crystal. You bring the vision &mdash; we map it, take real action, and weave the
            four pillars to create clarity, courage, and real-world results.
          </p>
          <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 26, lineHeight: 1.35,
            color: R_PALETTE.mute, textAlign: 'right' }}>
            &ldquo;The intent is a two-year arc.<br />
            <span style={{ color: ACCENT }}>To really see your vision bloom.&rdquo;</span>
          </div>
        </div>
      </section>

      <RsTicker animated items={['Two calls a week', 'Action maps that move', 'You + Crystal · two-year arc', 'Faith, strategy, sales, momentum']} />

      {/* ─── TIER PICKER ─────────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.bg }}>
        <header style={{ marginBottom: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 116, lineHeight: 0.88,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Choose your<br />
            <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>arc</span>.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.55, color: R_PALETTE.mute, margin: 0, maxWidth: 460 }}>
            Two packages, same Crystal. <em style={{ fontFamily: F.emph, color: R_PALETTE.cream }}>Visionary Best Friend</em> adds
            on-demand presence for the leaders whose vision touches thousands &mdash; or millions.
          </p>
        </header>

        {/* segmented tier control */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 48, border: `1px solid ${R_PALETTE.hairline}` }}>
          {Object.entries(TIERS).map(([k, v]) => (
            <button key={k} onClick={() => setTier(k)} style={{
              flex: 1, padding: '28px 32px', background: tier === k ? ACCENT : 'transparent',
              color: tier === k ? R_PALETTE.ink : R_PALETTE.cream, border: 'none',
              cursor: 'pointer', textAlign: 'left',
              borderRight: k === 'leaders' ? `1px solid ${R_PALETTE.hairline}` : 'none',
              transition: 'background .15s, color .15s',
            }}>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
                textTransform: 'uppercase', marginBottom: 12, opacity: 0.75 }}>
                {k === 'leaders' ? 'Track 01' : 'Track 02'}
              </div>
              <div style={{ fontFamily: F.head, fontSize: 44, lineHeight: 1,
                textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{v.title}</div>
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32 }}>
          <div style={{ background: R_PALETTE.dim, padding: 48, border: `1px solid ${ACCENT}` }}>
            <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 26, color: ACCENT, marginBottom: 24 }}>
              {t.tag}.
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: F.body,
              fontSize: 17, lineHeight: 1.6, color: R_PALETTE.cream }}>
              {t.includes.map((line, i) => (
                <li key={i} style={{ display: 'flex', gap: 16, padding: '14px 0',
                  borderBottom: i < t.includes.length - 1 ? `1px solid ${R_PALETTE.hairline}` : 'none' }}>
                  <span style={{ color: ACCENT, fontFamily: F.mono, flexShrink: 0 }}>→</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: ACCENT, color: R_PALETTE.ink, padding: 48,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
                textTransform: 'uppercase', marginBottom: 20 }}>Investment</div>
              <div style={{ fontFamily: F.head, fontSize: 110, lineHeight: 0.9,
                letterSpacing: '-0.025em', textTransform: 'uppercase' }}>{t.price}</div>
              <div style={{ fontFamily: F.mono, fontSize: 14, letterSpacing: '0.14em',
                textTransform: 'uppercase', marginTop: 12, opacity: 0.85 }}>{t.perQ}</div>

              <div style={{
                marginTop: 36, padding: '16px 20px', background: R_PALETTE.ink, color: ACCENT,
                fontFamily: F.mono, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span>✦</span>
                <span>Special: {t.paidFull}</span>
              </div>

              <p style={{ marginTop: 28, fontFamily: F.body, fontSize: 14, lineHeight: 1.6, margin: '28px 0 0' }}>
                Stripe · Wise · Zelle (cash in San Marcos). Payment plans available.
                Annual discount on request &mdash; just reach out.
              </p>
            </div>

            <a href="#apply" className="rs-cta-btn" style={{
              marginTop: 32, padding: '20px', background: R_PALETTE.ink, color: ACCENT,
              textDecoration: 'none', fontFamily: F.mono, fontSize: 14, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center',
            }}>● Apply to work with Crystal</a>
          </div>
        </div>
      </section>

      {/* ─── THE 4 PILLARS — detailed ─────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 80, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 124, lineHeight: 0.88,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            The four<br /><span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>pillars</span>.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.55, color: R_PALETTE.warm, margin: 0, maxWidth: 480 }}>
            Built to support the leader, not just the business. We weave these four uniquely to create the
            results and dreams you desire. Where you focus shifts as your journey shifts.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          border: `1px solid ${R_PALETTE.ink}` }}>
          {[
            { n: '01', t: 'Identity, Faith & Leadership', d: 'Become the leader the dream is waiting for. Roots that hold weight.', items: ['Identity work', 'Faith practice', 'Leadership embodiment'] },
            { n: '02', t: 'Vision, Strategy & Aligned Execution', d: 'Map the vision. Take the very next real step. Real action maps every quarter.', items: ['Vision sessions', 'Quarter goals', 'Aligned execution rhythm'] },
            { n: '03', t: 'Messaging, Systems & Sales', d: 'Bring in clients, funders, and investors on purpose. Systems that hold.', items: ['Brand messaging', 'Marketing systems', 'Sales activation'] },
            { n: '04', t: 'Networking & Collective Momentum', d: 'Build the rooms and tables where movements grow. Mastermind, collaborate, scale.', items: ['Strategic networking', 'Mastermind connection', 'Collective momentum'] },
          ].map((p, i) => (
            <div key={p.n} style={{ padding: '48px 40px', minHeight: 320, position: 'relative',
              borderRight: (i % 2 === 0) ? `1px solid ${R_PALETTE.ink}` : 'none',
              borderBottom: i < 2 ? `1px solid ${R_PALETTE.ink}` : 'none',
            }}>
              <div style={{ position: 'absolute', top: 40, right: 40,
                fontFamily: F.head, fontSize: 96, lineHeight: 0.8, color: ACCENT, opacity: 0.9 }}>{p.n}</div>
              <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 36, lineHeight: 1,
                margin: '0 0 20px', maxWidth: 360, textTransform: 'uppercase', letterSpacing: '-0.005em' }}>{p.t}</h3>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 20, lineHeight: 1.4,
                color: R_PALETTE.warm, margin: '0 0 24px', maxWidth: 440 }}>&ldquo;{p.d}&rdquo;</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: F.mono,
                fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', lineHeight: 2.2,
                color: R_PALETTE.warm }}>
                {p.items.map((it) => <li key={it}>→ {it}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* sweet spot callout */}
        <div style={{
          marginTop: 64, padding: '48px 56px', background: R_PALETTE.ink, color: R_PALETTE.cream,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48,
        }}>
          <div>
            <RsEyebrow color={ACCENT}>The SWEET spot</RsEyebrow>
            <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 32, lineHeight: 1.3,
              margin: 0, maxWidth: 820 }}>
              The place where marketing systems, divine expectancy, the really big vision, and real next
              steps overlap &mdash; and miracles start arriving on the calendar.
            </p>
          </div>
          <span style={{ fontFamily: F.head, fontSize: 120, fontWeight: 400, color: ACCENT, lineHeight: 0.9 }}>✦</span>
        </div>
      </section>

      {/* ─── CORE AGREEMENTS ──────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.bg }}>
        <header style={{ marginBottom: 56 }}>
          <RsEyebrow>Core agreements</RsEyebrow>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            By working together,<br />you <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>agree</span>:
          </h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          borderTop: `1px solid ${R_PALETTE.hairline}`, borderLeft: `1px solid ${R_PALETTE.hairline}` }}>
          {[
            'You are a living, breathing miracle &mdash; and this will be your year of miracles.',
            'You are love &mdash; and you will spread lots of love playfully.',
            'You are the treasure &mdash; ready to be an open channel for prosperity.',
            'You are a creator &mdash; you will create, express, and have fun.',
            'You will give yourself lots of grace in the journey of life and business.',
            'You will celebrate the small, medium, and big wins. (No more plowing past them.)',
          ].map((agreement, i) => (
            <div key={i} style={{
              padding: '36px 40px', borderRight: `1px solid ${R_PALETTE.hairline}`,
              borderBottom: `1px solid ${R_PALETTE.hairline}`, display: 'flex', gap: 28,
            }}>
              <div style={{ fontFamily: F.head, fontSize: 56, lineHeight: 1, color: ACCENT,
                flexShrink: 0, width: 80 }}>{String(i+1).padStart(2,'0')}</div>
              <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4,
                margin: 0, color: R_PALETTE.cream }} dangerouslySetInnerHTML={{ __html: agreement }} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── APPLICATION ──────────────────────────────────────────────── */}
      <section id="apply" style={{ padding: '140px 56px', background: ACCENT, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 156, lineHeight: 0.86,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.025em' }}>
            Apply to<br />
            <span style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none' }}>work with</span><br />
            Crystal.
          </h2>
          <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.55, margin: 0, maxWidth: 460 }}>
            A short form to see if we&rsquo;re a fit. Crystal reads every reply. If we are, a fit call
            lands on your calendar within the week.
          </p>
        </header>

        <form onSubmit={apply.submit} style={{ background: R_PALETTE.ink, color: R_PALETTE.cream,
          padding: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {apply.state !== 'success' ? (
            <>
              {[
                ['name',   'Your name',           'text',     1, 'Crystal Smith'],
                ['email',  'Email',               'email',    1, 'you@yourname.com'],
                ['stage',  'Where you are now',   'text',     1, 'e.g. 6-figure year, scaling team'],
                ['vision', 'The vision (in one paragraph)', 'textarea', 2, 'What is the dream you want to bloom?'],
              ].map(([k, label, type, span, ph]) => (
                <div key={k} style={{ gridColumn: `span ${span}` }}>
                  <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                    letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                    {label}
                  </label>
                  {type === 'textarea' ? (
                    <textarea required rows={4} value={apply.data[k]} onChange={apply.setField(k)} placeholder={ph}
                      style={{
                        width: '100%', padding: '14px 0', fontSize: 17, fontFamily: F.body,
                        background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                        color: R_PALETTE.cream, outline: 'none', resize: 'vertical',
                      }} />
                  ) : (
                    <input type={type} required value={apply.data[k]} onChange={apply.setField(k)} placeholder={ph}
                      style={{
                        width: '100%', padding: '14px 0', fontSize: 18, fontFamily: F.body,
                        background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                        color: R_PALETTE.cream, outline: 'none',
                      }} />
                  )}
                </div>
              ))}

              <button className="rs-cta-btn" disabled={apply.state === 'loading'} style={{
                gridColumn: 'span 2', marginTop: 16, padding: '24px',
                background: ACCENT, color: R_PALETTE.ink, border: 'none',
                fontFamily: F.mono, fontWeight: 700, fontSize: 14,
                letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
              }}>{apply.state === 'loading' ? '· · ·' : '● Send my application →'}</button>
            </>
          ) : (
            <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '64px 0' }}>
              <div style={{ width: 72, height: 72, border: `2px solid ${ACCENT}`, borderRadius: '50%',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: F.head, fontSize: 44, color: ACCENT, marginBottom: 24 }}>✓</div>
              <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 44, lineHeight: 1.2,
                color: R_PALETTE.cream, marginBottom: 16 }}>
                Application received.
              </div>
              <p style={{ fontFamily: F.body, fontSize: 17, color: R_PALETTE.mute, margin: 0 }}>
                Crystal reads everything. You&rsquo;ll hear back within 3 business days.
              </p>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

Object.assign(window, { PageLeaders });
