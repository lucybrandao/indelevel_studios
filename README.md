# Indelevel Studios — Landing Page

Site institucional da Indelevel Studios. Construído em HTML puro com React via CDN — sem build, sem bundler, zero dependências locais.

## Rodar localmente

```bash
python3 -m http.server 3000
```

Abra [http://localhost:3000](http://localhost:3000). Qualquer servidor HTTP estático funciona — a escolha é indiferente.

## Estrutura

```
├── index.html              # Entry point — carrega todas as dependências via CDN
├── assets/                 # Logos SVG (dark, light, header, large)
└── src/
    ├── data.jsx            # Todo o conteúdo editável (textos, CTAs, depoimentos, FAQ…)
    ├── app.jsx             # Componente raiz + configuração de tweaks
    ├── sections-top.jsx    # Nav, Hero, Trusted, Pain, Solution
    ├── sections-mid.jsx    # Benefits, Stats, Testimonials, Offer
    ├── sections-bottom.jsx # Objections, Guarantee, Urgency, FAQ, FinalCta, Footer, WaFloat
    ├── icons.jsx           # Ícones SVG inline
    ├── tweaks-panel.jsx    # Painel de ajuste ao vivo (oculto por padrão)
    └── styles.css          # Estilos globais
```

## Editar conteúdo

Todo texto, dado e link fica em [src/data.jsx](src/data.jsx). As principais variáveis:

| Variável | O que controla |
|---|---|
| `WA_LINK` | Link do WhatsApp com mensagem pré-preenchida |
| `CTA_VARIANTS` | Variantes A/B do botão principal |
| `PAIN_POINTS` | Perguntas da seção de dores |
| `CELLS` | Áreas de atuação (Produto, Design, Eng, IA) |
| `BENEFITS` | Cards de benefícios |
| `STATS` | Números de prova social |
| `TESTIMONIALS` | Depoimentos de clientes |
| `DELIVERABLES` | Lista de entregáveis |
| `OBJECTIONS` | Objeções e respostas |
| `FAQ` | Perguntas frequentes |
| `FOUNDERS` | Equipe fundadora |

## Painel de tweaks

O painel de ajuste ao vivo permite mudar CTA variant, modo de accent e densidade sem mexer no código. Para ativá-lo, envie a mensagem `__activate_edit_mode` via `window.postMessage` no console do browser:

```js
window.postMessage({ type: '__activate_edit_mode' }, '*')
```

As opções disponíveis estão em `TWEAK_DEFAULTS` no topo de [src/app.jsx](src/app.jsx).

## Dependências (CDN)

Carregadas diretamente no `index.html` — nada precisa ser instalado:

- [React 18](https://react.dev) + ReactDOM
- [Babel Standalone](https://babeljs.io/docs/babel-standalone) — transpila JSX no browser
- [Three.js 0.160](https://threejs.org) — animação de fundo do hero

## Deploy

Como é HTML estático, funciona em qualquer CDN ou host estático:

- **Vercel / Netlify:** arraste a pasta ou conecte o repositório, sem configuração de build
- **GitHub Pages:** habilite Pages apontando para a raiz do repositório (`/`)
- **Servidor próprio:** sirva a pasta com nginx/caddy normalmente
