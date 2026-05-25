// app.jsx — Design canvas review (all Rockstar pages).
// Each artboard renders the page in `canvas` router mode (links inert).

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tagline": "Empowering courageous leaders, creatives, & visionaries.",
  "subTagline": "Coaching for the dreamers, speakers, and visionaries who refuse to let the world stay the same.",
  "density": "regular",
  "fontPair": "default",
  "order": "default"
}/*EDITMODE-END*/;

const SECTION_ORDERS = {
  default: ['services', 'pillars', 'work', 'testimonies'],
  storyFirst: ['work', 'services', 'pillars', 'testimonies'],
  proofFirst: ['testimonies', 'services', 'pillars', 'work'],
};

const DENSITY = { compact: 0.78, regular: 1, comfy: 1.18 };

const PROTOTYPE_URL = './prototype.html';

function Artboard({ children }) {
  return (
    <ModalProvider>
      <div style={{ width: '100%', height: '100%', background: R_PALETTE.bg, color: R_PALETTE.cream,
        fontFamily: '"DM Sans", sans-serif' }}>
        <RsNav />
        {children}
        <RsCTA />
        <RsFooter />
      </div>
    </ModalProvider>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const ctx = {
    tagline: t.tagline,
    subTagline: t.subTagline,
    density: DENSITY[t.density] || 1,
    fontPair: t.fontPair,
    order: SECTION_ORDERS[t.order] || SECTION_ORDERS.default,
  };

  // Page configs grouped into sections matching the new IA
  const SECTIONS = [
    {
      id: 'core', title: '00 · Home & Contact',
      pages: [
        { id: 'home',    label: 'Home',    h: 5400, comp: PageHome },
        { id: 'contact', label: 'Contact', h: 1800, comp: PageContact },
      ],
    },
    {
      id: 'activations', title: '01 · Activations',
      pages: [
        { id: 'act-stage',      label: 'Stage Activation',      h: 2400, comp: PageActivationStage },
        { id: 'act-prosperity', label: 'Prosperity Activation', h: 2400, comp: PageActivationProsperity },
      ],
    },
    {
      id: 'masterclasses', title: '02 · Masterclasses',
      pages: [
        { id: 'mc-index',      label: 'All masterclasses',    h: 1600, comp: PageMasterclassIndex },
        { id: 'mc-speakers',   label: 'Speakers Secrets',     h: 4400, comp: PageMasterclassSpeakers },
        { id: 'mc-dreamers',   label: 'Dreamers Secrets',     h: 4800, comp: PageMasterclassDreamers },
        { id: 'mc-prosperous', label: 'Most Prosperous Timeline', h: 4000, comp: PageMasterclassProsperous },
        { id: 'mc-money',      label: 'Money, Miracles & Manifestation', h: 4000, comp: PageMasterclassMoney },
      ],
    },
    {
      id: 'leadership', title: '03 · Leadership Programs',
      pages: [
        { id: 'lead-hub',  label: 'All programs (hub)',     h: 1800, comp: PageLeadership },
        { id: 'miracle',   label: 'Miracle Lab',            h: 4200, comp: PageMiracleLab },
        { id: 'dreamers',  label: 'Courageous Dreamers',    h: 4900, comp: PageDreamers },
        { id: 'speakers',  label: 'Courageous Speakers',    h: 4600, comp: PageSpeakers },
        { id: 'leaders',   label: 'Courageous Leaders',     h: 5600, comp: PageLeaders },
        { id: 'visionary', label: 'Courageous Visionaries', h: 4900, comp: PageVisionary },
      ],
    },
    {
      id: 'immersions', title: '04 · Immersions & Events',
      pages: [
        { id: 'immersions', label: 'Immersions & Events', h: 5200, comp: PageImmersions },
      ],
    },
    {
      id: 'commerce', title: '05 · Digital Products + Shop',
      pages: [
        { id: 'digital', label: 'Digital Products', h: 2600, comp: PageDigitalProducts },
        { id: 'shop',    label: 'Shop',             h: 2800, comp: PageShop },
      ],
    },
    {
      id: 'stage', title: '06 · Hire Crystal',
      pages: [
        { id: 'hire', label: 'Hire Crystal · Speaker & Performer', h: 5000, comp: PageHire },
      ],
    },
  ];

  return (
    <>
      <DesignCanvas minScale={0.03} maxScale={2}>
        {SECTIONS.map((sec) => (
          <DCSection key={sec.id} id={sec.id} title={sec.title}>
            {sec.pages.map((p) => (
              <DCArtboard key={p.id} id={p.id} label={p.label} width={1440} height={p.h}>
                <Artboard><p.comp ctx={ctx} /></Artboard>
              </DCArtboard>
            ))}
          </DCSection>
        ))}

        <DCPostIt top={20} left={60} rotate={-3} width={280}>
          Pan + zoom. Click any artboard's ⤢ to focus. Or open the <a href={PROTOTYPE_URL} target="_blank"
            style={{ color: '#c96442', fontWeight: 700 }}>live prototype ↗</a> for a scrollable,
          clickable multi-page experience with dropdown nav.
        </DCPostIt>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero copy" />
        <TweakText label="Tagline" value={t.tagline}
          onChange={(v) => setTweak('tagline', v)} />
        <TweakText label="Sub-tagline" value={t.subTagline}
          onChange={(v) => setTweak('subTagline', v)} />

        <TweakSection label="Layout" />
        <TweakRadio label="Density" value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)} />
        <TweakSelect label="Section order" value={t.order}
          options={[
            ['default',     'Services → Pillars → Work → Proof'],
            ['storyFirst',  'Work first → Services'],
            ['proofFirst',  'Proof first → Services'],
          ]}
          onChange={(v) => setTweak('order', v)} />
        <TweakSelect label="Type pairing" value={t.fontPair}
          options={[
            ['default',  'Anton headings (native)'],
            ['serifLed', 'Instrument Serif headings'],
          ]}
          onChange={(v) => setTweak('fontPair', v)} />

        <TweakSection label="Live preview" />
        <TweakButton label="Open prototype ↗" onClick={() => window.open(PROTOTYPE_URL, '_blank')} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
