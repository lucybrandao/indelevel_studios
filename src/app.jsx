/* Indelevel Studios — Main App */

const { useState, useEffect } = React;
const { Nav, Hero, Trusted, Pain, Solution } = window.IndelevelTop;
const { Benefits, Stats, Testimonials, Offer } = window.IndelevelMid;
const { Objections, Guarantee, Urgency, Faq, FinalCta, PS, Footer, WaFloat } = window.IndelevelBot;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "ctaVariant": "A",
  "secondaryVariant": "B",
  "showFloatingWa": true,
  "accentMode": "gradient",
  "density": "comfortable"
}/*EDITMODE-END*/;

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // Apply density modifier
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--section-pad',
      t.density === 'tight' ? '88px' : t.density === 'airy' ? '160px' : '120px'
    );
    document.body.dataset.density = t.density;
  }, [t.density]);

  // Scroll listener for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled}/>
      <Hero ctaVariant={t.ctaVariant} secondaryVariant={t.secondaryVariant}/>
      <Trusted/>
      <Pain/>
      <Solution/>
      <Benefits/>
      <Stats/>
      <Testimonials/>
      <Offer ctaVariant={t.ctaVariant}/>
      <Objections/>
      <Guarantee/>
      <Urgency/>
      <Faq/>
      <FinalCta ctaVariant={t.ctaVariant}/>
      <PS/>
      <Footer/>
      {t.showFloatingWa && <WaFloat/>}
      <IndelevelTweaks tweaks={t} setTweak={setTweak}/>
    </>
  );
}

/* ----- Tweaks panel ----- */
function IndelevelTweaks({ tweaks, setTweak }) {
  const { TweaksPanel, TweakSection, TweakRadio, TweakToggle } = window;
  if (!TweaksPanel) return null;
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="CTA principal"/>
      <TweakRadio
        label="Variante"
        options={[
          { value: 'A', label: 'A · 2 min' },
          { value: 'B', label: 'B · Tirar do papel' }
        ]}
        value={tweaks.ctaVariant}
        onChange={v => setTweak('ctaVariant', v)}
      />
      <TweakSection label="Densidade"/>
      <TweakRadio
        label="Espaçamento"
        options={[
          { value: 'tight', label: 'Compacto' },
          { value: 'comfortable', label: 'Padrão' },
          { value: 'airy', label: 'Espaçado' }
        ]}
        value={tweaks.density}
        onChange={v => setTweak('density', v)}
      />
      <TweakSection label="Interface"/>
      <TweakToggle
        label="WhatsApp flutuante"
        value={tweaks.showFloatingWa}
        onChange={v => setTweak('showFloatingWa', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
