// page-contact.jsx — Simple contact page (replaces "Book a call")
// + page-leadership.jsx (hub) + page-immersions-index already exists

function PageContact({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const msg = useFormMock({ name: '', email: '', topic: 'general', message: '' });

  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Contact" />
      </section>

      <section style={{ padding: '0 56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h1 style={{
              fontFamily: F.head, fontWeight: 400, fontSize: 200, lineHeight: 0.84,
              margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase',
            }}>
              Say <em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>hi</em>.
            </h1>
            <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.6, color: R_PALETTE.cream, margin: '40px 0 0', maxWidth: 540 }}>
              Whether you&rsquo;re asking about a program, hiring Crystal for a stage, or just want to introduce
              yourself &mdash; the inbox is open.
            </p>

            <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              {[
                ['Email', 'hello@crystal.co'],
                ['Press', 'press@crystal.co'],
                ['Studio', 'San Marcos · CA'],
                ['Reply within', '48 hours'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.18em',
                    color: R_PALETTE.mute, textTransform: 'uppercase', marginBottom: 8 }}>{k}</div>
                  <div style={{ fontFamily: F.head, fontSize: 28, color: R_PALETTE.cream, lineHeight: 1.1 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={msg.submit} style={{ background: R_PALETTE.dim, padding: 44, border: `1px solid ${ACCENT}` }}>
            {msg.state !== 'success' ? (
              <>
                <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 36, lineHeight: 0.95,
                  margin: '0 0 32px', textTransform: 'uppercase' }}>Send a note.</h3>

                {[
                  ['name',  'Your name', 'text',  'Crystal Smith'],
                  ['email', 'Email',     'email', 'you@yourname.com'],
                ].map(([k, label, type, ph]) => (
                  <div key={k} style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                      letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                      {label}
                    </label>
                    <input type={type} required value={msg.data[k]} onChange={msg.setField(k)} placeholder={ph}
                      style={{
                        width: '100%', padding: '14px 0', fontSize: 18, fontFamily: F.body,
                        background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                        color: R_PALETTE.cream, outline: 'none',
                      }} />
                  </div>
                ))}

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                    letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                    Topic
                  </label>
                  <select value={msg.data.topic} onChange={msg.setField('topic')} style={{
                    width: '100%', padding: '14px 0', fontSize: 18, fontFamily: F.body,
                    background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                    color: R_PALETTE.cream, outline: 'none', cursor: 'pointer',
                  }}>
                    <option value="general"  style={{ background: R_PALETTE.dim }}>General hello</option>
                    <option value="program"  style={{ background: R_PALETTE.dim }}>Question about a program</option>
                    <option value="hire"     style={{ background: R_PALETTE.dim }}>Hire Crystal to speak</option>
                    <option value="press"    style={{ background: R_PALETTE.dim }}>Press / podcast</option>
                    <option value="partner"  style={{ background: R_PALETTE.dim }}>Partnership / collab</option>
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: 'block', fontFamily: F.mono, fontSize: 11,
                    letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                    Message
                  </label>
                  <textarea required rows={5} value={msg.data.message} onChange={msg.setField('message')}
                    placeholder="Tell me what&rsquo;s on your mind&hellip;"
                    style={{
                      width: '100%', padding: '14px 0', fontSize: 17, fontFamily: F.body,
                      background: 'transparent', border: 'none', borderBottom: `1px solid ${R_PALETTE.hairline}`,
                      color: R_PALETTE.cream, outline: 'none', resize: 'vertical',
                    }} />
                </div>

                <button className="rs-cta-btn" disabled={msg.state === 'loading'} style={{
                  width: '100%', padding: '20px', background: ACCENT, color: R_PALETTE.ink,
                  border: 'none', fontFamily: F.mono, fontWeight: 700, fontSize: 13,
                  letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
                }}>{msg.state === 'loading' ? '· · ·' : '● Send message →'}</button>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '64px 0' }}>
                <div style={{ width: 64, height: 64, border: `2px solid ${ACCENT}`, borderRadius: '50%',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: F.head, fontSize: 36, color: ACCENT, marginBottom: 20 }}>✓</div>
                <div style={{ fontFamily: F.emph, fontStyle: 'italic', fontSize: 32,
                  color: R_PALETTE.cream, lineHeight: 1.2, marginBottom: 16 }}>
                  Message received.
                </div>
                <p style={{ fontFamily: F.body, fontSize: 15, color: R_PALETTE.mute, margin: 0 }}>
                  Reply within 48 hours.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

// Leadership Programs hub — index of the 5 programs
function PageLeadership({ ctx = {} }) {
  const F = rsFont(ctx.fontPair);
  const PROGRAMS = [
    { to: '/miracle-lab', n: '01', t: 'Miracle Lab',          sub: '40-day pay-what-you-can container', d: 'Manifesting miracles in our lives, together.' },
    { to: '/dreamers',    n: '02', t: 'Courageous Dreamers',  sub: 'Group coaching · accountability', d: 'Activate your highest potential. Live your wildest dreams.' },
    { to: '/speakers',    n: '03', t: 'Courageous Speakers',  sub: 'Public speaking for funders + clients', d: 'Tell your story to get more investors, funders, and clients.' },
    { to: '/leaders',     n: '04', t: 'Courageous Leaders',   sub: 'Group + 1:1', d: 'Market and lead your movement.' },
    { to: '/visionary',   n: '05', t: 'Courageous Visionaries', sub: '1:1 for well-established visionaries', d: 'More impact with less stress.' },
  ];
  return (
    <>
      <section style={{ padding: '56px 56px 40px' }}>
        <RsCrumb here="Leadership Programs" />
      </section>
      <section style={{ padding: '0 56px 80px' }}>
        <h1 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 180, lineHeight: 0.86,
          margin: 0, letterSpacing: '-0.025em', textTransform: 'uppercase' }}>
          Leadership<br /><em style={{ fontFamily: F.emph, fontStyle: 'italic', textTransform: 'none', color: ACCENT }}>programs</em>.
        </h1>
        <p style={{ fontFamily: F.body, fontSize: 22, lineHeight: 1.55, color: R_PALETTE.cream,
          maxWidth: 760, marginTop: 32 }}>
          Five programs. From first ideas to global movements. Pick the path your vision is asking for.
        </p>
      </section>
      <section style={{ borderTop: `1px solid ${R_PALETTE.hairline}` }}>
        {PROGRAMS.map((p) => (
          <RLink key={p.to} to={p.to} className="rs-row-hover" style={{
            display: 'grid', gridTemplateColumns: '100px 1.4fr 1.4fr 80px',
            alignItems: 'center', gap: 40, padding: '40px 56px',
            borderBottom: `1px solid ${R_PALETTE.hairline}`,
            color: R_PALETTE.cream, textDecoration: 'none',
          }}>
            <span style={{ fontFamily: F.mono, fontSize: 14, color: ACCENT, letterSpacing: '0.14em' }}>
              0{p.n.slice(-1)}
            </span>
            <div>
              <h3 style={{ fontFamily: F.head, fontWeight: 400, fontSize: 48, lineHeight: 1,
                margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '-0.005em' }}>{p.t}</h3>
              <div style={{ fontFamily: F.mono, fontSize: 11, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: R_PALETTE.mute }}>{p.sub}</div>
            </div>
            <p style={{ fontFamily: F.body, fontSize: 16, color: R_PALETTE.mute, margin: 0 }}>{p.d}</p>
            <span className="rs-row-arrow" style={{ fontFamily: F.mono, fontSize: 13, color: ACCENT, textAlign: 'right' }}>→</span>
          </RLink>
        ))}
      </section>
    </>
  );
}

Object.assign(window, { PageContact, PageLeadership });
