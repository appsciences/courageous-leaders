// prototype.jsx — full-bleed working prototype.
// Hash-router renders the matching page. Tweaks panel persists copy live.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tagline": "Become a courageous leader.",
  "subTagline": "Coaching for the dreamers, speakers, and visionaries who refuse to let the world stay the same.",
  "density": "regular",
  "fontPair": "default",
  "order": "default"
}/*EDITMODE-END*/;

const DENSITY = { compact: 0.78, regular: 1, comfy: 1.18 };
const SECTION_ORDERS = {
  default: ['services', 'pillars', 'work', 'testimonies'],
  storyFirst: ['work', 'services', 'pillars', 'testimonies'],
  proofFirst: ['testimonies', 'services', 'pillars', 'work'],
};

const PAGE_MAP = {
  '/':           PageHome,

  '/activations':              PageActivationStage, // default to first
  '/activations/stage':        PageActivationStage,
  '/activations/prosperity':   PageActivationProsperity,

  '/masterclasses':                        PageMasterclassIndex,
  '/masterclass/prosperous-timeline':      PageMasterclassProsperous,
  '/masterclass/speakers-secrets':         PageMasterclassSpeakers,
  '/masterclass/dreamers-secrets':         PageMasterclassDreamers,
  '/masterclass/money-miracles':           PageMasterclassMoney,

  '/leadership':  PageLeadership,
  '/miracle-lab': PageMiracleLab,
  '/dreamers':    PageDreamers,
  '/speakers':    PageSpeakers,
  '/leaders':     PageLeaders,
  '/visionary':   PageVisionary,

  '/immersions':  PageImmersions,

  '/digital-products': PageDigitalProducts,
  '/shop':             PageShop,

  '/hire':    PageHire,
  '/contact': PageContact,
};

function Router({ ctx }) {
  const { path } = useRouter();
  // Strip any hash anchor when matching routes
  const cleanPath = path.split('#')[0] || '/';
  const Page = PAGE_MAP[cleanPath] || PageHome;
  // page-change subtle fade
  return (
    <div key={cleanPath} style={{ animation: 'rs-fade-in .35s ease both' }}>
      <RsNav />
      <Page ctx={ctx} />
      <RsCTA ctx={ctx} />
      <RsFooter />
    </div>
  );
}

// inject fade-in keyframes
if (typeof document !== 'undefined' && !document.getElementById('rs-fade')) {
  const s = document.createElement('style');
  s.id = 'rs-fade';
  s.textContent = `
    @keyframes rs-fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
  `;
  document.head.appendChild(s);
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

  return (
    <RouterProvider>
      <ModalProvider>
        <RsShell scrollable>
          <Router ctx={ctx} />
        </RsShell>

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

          <TweakSection label="Review" />
          <TweakButton label="← Back to design canvas" onClick={() => { location.href = './index.html'; }} />
        </TweaksPanel>
      </ModalProvider>
    </RouterProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
