/* Indelevel Studios — Top sections: Nav, Hero, Trusted, Pain, Solution */

const { useState, useEffect } = React;
const I = window.IndelevelIcons;
const useReveal = window.useReveal;
const { WA_LINK, CTA_VARIANTS, PAIN_POINTS, CELLS } = window.IndelevelData;

function Nav({ scrolled }) {
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Indelevel Studios">
          <img src="assets/logo-header.svg" alt="Indelevel Studios"/>
        </a>
        <div className="nav-links">
          <a href="#solucao">Solução</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#trabalho">Trabalho</a>
          <a href="#oferta">Como entregamos</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener" className="nav-cta">
          <span className="nav-cta-text">Falar no WhatsApp</span>
          <I.arrow className="nav-cta-arrow"/>
          <I.whatsapp className="nav-cta-wa"/>
        </a>
      </div>
    </nav>
  );
}

function BeamsBackground({ intensity = 'medium' }) {
  const canvasRef = React.useRef(null);
  const beamsRef = React.useRef([]);
  const rafRef = React.useRef(0);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const opacityMap = { subtle: 0.55, medium: 0.8, strong: 1 };
    const MIN_BEAMS = 18;

    // Brand hues: green (150) → cyan (185) → blue (215) → indigo (240) → purple (275)
    function createBeam(w, h) {
      const angle = -32 + Math.random() * 10;
      return {
        x: Math.random() * w * 1.2 - w * 0.1,
        y: Math.random() * h * 1.8,
        width: 80 + Math.random() * 140,
        length: h * 2.5,
        angle,
        speed: 0.5 + Math.random() * 1.0,
        opacity: 0.28 + Math.random() * 0.22,
        hue: 150 + Math.random() * 130,
        sat: 82 + Math.random() * 12,
        light: 62 + Math.random() * 8,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.018 + Math.random() * 0.025,
      };
    }
    function resetBeam(beam, i, total) {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      const column = i % 3;
      const spacing = w / 3;
      beam.y = h + 100;
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.6;
      beam.width = 80 + Math.random() * 140;
      beam.speed = 0.4 + Math.random() * 0.5;
      beam.hue = 150 + (i * 130) / total + (Math.random() - 0.5) * 20;
      beam.opacity = 0.34 + Math.random() * 0.18;
      return beam;
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      const total = Math.round(MIN_BEAMS * 1.4);
      beamsRef.current = Array.from({ length: total }, () => createBeam(w, h));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    function drawBeam(beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);
      const pulsing = beam.opacity * (0.78 + Math.sin(beam.pulse) * 0.22) * opacityMap[intensity];
      const g = ctx.createLinearGradient(0, 0, 0, beam.length);
      const hsl = (a) => `hsla(${beam.hue.toFixed(0)}, ${beam.sat}%, ${beam.light}%, ${a})`;
      g.addColorStop(0, hsl(0));
      g.addColorStop(0.1, hsl(pulsing * 0.5));
      g.addColorStop(0.4, hsl(pulsing));
      g.addColorStop(0.6, hsl(pulsing));
      g.addColorStop(0.9, hsl(pulsing * 0.5));
      g.addColorStop(1, hsl(0));
      ctx.fillStyle = g;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function tick() {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.filter = 'blur(36px)';
      const total = beamsRef.current.length;
      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam, i, total);
        drawBeam(beam);
      });
      rafRef.current = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [intensity]);

  return (
    <div ref={containerRef} className="beams-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="beams-canvas"/>
      <div className="beams-veil"/>
    </div>
  );
}

function DottedSurface() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.THREE) return;
    const THREE = window.THREE;

    const SEPARATION = 130;
    const AMOUNTX = 50;
    const AMOUNTY = 60;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0e, 1200, 7000);

    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 10000);
    camera.position.set(0, 320, 1200);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Build particle grid with per-point colors lerped across brand palette
    const total = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(total * 3);
    const colors = new Float32Array(total * 3);

    const palette = [
      new THREE.Color(0x3DE598), // green
      new THREE.Color(0x3DC4CF), // cyan
      new THREE.Color(0x4DA8FF), // blue
      new THREE.Color(0x6B78FF), // indigo
      new THREE.Color(0x9D6BFF), // purple
    ];
    function paletteColor(t) {
      const seg = (palette.length - 1);
      const f = Math.max(0, Math.min(1, t)) * seg;
      const i = Math.floor(f);
      const a = palette[i];
      const b = palette[Math.min(seg, i + 1)];
      const k = f - i;
      return new THREE.Color(
        a.r + (b.r - a.r) * k,
        a.g + (b.g - a.g) * k,
        a.b + (b.b - a.b) * k,
      );
    }

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions[i * 3] = x;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = z;

        // Color: gradient across X (left = green, right = purple)
        const t = ix / (AMOUNTX - 1);
        const c = paletteColor(t);
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 10,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    let raf = 0;
    const posAttr = geometry.attributes.position;
    const posArr = posAttr.array;

    function animate() {
      raf = requestAnimationFrame(animate);
      let j = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = j * 3;
          posArr[idx + 1] =
            Math.sin((ix + count) * 0.32) * 60 +
            Math.sin((iy + count) * 0.45) * 60;
          j++;
        }
      }
      posAttr.needsUpdate = true;
      points.rotation.y = Math.sin(count * 0.04) * 0.04;
      renderer.render(scene, camera);
      count += 0.07;
    }

    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="dotted-bg" aria-hidden="true"/>;
}

function Hero({ ctaVariant, secondaryVariant }) {
  const cta = CTA_VARIANTS[ctaVariant];
  const sec = CTA_VARIANTS[secondaryVariant];

  return (
    <section className="hero" id="top">
      <DottedSurface/>
      <div className="dotted-veil"/>
      <div className="hero-grain"/>
      <div className="container hero-inner">
        <div className="reveal in eyebrow">
          <span className="dot"/>
          <span>Estúdio aberto para novos projetos</span>
        </div>
        <h1 className="reveal in reveal-delay-1">
          Não somos uma agência. <span className="italic">Somos especialistas que escolheram</span> construir <span className="underline-grad">legado</span>.
        </h1>
        <p className="sub reveal in reveal-delay-2">
          Um ecossistema de especialistas em produto, design, engenharia e IA —
          do primeiro rascunho ao lançamento. Sua ideia merece mais do que execução:
          merece direção.
        </p>
        <div className="cta-row reveal in reveal-delay-3">
          <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn-primary">
            <I.whatsapp className="whatsapp-icon"/>
            {cta.label}
          </a>
          <a href="#solucao" className="btn btn-ghost">
            Ver como trabalhamos
            <I.arrow style={{width: 14, height: 14}}/>
          </a>
        </div>
        <div className="hero-meta reveal in reveal-delay-4">
          {cta.sub}
        </div>
      </div>
    </section>
  );
}

function Trusted() {
  return (
    <div className="trusted">
      <div className="container">
        <div className="trusted-label">Confiança construída em projetos como</div>
        <div className="trusted-row">
          <div className="logo-text bold">Roca Brasil</div>
          <div className="logo-text">BCR.CX</div>
          <div className="logo-text bold">Vitacon</div>
          <div className="logo-text">Up for Service</div>
          <div className="logo-text bold">Agristato</div>
        </div>
      </div>
    </div>
  );
}

function Pain() {
  useReveal();
  return (
    <section className="section pain" id="problema">
      <div className="container">
        <div className="reveal">
          <div className="sec-eyebrow"><span className="num">01</span> · O problema</div>
          <h2 className="sec-title">
            Ter uma boa ideia é só o começo. <em>O que vem depois costuma ser frustrante.</em>
          </h2>
        </div>
        <ol className="pain-list">
          {PAIN_POINTS.map((p, i) => (
            <li className="pain-item reveal" style={{transitionDelay: `${i * 60}ms`}} key={i}>
              <div className="pain-num">— Cena {String(i + 1).padStart(2, '0')}</div>
              <div className="pain-text">{p}</div>
            </li>
          ))}
        </ol>
        <div className="pain-conclusion reveal">
          Isso não é azar. É o resultado de trabalhar com quem não tem senioridade
          suficiente pra guiar um produto do começo ao fim.
        </div>
      </div>
    </section>
  );
}

function Solution() {
  useReveal();
  return (
    <section className="section" id="solucao">
      <div className="container">
        <div className="reveal" style={{textAlign: 'center'}}>
          <div className="sec-eyebrow" style={{justifyContent: 'center'}}>
            <span className="num">02</span> · A Indelevel
          </div>
          <h2 className="sec-title center">
            Um ecossistema de células, <em style={{fontStyle: 'italic', color: 'var(--fg-dim)'}}>integradas desde a concepção.</em>
          </h2>
          <p className="sec-sub center">
            Não terceirizamos raciocínio. Cada decisão passa por profissionais com anos
            de experiência real em empresas que exigem padrão elevado.
          </p>
        </div>
        <div className="solution-grid">
          <div className="solution-prose reveal">
            <p>
              A Indelevel Studios nasceu de uma decisão consciente: reunir especialistas que
              trabalharam em grandes empresas e decidiram colocar essa experiência a serviço
              de projetos com propósito.
            </p>
            <p>
              Usamos IA com responsabilidade — como amplificador de capacidade, não como
              substituto de critério. O que nos diferencia é a combinação entre tecnologia
              de ponta e a experiência de quem já viu o que funciona e o que quebra em escala.
            </p>
            <p>
              O que construímos, dura. Indelével — permanente, resistente, feito pra não desaparecer.
            </p>
          </div>
          <div className="cells reveal reveal-delay-1">
            {CELLS.map((c, i) => {
              const IconC = I.cell[c.icon];
              return (
                <div className="cell" key={i}>
                  <div className="cell-icon"><IconC style={{width: 20, height: 20}}/></div>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

window.IndelevelTop = { Nav, Hero, Trusted, Pain, Solution };
