// page-masterclass.jsx — Free webinar opt-in pages.
// Shared template (PageMasterclass) + 4 specific instantiations.

// Tiny decorative SVG heart (used on Speakers Secrets).
function RsHeart({ size = 28, color = '#FF3D2E', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path fill={color} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}

function PageMasterclass({ ctx = {}, mc }) {
  const F = rsFont(ctx.fontPair);
  const reg = useFormMock({ name: '', email: '' });

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here={mc.title} />
      </section>

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 80px', position: 'relative' }}>
        {/* Floating hearts (only used by Speakers Secrets) */}
        {mc.hearts && (
          <>
            <div style={{ position: 'absolute', top: 40, right: '40%', opacity: 0.85, animation: 'rs-float 4s ease-in-out infinite' }}>
              <RsHeart size={36} />
            </div>
            <div style={{ position: 'absolute', top: 200, right: 80, opacity: 0.6, animation: 'rs-float 5s ease-in-out infinite reverse' }}>
              <RsHeart size={56} />
            </div>
            <div style={{ position: 'absolute', top: 480, right: 280, opacity: 0.5, animation: 'rs-float 6s ease-in-out infinite' }}>
              <RsHeart size={24} />
            </div>
          </>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '10px 18px', border: `1px solid ${ACCENT}`,
              fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: ACCENT, marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT,
                animation: 'rs-pulse 1.8s ease infinite' }} />
              Free live masterclass · Save your seat
            </div>

            <h1 style={{
              fontFamily: F.head, fontWeight: 400, fontSize: 124, lineHeight: 0.86,
              margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
            }}>
              {mc.heroLines.map((l, i) => (
                <React.Fragment key={i}>
                  {l.italic ? (
                    <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>{l.text}</em>
                  ) : l.text}
                  {i < mc.heroLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 32, lineHeight: 1.3,
              color: R_PALETTE.cream, margin: '32px 0 16px', maxWidth: 580,
              display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
            }}>
              {mc.hearts && <RsHeart size={28} />}
              &ldquo;{mc.subtitle}&rdquo;
              {mc.hearts && <RsHeart size={28} />}
            </p>

            <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.6, color: R_PALETTE.mute,
              margin: '24px 0 0', maxWidth: 540 }}>{mc.lead}</p>

            {/* Live details strip */}
            <div style={{ marginTop: 48, padding: '24px 0',
              borderTop: `1px solid ${R_PALETTE.hairline}`,
              borderBottom: `1px solid ${R_PALETTE.hairline}`,
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
              {[
                ['When', mc.date],
                ['Time', mc.time],
                ['Cost', 'FREE'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: F.mono, fontSize: 10, letterSpacing: '0.22em',
                    color: R_PALETTE.mute, textTransform: 'uppercase', marginBottom: 6 }}>{k}</div>
                  <div style={{ fontFamily: F.head, fontSize: 32, color: k === 'Cost' ? ACCENT : R_PALETTE.cream, lineHeight: 1 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* REGISTRATION FORM (sticky on desktop) */}
          <form onSubmit={reg.submit} style={{
            background: R_PALETTE.dim, padding: 40, border: `1px solid ${ACCENT}`,
            position: 'sticky', top: 100,
          }}>
            {reg.state !== 'success' ? (
              <>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 40, lineHeight: 0.95,
                  margin: '0 0 8px', textTransform: 'uppercase' }}>Save your seat.</h3>
                <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.5, color: R_PALETTE.mute,
                  margin: '0 0 28px' }}>Instant access. No verification, no waiting.</p>

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
                }}>{reg.state === 'loading' ? '· · ·' : '● Register me'}</button>

                <p style={{ marginTop: 16, fontFamily: F.mono, fontSize: 10,
                  letterSpacing: '0.16em', textTransform: 'uppercase', textAlign: 'center',
                  color: R_PALETTE.mute }}>
                  ✓ Instant access · ✓ Replay included
                </p>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', textAlign: 'center', gap: 16, padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, border: `2px solid ${ACCENT}`, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: F.head, fontSize: 40, color: ACCENT }}>✓</div>
                <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 32, lineHeight: 1.2,
                  color: R_PALETTE.cream }}>
                  You&rsquo;re in.
                </div>
                <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.55, color: R_PALETTE.mute, margin: 0 }}>
                  Calendar invite + replay link on the way to<br />
                  <strong style={{ color: R_PALETTE.cream }}>{reg.data.email}</strong>
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      <RsTicker animated items={['Free · No verification', mc.subtitle, 'Replay included', 'Bring a notebook']} />

      {/* ─── THE 3 SECRETS ───────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <header style={{ marginBottom: 72, textAlign: 'center', maxWidth: 880, margin: '0 auto 72px' }}>
          <RsEyebrow color={R_PALETTE.warm}>The three secrets</RsEyebrow>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.92,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            What you&rsquo;ll <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>walk away</em> with.
          </h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0,
          border: `1px solid ${R_PALETTE.ink}` }}>
          {mc.secrets.map((s, i) => (
            <div key={i} style={{
              padding: '48px 36px', position: 'relative', minHeight: 360,
              borderRight: i < 2 ? `1px solid ${R_PALETTE.ink}` : 'none',
              background: i === 1 ? ACCENT : 'transparent',
              color: i === 1 ? R_PALETTE.ink : R_PALETTE.ink,
            }}>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: i === 1 ? R_PALETTE.ink : ACCENT, marginBottom: 16, opacity: i === 1 ? 0.7 : 1 }}>
                Secret 0{i+1}
              </div>
              <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 56, lineHeight: 0.95,
                margin: '0 0 24px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{s.t}</h3>
              <p style={{ fontFamily: F.body, fontSize: 16, lineHeight: 1.6, margin: 0,
                color: i === 1 ? R_PALETTE.ink : R_PALETTE.warm, opacity: i === 1 ? 0.92 : 1 }}>{s.d}</p>
              {mc.hearts && i === 1 && (
                <div style={{ position: 'absolute', top: 28, right: 28 }}>
                  <RsHeart size={32} color={R_PALETTE.ink} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── PERFECT FOR YOU IF / OBJECTIONS ─────────────────────────── */}
      {mc.objections && (
        <section style={{ padding: '120px 56px', background: R_PALETTE.bg }}>
          <header style={{ marginBottom: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'baseline' }}>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              This is for <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>you</em><br />
              if you&rsquo;re ready to release&hellip;
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.6, color: R_PALETTE.mute, margin: 0, maxWidth: 460 }}>
              The masterclass is built to dissolve the patterns that have been keeping you stuck.
              If one of these is yours, you&rsquo;re in the right room.
            </p>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {mc.objections.map((o, i) => (
              <div key={i} style={{
                padding: '32px 28px', background: R_PALETTE.dim,
                border: `1px solid ${R_PALETTE.hairline}`,
                display: 'flex', alignItems: 'center', gap: 24,
              }}>
                <span style={{ fontFamily: F.head, fontSize: 56, lineHeight: 0.9,
                  color: ACCENT, flexShrink: 0 }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4,
                  color: R_PALETTE.cream }}>{o}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── PROMISE / BIG IDEA ──────────────────────────────────────── */}
      {mc.promise && (
        <section style={{ padding: '140px 56px', background: ACCENT, color: R_PALETTE.ink, textAlign: 'center', position: 'relative' }}>
          {mc.hearts && (
            <>
              <div style={{ position: 'absolute', top: 60, left: '20%' }}>
                <RsHeart size={32} color={R_PALETTE.ink} style={{ opacity: 0.4 }} />
              </div>
              <div style={{ position: 'absolute', bottom: 60, right: '24%' }}>
                <RsHeart size={48} color={R_PALETTE.ink} style={{ opacity: 0.5 }} />
              </div>
            </>
          )}
          <div style={{ fontFamily: rsFont().mono, fontSize: 12, letterSpacing: '0.22em',
            textTransform: 'uppercase', marginBottom: 28 }}>The promise</div>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 132, lineHeight: 0.88,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.025em', maxWidth: 1280, marginLeft: 'auto', marginRight: 'auto' }}>
            {mc.promise}
          </h2>
        </section>
      )}

      {/* ─── HOST BIO ────────────────────────────────────────────────── */}
      <section style={{ padding: '140px 56px', background: R_PALETTE.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <PhotoSlot label="Crystal · host" h={520} tone="warm" style={{ border: `1px solid ${ACCENT}` }} />
          <div>
            <RsEyebrow>Your host</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 88, lineHeight: 0.92,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.015em' }}>
              With <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>Crystal</em>.
            </h2>
            <p style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.6, color: R_PALETTE.cream,
              margin: '32px 0 0', maxWidth: 620 }}>
              Crystal is a leadership coach, performer, and the founder of Courageous Leaders &mdash;
              a coaching practice for the dreamers, speakers, and visionaries who refuse to let the world stay the same.
              Her clients range from first-time founders building their first $100k to seasoned operators
              scaling movements that reach thousands.
            </p>
            <RLink to="/hire" className="rs-link-line" style={{ display: 'inline-block', marginTop: 24,
              fontFamily: rsFont().mono, fontSize: 13, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: ACCENT, textDecoration: 'none' }}>
              More about Crystal →
            </RLink>
          </div>
        </div>
      </section>

      {/* ─── FINAL REGISTRATION CTA ──────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.dim, textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
            margin: '0 0 32px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Save your <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>seat</em>.
          </h2>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="rs-cta-btn" style={{
              display: 'inline-flex', alignItems: 'center', gap: 16,
              padding: '24px 40px', background: ACCENT, color: R_PALETTE.ink,
              textDecoration: 'none', fontFamily: rsFont().mono, fontSize: 14, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
            }}>
            ● Register for free →
          </a>
        </div>
      </section>
    </>
  );
}

// inject heart float animation
if (typeof document !== 'undefined' && !document.getElementById('rs-float')) {
  const s = document.createElement('style');
  s.id = 'rs-float';
  s.textContent = `@keyframes rs-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }`;
  document.head.appendChild(s);
}

// ─── 4 specific masterclasses ─────────────────────────────────────────────

const MC_SPEAKERS = {
  title: 'Courageous Speakers Secrets',
  hearts: true,
  heroLines: [
    { text: 'Open hearts.' },
    { text: 'Close sales.', italic: true },
  ],
  subtitle: '3 Secrets to Open Hearts and Close Sales',
  lead: 'The art of speaking that calls in investors, funders, and clients. A free 90-minute masterclass for the speaker who&rsquo;s ready to be paid in full for the truth they came here to tell.',
  date: 'Sept 24',
  time: '4 PM PT',
  secrets: [
    { t: 'Open the heart first', d: 'Why every closed sale begins with an opened heart &mdash; and the three opening moves that actually land in 2026.' },
    { t: 'Tell the truth that funds', d: 'The story structure that calls in real money: not the polished origin story, the one that scares you to say out loud.' },
    { t: 'Close without the close', d: 'A new approach to invitation that lets the right people decide they&rsquo;re a yes &mdash; without ever needing the hard sell.' },
  ],
  promise: 'When the heart opens, the wallet follows.',
};

const MC_DREAMERS = {
  title: 'Courageous Dreamers Secrets',
  heroLines: [
    { text: 'Quantum leap.' },
    { text: 'Into a new', italic: false },
    { text: 'reality.', italic: true },
  ],
  subtitle: '3 Secrets to Manifesting Your Dreams Faster',
  lead: 'It doesn&rsquo;t matter how wild your dream is &mdash; you can manifest it. A free 90-minute masterclass for the dreamer ready to go from idea to movement, fast.',
  date: 'Oct 09',
  time: '5 PM PT',
  secrets: [
    { t: 'Define & share the dream', d: 'The exact way to name the dream out loud so the universe (and the right people) actually have something to organize around.' },
    { t: 'Be the dream', d: 'Identity work that closes the gap between the version of you who has it and the version of you reading this. No bypassing.' },
    { t: 'Live the dream', d: 'The daily rhythm and decision rules that turn a personal vision into a real-world movement that scales beyond you.' },
  ],
  objections: [
    'Old stories about who you&rsquo;re &ldquo;allowed&rdquo; to be',
    'Limiting beliefs handed down from family or culture',
    'Bad programming about money, worth, and success',
    'The fear of an uncertain future',
    'The fear of failure &mdash; and the deeper fear of success',
  ],
  promise: 'It doesn\u2019t matter how wild your dream is. You can manifest it.',
};

const MC_PROSPEROUS = {
  title: 'Most Prosperous Timeline',
  heroLines: [
    { text: 'Walk into your' },
    { text: 'most prosperous', italic: true },
    { text: 'timeline.' },
  ],
  subtitle: '3 Decisions That Shift You Into the Wealthiest Version of Your Life',
  lead: 'A free 90-minute masterclass on the three energetic and practical decisions that move you into the timeline your soul already chose.',
  date: 'Nov 13',
  time: '4 PM PT',
  secrets: [
    { t: 'Choose the timeline', d: 'Why prosperity is a decision before it&rsquo;s a strategy &mdash; and how to actually make the choice in your body, not just your head.' },
    { t: 'Clean the channel', d: 'The blocks that keep money flowing out instead of in &mdash; and the daily practice that opens the channel for good.' },
    { t: 'Move with the money', d: 'How to make decisions from the prosperous version of you &mdash; not the one trying to survive the next month.' },
  ],
  promise: 'Your most prosperous timeline is already chosen. We just walk you into it.',
};

const MC_MONEY = {
  title: 'Money, Miracles, & Manifestation',
  heroLines: [
    { text: 'Money.' },
    { text: 'Miracles.' },
    { text: 'Made real.', italic: true },
  ],
  subtitle: '3 Practices to Manifest Money & Miracles On Demand',
  lead: 'A free 90-minute masterclass on the spiritual + practical rhythm that brings money and miracles onto the calendar &mdash; not as exceptions, but as your normal.',
  date: 'Dec 04',
  time: '5 PM PT',
  secrets: [
    { t: 'Practice expectancy', d: 'The state of divine expectancy: how to want without grasping, hold without tightening, and let the miracle land on time.' },
    { t: 'Co-create with money', d: 'Money as a partner, not a prize. The mindset and ritual that turn the relationship into a real working partnership.' },
    { t: 'Stack the miracles', d: 'How to build the daily and weekly stacks that make miracles a rhythm, not a fluke.' },
  ],
  promise: 'Miracles on the calendar, not on the wish list.',
};

function PageMasterclassSpeakers(p)    { return <PageMasterclass {...p} mc={MC_SPEAKERS} />; }
function PageMasterclassDreamers(p)    { return <PageMasterclass {...p} mc={MC_DREAMERS} />; }
function PageMasterclassProsperous(p)  { return <PageMasterclass {...p} mc={MC_PROSPEROUS} />; }
function PageMasterclassMoney(p)       { return <PageMasterclass {...p} mc={MC_MONEY} />; }

// Index page (when user hits /masterclasses)
function PageMasterclassIndex({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const CLASSES = [
    { to: '/masterclass/prosperous-timeline', n: '01', title: 'Most Prosperous Timeline', sub: 'Walk into the wealthiest version of your life.', date: 'Nov 13' },
    { to: '/masterclass/speakers-secrets',    n: '02', title: 'Courageous Speakers Secrets', sub: 'Open hearts and close sales.', date: 'Sept 24' },
    { to: '/masterclass/dreamers-secrets',    n: '03', title: 'Courageous Dreamers Secrets', sub: 'Manifest your dreams faster.', date: 'Oct 09' },
    { to: '/masterclass/money-miracles',      n: '04', title: 'Money, Miracles, & Manifestation', sub: 'Miracles on the calendar.', date: 'Dec 04' },
  ];
  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Free Masterclasses" />
      </section>
      <section style={{ padding: '0 56px 80px' }}>
        <h1 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 180, lineHeight: 0.86,
          margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase' }}>
          Free <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>masterclasses</em>.
        </h1>
        <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.55, color: R_PALETTE.cream,
          maxWidth: 720, marginTop: 32 }}>
          Four 90-minute masterclasses. Pick the one your dream is calling for. No verification, no waiting &mdash;
          just press register and the room opens.
        </p>
      </section>
      <section style={{ borderTop: `1px solid ${R_PALETTE.hairline}` }}>
        {CLASSES.map((c) => (
          <RLink key={c.to} to={c.to} className="rs-row-hover" style={{
            display: 'grid', gridTemplateColumns: '120px 1.4fr 1.4fr 140px 80px',
            alignItems: 'center', gap: 40, padding: '40px 56px',
            borderBottom: `1px solid ${R_PALETTE.hairline}`,
            color: R_PALETTE.cream, textDecoration: 'none',
          }}>
            <span style={{ fontFamily: F.mono, fontSize: 14, color: ACCENT, letterSpacing: '0.14em' }}>
              MC {c.n}
            </span>
            <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 48, lineHeight: 1,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.005em' }}>{c.title}</h3>
            <p style={{ fontFamily: F.body, fontSize: 16, color: R_PALETTE.mute, margin: 0 }}>{c.sub}</p>
            <span style={{ fontFamily: F.head, fontSize: 28, color: R_PALETTE.cream, textAlign: 'right' }}>{c.date}</span>
            <span className="rs-row-arrow" style={{ fontFamily: F.mono, fontSize: 13, color: ACCENT, textAlign: 'right' }}>→</span>
          </RLink>
        ))}
      </section>
    </>
  );
}

Object.assign(window, {
  PageMasterclass,
  PageMasterclassSpeakers, PageMasterclassDreamers,
  PageMasterclassProsperous, PageMasterclassMoney,
  PageMasterclassIndex,
});
