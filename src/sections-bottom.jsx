/* Indelevel Studios — Bottom sections: Objections, Guarantee, Urgency, FAQ, FinalCTA, Footer */

const { useState } = React;
const Ib = window.IndelevelIcons;
const useReveal = window.useReveal;
const { OBJECTIONS, FOUNDERS, FAQ: FAQS, WA_LINK: WAb } = window.IndelevelData;

function Objections() {
  useReveal();
  return (
    <section className="section">
      <div className="container">
        <div className="reveal">
          <div className="sec-eyebrow"><span className="num">07</span> · Honestidade</div>
          <h2 className="sec-title">
            As perguntas que você está <em>se fazendo agora.</em>
          </h2>
        </div>
        <div className="objections">
          {OBJECTIONS.map((o, i) => (
            <div className="obj reveal" style={{transitionDelay: `${i * 60}ms`}} key={i}>
              <p className="obj-q">"{o.q}"</p>
              <p className="obj-a">{o.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  useReveal();
  return (
    <section className="section-sm">
      <div className="container-narrow">
        <div className="guarantee reveal">
          <div className="guarantee-seal">
            <Ib.shield style={{width: 38, height: 38, color: 'var(--fg)'}}/>
          </div>
          <h2>Não trabalhamos com promessa vaga.</h2>
          <p>
            Antes de qualquer compromisso, você tem uma conversa franca com a equipe.
            Se não fizer sentido avançar, a gente te diz — e aponta o caminho certo,
            mesmo que não seja com a gente.
          </p>
          <p>
            Quando avançamos, você acompanha cada etapa com visibilidade total.
            Sem sumir. Sem surpresa na entrega.
          </p>
          <p className="closer">
            Nosso compromisso é com o resultado do seu projeto —<br/>
            não com fechar um contrato.
          </p>
        </div>
      </div>
    </section>
  );
}

function Urgency() {
  useReveal();
  return (
    <section className="section">
      <div className="container">
        <div className="urgency">
          <div className="reveal">
            <div className="sec-eyebrow"><span className="num">08</span> · Por que agora</div>
            <h2 className="sec-title">
              A Indelevel Studios está abrindo <em>suas portas agora.</em>
            </h2>
            <p className="sec-sub">
              Os primeiros projetos têm atenção direta de Lucy, Guilherme e Fabio —
              os fundadores — sem camadas de intermediário entre você e quem realmente
              decide e entrega.
            </p>
            <p className="sec-sub" style={{marginTop: 16}}>
              À medida que o ecossistema cresce, isso naturalmente muda. Se você quer
              construir com quem fundou a empresa, esse é o momento.
            </p>
            <div className="slots">
              <span className="pulse-dot"/>
              <span><strong style={{color: 'var(--fg)'}}>2 vagas abertas</strong> para novos projetos este mês</span>
            </div>
          </div>
          <div className="founders reveal reveal-delay-1">
            {FOUNDERS.map((f, i) => (
              <div className="founder" key={i}>
                <div className="founder-avatar">{f.initials}</div>
                <div className="founder-name">{f.name}</div>
                <div className="founder-role">{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, idx }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="icon"><Ib.plus style={{width: 12, height: 12}}/></span>
      </button>
      <div className="faq-a">{a}</div>
    </div>
  );
}

function Faq() {
  useReveal();
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="reveal" style={{textAlign: 'center'}}>
          <div className="sec-eyebrow" style={{justifyContent: 'center'}}>
            <span className="num">09</span> · Perguntas frequentes
          </div>
          <h2 className="sec-title center">
            Tudo o que você precisa saber <em>antes da primeira conversa.</em>
          </h2>
        </div>
        <div className="faq-list reveal" style={{maxWidth: 860, margin: '56px auto 0'}}>
          {FAQS.map((f, i) => <FaqItem key={i} idx={i} {...f}/>)}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ ctaVariant }) {
  useReveal();
  const cta = window.IndelevelData.CTA_VARIANTS[ctaVariant];
  return (
    <section className="final-cta">
      <div className="final-glow"/>
      <div className="container-narrow final-inner">
        <div className="reveal">
          <p className="imagine">
            Imagine daqui a alguns meses explicando seu produto pra um cliente real —
            com algo funcionando, pensado nos mínimos detalhes, construído do jeito
            certo desde o início.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <h2>
            Vamos construir algo que <em>dura</em>?
          </h2>
        </div>
        <div className="reveal reveal-delay-2 cta-row" style={{marginTop: 16}}>
          <a href={WAb} target="_blank" rel="noopener" className="btn btn-primary">
            <Ib.whatsapp className="whatsapp-icon"/>
            {cta.label}
          </a>
          <a href="#problema" className="btn btn-ghost">
            Reler a proposta
          </a>
        </div>
        <div className="reveal reveal-delay-3 tagline">
          O que construímos, dura. Indelével.
        </div>
      </div>
    </section>
  );
}

function PS() {
  useReveal();
  return (
    <div className="ps reveal">
      <div className="ps-label">PS · Da equipe fundadora</div>
      <p>
        Os primeiros projetos da Indelevel Studios têm atenção direta dos fundadores.
        Se você chegou até aqui, provavelmente já sabe o que está buscando.
        <br/><br/>
        Manda uma mensagem. A conversa não compromete nada — mas pode mudar muito.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="assets/logo-header.svg" alt="Indelevel Studios"/>
            <p>
              Estúdio de produto, design, engenharia e IA. Construímos com cuidado de
              especialista — pra durar.
            </p>
          </div>
          <div className="footer-col">
            <h5>Estúdio</h5>
            <a href="#solucao">Solução</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#trabalho">Trabalho</a>
            <a href="#oferta">Como entregamos</a>
          </div>
          <div className="footer-col">
            <h5>Contato</h5>
            <a href={WAb} target="_blank" rel="noopener">WhatsApp</a>
            <a href="mailto:ola@indelevel.studio">ola@indelevel.studio</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Indelevel Studios · São Paulo, Brasil</div>
          <div>O que construímos, dura. Indelével.</div>
        </div>
      </div>
    </footer>
  );
}

function WaFloat() {
  return (
    <a href={WAb} target="_blank" rel="noopener" className="wa-float" aria-label="Falar no WhatsApp">
      <span className="wa-tooltip">Conta sua ideia</span>
      <Ib.whatsapp style={{width: 26, height: 26}}/>
    </a>
  );
}

window.IndelevelBot = { Objections, Guarantee, Urgency, Faq, FinalCta, PS, Footer, WaFloat };
