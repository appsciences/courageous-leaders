// page-testimonies.jsx — "Why Work With Crystal"
// Sections: hero · answered prayer · big speaking video · who Crystal works with
// (+ "No Wimps Allowed" signpost) · Dear Courageous Leader letter · pain points
// · video testimonies (5, YouTube) · written testimonies (photo + paragraph)
// · featured single testimony · coaching videos.

// ─── "No Wimps Allowed" hanging signpost ────────────────────────────────────
function NoWimpsSign({ style = {} }) {
  return (
    <div style={{ position: 'relative', width: 200, ...style }}>
      {/* two hanging ropes */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 24px' }}>
        <div style={{ width: 2, height: 36, background: R_PALETTE.mute }} />
        <div style={{ width: 2, height: 36, background: R_PALETTE.mute }} />
      </div>
      {/* the board */}
      <div style={{
        background: R_PALETTE.ink, border: `2px solid ${ACCENT}`,
        padding: '20px 18px', textAlign: 'center', transform: 'rotate(-3deg)',
        boxShadow: '0 14px 30px rgba(0,0,0,0.5)',
      }}>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: R_PALETTE.mute, marginBottom: 6 }}>
          ⚡ House rules
        </div>
        <div style={{ fontFamily: '"Anton", sans-serif', fontSize: 32, lineHeight: 0.92,
          textTransform: 'uppercase', color: ACCENT, letterSpacing: '0.01em' }}>
          No Wimps<br />Allowed
        </div>
      </div>
      {/* two little nails */}
      <div style={{ position: 'absolute', top: 0, left: 24, width: 7, height: 7, borderRadius: '50%',
        background: ACCENT }} />
      <div style={{ position: 'absolute', top: 0, right: 24, width: 7, height: 7, borderRadius: '50%',
        background: ACCENT }} />
    </div>
  );
}

function PageTestimonies({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);

  // 5 video testimonies (YouTube placeholders) + one-sentence summaries
  const VIDEO_TESTIMONIES = [
    { label: 'YouTube link · video testimony 01', sum: 'From burnt out to fully booked in one quarter.' },
    { label: 'YouTube link · video testimony 02', sum: 'I finally found the voice that funds the vision.' },
    { label: 'YouTube link · video testimony 03', sum: 'My first $8k week happened the same week we started.' },
    { label: 'YouTube link · video testimony 04', sum: 'I stopped hiding. The clients showed up anyway.' },
    { label: 'YouTube link · video testimony 05', sum: 'The community held me the whole way through.' },
  ];

  // written testimonies (photo + small paragraph)
  const WRITTEN = [
    { name: 'A. — visionary, $200k+ year', text: 'I woke up wanting to quit. We did one call. By Thursday I had made $8,000 in sales. Crystal does not just coach you — she sees the version of you that already has it, and refuses to let you forget her.' },
    { name: 'M. — founder, scaling to 7 figures', text: 'Crystal sees the hill, races me to it, and helps me push the first snowball down. Then the avalanche takes care of itself. I have never had support like this in fifteen years of business.' },
    { name: 'J. — speaker + creator', text: 'I stopped chasing and started celebrating. The clients came anyway. The difference was not strategy — it was finally feeling worthy of the dream I was carrying.' },
    { name: 'R. — creative, first book done', text: 'Four years of a manuscript collecting dust. Six weeks in the Writers group and it was finished. The accountability and the love in that room is unlike anything I have experienced.' },
  ];

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Why Work With Crystal" />
      </section>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 56px 80px' }}>
        <RsEyebrow>Testimonies</RsEyebrow>
        <h1 style={{
          fontFamily: F.head, fontWeight: 400, fontSize: 168, lineHeight: 0.86,
          margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
        }}>
          Why work<br />with <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>Crystal</em>.
        </h1>
        <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.55, color: R_PALETTE.cream,
          maxWidth: 720, marginTop: 36 }}>
          Real people. Real movements. Real miracles on the calendar. Here is what happens when courageous
          leaders, creatives, and visionaries decide to stop waiting.
        </p>
      </section>

      {/* ─── ANSWERED PRAYER (near top) ───────────────────────────────── */}
      <section style={{ padding: '90px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'center' }}>
          <PhotoSlot label="Crystal · with community / on stage" h={460} tone="warm"
            style={{ border: `1px solid ${ACCENT}` }} />
          <div>
            <RsEyebrow color={R_PALETTE.warm}>An invitation</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 76, lineHeight: 0.95,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              People are praying for what you have to offer.
            </h2>
            <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 40, lineHeight: 1.25,
              color: ACCENT, margin: '32px 0 0' }}>
              Do you have the courage to be the answered prayer?
            </p>
          </div>
        </div>
      </section>

      {/* ─── BIG SPEAKING VIDEO ───────────────────────────────────────── */}
      <section style={{ padding: '110px 56px' }}>
        <header style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 88, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            See her <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>in action</em>.
          </h2>
          <span style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: R_PALETTE.mute }}>YouTube link · keynote</span>
        </header>
        <RsVideo label="Crystal speaking · full keynote" h={640} tone="ink" />
      </section>

      {/* ─── WHO DOES CRYSTAL WORK WITH (+ signpost) ──────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.dim, position: 'relative' }}>
        <header style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40 }}>
          <div>
            <RsEyebrow>The room</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
              margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              Who does Crystal<br />
              <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>work with</em>?
            </h2>
          </div>
          {/* hanging signpost */}
          <NoWimpsSign style={{ flexShrink: 0, marginTop: 8 }} />
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 0,
          border: `1px solid ${R_PALETTE.hairline}` }}>
          {[
            { t: 'Dreamers',   d: 'The ones with a wild idea and the courage to make it real.' },
            { t: 'Leaders',    d: 'The ones ready to step into their next level of leadership.' },
            { t: 'Speakers',   d: 'The ones with a message that moves rooms and funds movements.' },
            { t: 'Visionaries',d: 'The ones carrying a movement who need to be cared for too.' },
          ].map((a, i) => (
            <div key={a.t} style={{
              padding: '44px 32px', minHeight: 280, position: 'relative',
              borderRight: i < 3 ? `1px solid ${R_PALETTE.hairline}` : 'none',
              background: i === 1 ? ACCENT : 'transparent',
              color: i === 1 ? R_PALETTE.ink : R_PALETTE.cream,
            }}>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: i === 1 ? R_PALETTE.ink : ACCENT,
                marginBottom: 20, opacity: i === 1 ? 0.7 : 1 }}>Courageous</div>
              <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 48, lineHeight: 0.95,
                margin: '0 0 20px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{a.t}</h3>
              <p style={{ fontFamily: F.body, fontSize: 15, lineHeight: 1.6, margin: 0,
                color: i === 1 ? R_PALETTE.ink : R_PALETTE.mute, opacity: i === 1 ? 0.92 : 1 }}>{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DEAR COURAGEOUS LEADER (letter + photo) ──────────────────── */}
      <section style={{ padding: '130px 56px', background: R_PALETTE.paper, color: R_PALETTE.ink }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 72, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <PhotoSlot label="Portrait of Crystal" h={560} tone="warm"
              style={{ border: `1px solid ${ACCENT}` }} />
          </div>
          <div>
            <RsEyebrow color={R_PALETTE.warm}>A letter</RsEyebrow>
            <h2 style={{ fontFamily: F.emph, fontStyle: 'italic', fontWeight: 400, fontSize: 64,
              lineHeight: 1.05, margin: '0 0 36px', color: R_PALETTE.ink }}>
              Dear Courageous Leader,
            </h2>
            <div style={{ fontFamily: F.body, fontSize: 19, lineHeight: 1.75, color: R_PALETTE.warm }}>
              <p style={{ marginTop: 0 }}>
                If you are reading this, something in you already knows. You were not built for small.
                You have carried a dream long enough to feel both its weight and its pull &mdash; and you are
                tired of pretending it does not matter.
              </p>
              <p>
                I have sat where you are sitting. I know the fear that masquerades as &ldquo;not yet,&rdquo; the
                old stories that whisper you are not the one. I also know what happens on the other side of
                courage: the clients arrive, the rooms open, the movement grows, and the miracles start
                landing on the calendar like they were always meant to.
              </p>
              <p>
                I do not work with everyone. I work with the brave &mdash; the dreamers, leaders, speakers, and
                visionaries who are done waiting for permission. If that is you, I would be honored to walk
                beside you. Not as your coach. Not as your employee.{' '}
                <em style={{ fontFamily: F.emph, color: R_PALETTE.ink }}>As the best friend to your vision.</em>
              </p>
              <p style={{ marginBottom: 0, fontFamily: F.emph, fontStyle: 'italic', fontSize: 30, color: ACCENT }}>
                With all my love &amp; courage,<br />Crystal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS ──────────────────────────────────────────────── */}
      <section style={{ padding: '130px 56px', background: R_PALETTE.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
          <div>
            <RsEyebrow>Does this sound like you?</RsEyebrow>
            <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 92, lineHeight: 0.9,
              margin: '0 0 40px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              You&rsquo;re not stuck.<br />
              You&rsquo;re <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>
                one decision</em><br />from the leap.
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0,
              borderTop: `1px solid ${R_PALETTE.hairline}` }}>
              {[
                'You have a dream so big it scares you to say it out loud.',
                'You are doing all the things and still not seeing the movement you know is possible.',
                'You are exhausted from carrying the vision alone.',
                'You keep waiting to feel ready &mdash; and ready never comes.',
                'You know you are meant for impact, but the old stories keep winning.',
              ].map((p, i) => (
                <li key={i} style={{ display: 'flex', gap: 20, padding: '20px 0',
                  borderBottom: `1px solid ${R_PALETTE.hairline}`, alignItems: 'center' }}>
                  <span style={{ fontFamily: F.head, fontSize: 28, color: ACCENT, lineHeight: 1, flexShrink: 0,
                    width: 44 }}>{String(i+1).padStart(2,'0')}</span>
                  <span style={{ fontFamily: F.body, fontSize: 18, lineHeight: 1.5, color: R_PALETTE.cream }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 28, lineHeight: 1.3,
              color: ACCENT, marginTop: 40, marginBottom: 0 }}>
              Every testimony on this page started exactly here.
            </p>
          </div>
          <PhotoSlot label="Image · the leader at the crossroads" h={580} tone="ink"
            style={{ border: `1px solid ${R_PALETTE.hairline}` }} />
        </div>
      </section>

      {/* ─── VIDEO TESTIMONIES (5 YouTube + one-sentence summaries) ────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.dim }}>
        <header style={{ marginBottom: 56 }}>
          <RsEyebrow>Video testimonies</RsEyebrow>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            In their <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>own words</em>.
          </h2>
        </header>

        {/* first row of 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 20 }}>
          {VIDEO_TESTIMONIES.slice(0, 3).map((v, i) => (
            <div key={i}>
              <RsVideo label={v.label} h={300} tone="ink" />
              <p style={{ fontFamily: F.body, fontSize: 13, lineHeight: 1.5, color: R_PALETTE.mute,
                margin: '14px 0 0', fontStyle: 'italic' }}>&ldquo;{v.sum}&rdquo;</p>
            </div>
          ))}
        </div>
        {/* second row of 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {VIDEO_TESTIMONIES.slice(3).map((v, i) => (
            <div key={i}>
              <RsVideo label={v.label} h={300} tone="ink" />
              <p style={{ fontFamily: F.body, fontSize: 13, lineHeight: 1.5, color: R_PALETTE.mute,
                margin: '14px 0 0', fontStyle: 'italic' }}>&ldquo;{v.sum}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WRITTEN TESTIMONIES (photo + small paragraph) ────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.bg }}>
        <header style={{ marginBottom: 56 }}>
          <RsEyebrow>Written testimonies</RsEyebrow>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 96, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Letters from<br />the <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>brave</em>.
          </h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {WRITTEN.map((w, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24,
              padding: '32px', background: R_PALETTE.dim, border: `1px solid ${R_PALETTE.hairline}`,
              alignItems: 'start',
            }}>
              <PhotoSlot label="Photo" h={120} w={120} tone={i % 2 ? 'warm' : 'ink'}
                style={{ borderRadius: '50%' }} />
              <div>
                <p style={{ fontFamily: F.body, fontSize: 14, lineHeight: 1.6, color: R_PALETTE.cream,
                  margin: '0 0 16px' }}>&ldquo;{w.text}&rdquo;</p>
                <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.16em',
                  textTransform: 'uppercase', color: ACCENT }}>{w.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURED SINGLE TESTIMONY (photo + one sentence) ─────────── */}
      <section style={{ padding: '120px 56px', background: ACCENT, color: R_PALETTE.ink }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 64, alignItems: 'center' }}>
          <PhotoSlot label="Featured client photo" h={420} tone="warm"
            style={{ border: `2px solid ${R_PALETTE.ink}` }} />
          <div>
            <span style={{ fontFamily: F.head, fontSize: 140, lineHeight: 0.4, display: 'block',
              marginBottom: 24 }}>&ldquo;</span>
            <p style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 52, lineHeight: 1.2,
              margin: 0 }}>
              She did not just change my business &mdash; she gave me back the courage to believe in the dream
              at all.
            </p>
            <div style={{ fontFamily: F.mono, fontSize: 13, letterSpacing: '0.18em',
              textTransform: 'uppercase', marginTop: 32, opacity: 0.75 }}>
              — L., founder &amp; courageous visionary
            </div>
          </div>
        </div>
      </section>

      {/* ─── COACHING VIDEOS ──────────────────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: R_PALETTE.bg }}>
        <header style={{ marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 88, lineHeight: 0.9,
            margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            Watch her <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>coach</em>.
          </h2>
          <span style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: R_PALETTE.mute }}>YouTube links · coaching clips</span>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          <RsVideo label="Coaching clip · 01" h={360} tone="ink" />
          <RsVideo label="Coaching clip · 02" h={360} tone="dark" />
          <RsVideo label="Coaching clip · 03" h={360} tone="ink" />
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PageTestimonies });
