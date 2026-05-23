/* Indelevel Studios — Content (PT-BR, v5.1) */

const WA_LINK = "https://wa.me/5512982254772?text=Ol%C3%A1%2C+vim+pelo+site+da+Indelevel+Studios+e+gostaria+de+conversar+sobre+um+projeto";

const CTA_VARIANTS = {
  A: {
    label: "Conta sua ideia em 2 minutos",
    sub: "Manda uma mensagem no WhatsApp — respondemos rápido e sem compromisso."
  },
  B: {
    label: "Quero tirar minha ideia do papel",
    sub: "Uma conversa de 30 minutos pode definir os próximos anos do seu projeto."
  }
};

const PAIN_POINTS = [
  "Você já explicou sua ideia 10 vezes — e cada dev entendeu de um jeito diferente?",
  "Já recebeu uma entrega que não correspondia ao que foi combinado — e percebeu tarde demais?",
  "Já ficou sem saber se o que está sendo construído vai funcionar quando chegar no usuário real?",
  "Já perdeu tempo e dinheiro em projetos que não saíram do lugar?",
  "Já sentiu que precisava de um parceiro que pensa junto — não de um fornecedor que só executa o que você pede?"
];

const CELLS = [
  { name: "Produto", desc: "Estratégia, escopo e direção — antes de uma linha de código.", icon: "product" },
  { name: "Design", desc: "Experiência e interface que comunica, converte e respeita o usuário.", icon: "design" },
  { name: "Engenharia", desc: "Frontend, backend e mobile — feitos pra escalar e durar.", icon: "code" },
  { name: "Inteligência Artificial", desc: "Aplicada com critério, onde amplifica capacidade — não substitui julgamento.", icon: "ai" }
];

const BENEFITS = [
  {
    title: "Você para de adivinhar e começa a construir com direção.",
    desc: "Nossa equipe de produto mapeia o caminho antes de escrever uma linha de código.",
    size: "large"
  },
  {
    title: "Atenção sênior do início ao fim.",
    desc: "Sem delegar o que importa pra quem ainda está aprendendo.",
    size: "small"
  },
  {
    title: "Design que comunica e converte.",
    desc: "Pensado pra quem vai usar — não só pra parecer bonito.",
    size: "third"
  },
  {
    title: "IA com critério, não com pressa.",
    desc: "Onde acelera sem comprometer. Engenharia sólida onde é necessário.",
    size: "third"
  },
  {
    title: "Um parceiro que entende de negócio.",
    desc: "Não só de código. A equipe já esteve do lado de decisões difíceis em empresas reais.",
    size: "third"
  },
  {
    title: "Evite os 3 erros mais caros de quem constrói sem direção técnica.",
    desc: "Escopo mal definido, retrabalho tardio e lançamento sem validação. Aqui, esses pontos são resolvidos antes de virar problema.",
    size: "wide"
  }
];

const STATS = [
  { num: "30", plus: "+", label: "anos de experiência combinada em produto, design e engenharia" },
  { num: "R$ 200k", plus: "+", label: "gerados no primeiro mês após lançamento de produto" },
  { num: "3", plus: "", label: "clientes de referência: Roca Brasil, BCR.CX e Vitacon" },
  { num: "100", plus: "%", label: "atenção direta dos fundadores nos primeiros projetos" }
];

const TESTIMONIALS = [
  {
    feature: true,
    quote: "Estávamos quase desistindo — nada saía como queríamos e achávamos que o problema não tinha solução. A Lucy apareceu numa reunião, pediu pra compartilhar a tela, e nos mostrou tudo pronto. Ficamos todos boquiabertos. Depois daquilo, ficávamos felizes toda vez que ela aparecia nas reuniões.",
    name: "Thawane Iano",
    role: "Coordenadora de Operações",
    initials: "TI",
    pending: true
  },
  {
    quote: "Foi realmente muito especial — uma mudança de patamar nos nossos layouts e fronts. Posso dizer que temos uma BCR antes e depois.",
    name: "Bruno Rodrigues",
    role: "CEO, BCR.CX e 55PBX",
    initials: "BR"
  },
  {
    quote: "Evoluiu demais. A gente não sente mais falta de como era antes — e onde a Lucy colocou a mão é onde a gente sente mais diferença até hoje.",
    name: "Analista de Pós-Vendas",
    role: "Roca Brasil",
    initials: "RB",
    context: "Substituição de plataforma legada por solução de acompanhamento de serviços em campo, com aplicativo para técnicos."
  },
  {
    quote: "Que coisa mais linda. Ótimo material, formato, design. Parabéns ao time — excelente.",
    name: "Consultor Zendesk",
    role: "Zendesk",
    initials: "MB"
  }
];

const DELIVERABLES = [
  { label: "Diagnóstico e estratégia de produto", tag: "Discovery" },
  { label: "Design de produto e experiência do usuário", tag: "UX/UI" },
  { label: "Desenvolvimento frontend, backend e mobile", tag: "Eng" },
  { label: "Integração e aplicação de inteligência artificial", tag: "IA" },
  { label: "Acompanhamento próximo em cada etapa da entrega", tag: "Delivery" },
  { label: "Visão de negócio em cada decisão — não só execução", tag: "Estratégia" }
];

const ECOSYSTEM = [
  { name: "Agristato", desc: "Inteligência para o agronegócio", status: "live" },
  { name: "Up for Service", desc: "Marketplace de serviços", status: "soon" }
];

const OBJECTIONS = [
  {
    q: "Parece mais um grupo de amigos do que uma empresa séria.",
    a: "Somos sim um grupo de pessoas que se admiram e escolheram trabalhar juntas. Mas cada uma com anos de experiência em empresas que não aceitam amadorismo. Bruno Rodrigues, CEO da BCR.CX e Vitacon, disse que existe uma BCR antes e depois do nosso trabalho. A Roca Brasil substituiu uma plataforma consolidada pela solução que desenhamos — e segue usando até hoje."
  },
  {
    q: "Vocês fazem tudo com IA e entregam algo genérico?",
    a: "IA é uma ferramenta, não uma muleta. Usamos com critério, onde ela amplifica o que já sabemos fazer bem. A estratégia, o julgamento e a responsabilidade são sempre humanos — com anos de experiência real por trás de cada decisão."
  },
  {
    q: "Meu projeto é pequeno demais — ou grande demais — pra vocês?",
    a: "Trabalhamos com portes diferentes, do primeiro MVP a produtos complexos. O que define se faz sentido não é o tamanho — é a seriedade da intenção. E a conversa inicial existe exatamente pra descobrir isso juntos."
  },
  {
    q: "A conversa inicial é paga?",
    a: "Não. A primeira conversa é gratuita, sem compromisso e sem pitch. Você sai com clareza sobre o caminho — mesmo que a gente conclua que não somos o parceiro certo pra esse momento."
  }
];

const FOUNDERS = [
  { name: "Lucy", role: "Produto & Design", initials: "L" },
  { name: "Guilherme", role: "Engenharia", initials: "G" },
  { name: "Fabio", role: "IA & Estratégia", initials: "F" }
];

const FAQ = [
  {
    q: "Por onde começo se ainda tenho só uma ideia?",
    a: "Manda uma mensagem. Parte do nosso trabalho é ajudar a dar forma à ideia — o que construir, o que priorizar, o que pode esperar. Você não precisa chegar com tudo resolvido."
  },
  {
    q: "A conversa inicial é gratuita?",
    a: "Sim. Sem compromisso e sem pitch. Você sai da conversa com clareza — independente de avançarmos ou não."
  },
  {
    q: "Quanto tempo leva pra desenvolver um produto do zero?",
    a: "Projetos menores podem ser entregues em 6 a 12 semanas. Produtos mais complexos têm fases — e a primeira entrega costuma acontecer antes do esperado. Na primeira conversa já damos uma estimativa honesta."
  },
  {
    q: "Qual o investimento mínimo?",
    a: "Trabalhamos com projetos a partir de R$ 10k. O escopo é definido juntos — sem empurrar o que não faz sentido pro seu momento."
  },
  {
    q: "Vocês atendem só quem está começando do zero?",
    a: "Não. Atendemos desde founders com uma ideia até empresas que precisam evoluir produto existente, integrar IA ou reformular a experiência do usuário."
  },
  {
    q: "Como funciona o acompanhamento durante o projeto?",
    a: "Você tem acesso direto à equipe e visibilidade de cada etapa. Comunicação contínua faz parte do processo — nada de sumir e entregar surpresa no final."
  },
  {
    q: "Atendem empresas fora do Brasil?",
    a: "Sim. Parte da equipe tem experiência direta com empresas americanas e o ecossistema foi pensado com visão de internacionalização desde o início."
  },
  {
    q: "Como entro em contato?",
    a: "Direto pelo WhatsApp. Respondemos rápido e agendamos uma conversa sem compromisso."
  }
];

window.IndelevelData = {
  WA_LINK, CTA_VARIANTS, PAIN_POINTS, CELLS, BENEFITS, STATS,
  TESTIMONIALS, DELIVERABLES, ECOSYSTEM, OBJECTIONS, FOUNDERS, FAQ
};
