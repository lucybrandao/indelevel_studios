/* Indelevel Studios — Middle sections: Benefits, Stats, Testimonials, Offer */

const { useState, useEffect, useRef } = React;
const Im = window.IndelevelIcons;
const useReveal = window.useReveal;
const { BENEFITS, STATS, TESTIMONIALS, DELIVERABLES, ECOSYSTEM, WA_LINK: WAm } = window.IndelevelData;

function Benefits() {
  useReveal();
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="reveal">
          <div className="sec-eyebrow"><span className="num">03</span> · O que muda</div>
          <h2 className="sec-title">
            A partir daqui, seu projeto tem <em>direção</em>. Não só execução.
          </h2>
        </div>
        <div className="benefits">
          {BENEFITS.map((b, i) => (
            <article
              key={i}
              className={`benefit ${b.size} reveal`}
              style={{transitionDelay: `${i * 50}ms`}}
            >
              <div className="benefit-num">B/{String(i + 1).padStart(2, '0')}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, plus, prefix }) {
  // animate count up
  const ref = React.useRef(null);
  const [shown, setShown] = useState(value);
  const numericVal = parseInt(String(value).replace(/[^\d]/g, ''), 10) || 0;
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const dur = 1100;
          const tick = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const cur = Math.round(numericVal * eased);
            if (String(value).startsWith('R$')) {
              setShown(`R$ ${cur}k`);
            } else {
              setShown(String(cur));
            }
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  return (
    <span ref={ref} className="stat-num">
      {shown}{plus && <span className="plus">{plus}</span>}
    </span>
  );
}

function Stats() {
  useReveal();
  return (
    <section className="section-sm" id="trabalho">
      <div className="container">
        <div className="reveal" style={{marginBottom: 56, textAlign: 'center'}}>
          <div className="sec-eyebrow" style={{justifyContent: 'center'}}>
            <span className="num">04</span> · Prova social
          </div>
          <h2 className="sec-title center">
            Os números que importam <em>são os do seu projeto.</em>
          </h2>
          <p className="sec-sub center">
            Mas se você precisa de referência antes da primeira conversa — aqui está.
          </p>
        </div>
        <div className="stats reveal">
          {STATS.map((s, i) => (
            <div className="stat" key={i}>
              <Counter value={s.num} plus={s.plus}/>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  useReveal();
  return (
    <section className="section">
      <div className="container">
        <div className="reveal">
          <div className="sec-eyebrow"><span className="num">05</span> · Depoimentos</div>
          <h2 className="sec-title">
            Quem trabalhou com a gente, <em>falou por escrito.</em>
          </h2>
        </div>
        <div className="testimonials">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className={`testimonial ${t.feature ? 'feature' : ''} reveal`}
              style={{transitionDelay: `${i * 70}ms`}}
            >
              <p className="testimonial-quote">"{t.quote}"</p>
              {t.context && (
                <div className="testimonial-context">Contexto · {t.context}</div>
              )}
              <div className="testimonial-byline">
                <div className="avatar">{t.initials}</div>
                <div className="byline-text">
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer({ ctaVariant }) {
  useReveal();
  const cta = window.IndelevelData.CTA_VARIANTS[ctaVariant];
  return (
    <section className="section" id="oferta" style={{paddingTop: 80}}>
      <div className="container">
        <div className="reveal">
          <div className="sec-eyebrow"><span className="num">06</span> · Como entregamos</div>
          <h2 className="sec-title">
            Cada projeto começa com <em>uma conversa.</em>
          </h2>
          <p className="sec-sub" style={{maxWidth: '64ch'}}>
            Cada projeto é único — e o escopo certo só aparece quando entendemos o seu
            contexto de verdade. Não é fraqueza não ter preço fixo. É respeito pelo que
            você está construindo.
          </p>
        </div>
        <div className="offer">
          <ul className="deliverables reveal">
            {DELIVERABLES.map((d, i) => (
              <li key={i}>
                <span className="check"><Im.check style={{width: 14, height: 14}}/></span>
                <span>{d.label}</span>
                <span className="tag">{d.tag}</span>
              </li>
            ))}
          </ul>
          <aside className="offer-aside reveal reveal-delay-1">
            <div className="price-display">
              <span className="price-from">A partir de</span>
            </div>
            <div className="price-display" style={{marginBottom: 8}}>
              <span className="price-num">R$ 10k</span>
              <span className="price-unit">— escopo definido juntos</span>
            </div>
            <h4>Projetos de R$ 10k a R$ 200k+ — sempre com o mesmo cuidado.</h4>
            <p>
              Do primeiro MVP a produtos complexos de múltiplas etapas. Independente do
              porte, o processo começa igual: uma conversa honesta sobre o que você precisa.
            </p>
            <a href={WAm} target="_blank" rel="noopener" className="btn btn-grad" style={{width: '100%', justifyContent: 'center'}}>
              <Im.whatsapp className="whatsapp-icon"/>
              {cta.label}
            </a>
            <div className="ecosystem">
              <div className="ecosystem-label">Produtos do ecossistema</div>
              {ECOSYSTEM.map((e, i) => (
                <div className="eco-item" key={i}>
                  <div>
                    <div className="eco-name">{e.name}</div>
                    <div className="eco-desc">{e.desc}</div>
                  </div>
                  <span className={`eco-status ${e.status}`}>
                    {e.status === 'live' ? 'No ar' : 'Em breve'}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

window.IndelevelMid = { Benefits, Stats, Testimonials, Offer };
