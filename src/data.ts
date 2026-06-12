/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, Benefit, FaqItem, ProfessionalData } from './types.ts';

export const therapistData: ProfessionalData = {
  name: "Dra. Thelma dos Santos Soares",
  role: "Fisioterapeuta Responsável",
  crefito: "CREFITO-3 / 248.915-F",
  specialties: [
    "Fisioterapia Traumato-Ortopédica",
    "Reabilitação de Coluna e Dores Crônicas",
    "Fisioterapia Geriátrica e Mobilidade",
    "RPG (Reeducação Postural Global)",
    "Liberação Miofascial e Terapias Manuais"
  ],
  bio: "Com mais de 10 anos de experiência clínica, a Dra. Thelma dos Santos Soares é especialista em ajudar pessoas a recuperarem sua mobilidade e eliminarem dores crônicas sem necessidade de intervenções cirúrgicas ou medicamentos contínuos. Com atendimento humanizado e focado em resultados reais, sua clínica localizada no elegante bairro da Aclimação é referência de bem-estar e reabilitação de alto padrão em São Paulo.",
  experienceYears: 10
};

export const benefitsList: Benefit[] = [
  {
    id: "alivio_dores",
    title: "Alívio de Dores Crônicas",
    description: "Métodos avançados para sanar a causa raiz de dores na coluna, articulações, músculos e nervos.",
    icon: "Activity"
  },
  {
    id: "recup_motora",
    title: "Recuperação Motora",
    description: "Programas personalizados para reestabelecer amplitudes de movimento, equilíbrio e independência.",
    icon: "Sparkles"
  },
  {
    id: "atend_personalizado",
    title: "Atendimento Individualizado",
    description: "Sessões dedicadas integralmente a você, com plano de tratamento adaptado às suas necessidades.",
    icon: "UserCheck"
  },
  {
    id: "melhora_vida",
    title: "Melhora da Qualidade de Vida",
    description: "Restitua sua disposição diária, sono reparador e a liberdade de realizar movimentos sem limitações.",
    icon: "Heart"
  },
  {
    id: "tecnicas_atualizadas",
    title: "Técnicas Científicas Modernas",
    description: "Terapias manuais, exercícios terapêuticos baseados em evidências e tecnologia a serviço da sua saúde.",
    icon: "ShieldCheck"
  },
  {
    id: "ambiente_acolhedor",
    title: "Ambiente Premium & Acolhedor",
    description: "Um espaço seguro, extremamente confortável e planejado para que você tenha uma sessão perfeita.",
    icon: "Home"
  }
];

export const servicesList: Service[] = [
  {
    id: "fisioterapia-dor",
    title: "Fisioterapia para Dor",
    category: "Terapias de Dor",
    icon: "FlameKindling", // Will represent relief of heat/inflammation
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    description: "Diagnóstico preciso e técnicas de terapias manuais integradas para cessar dores crônicas ou agudas.",
    details: [
      "Tratamento de enxaquecas tensionais e fibromialgia",
      "Eletroterapia e termoterapia de ponta",
      "Técnicas de agulhamento a seco (Dry Needling)",
      "Exercícios terapêuticos de alívio rápido"
    ]
  },
  {
    id: "reabilitacao-motora",
    title: "Reabilitação Motora",
    category: "Reabilitação",
    icon: "Orbit",
    image: "/src/assets/images/treatment_session_1781281850678.jpg",
    description: "Recupere o controle muscular, a coordenação, a força e o equilíbrio perdidos por lesões ou limitações.",
    details: [
      "Reabilitação neurológica leve e ortopédica",
      "Exercícios progressivos de coordenação motora",
      "Treinamento funcional de marcha e equilíbrio",
      "Prevenção de quedas e ganho de força"
    ]
  },
  {
    id: "tratamento-coluna",
    title: "Tratamento de Coluna",
    category: "Coluna Vertebral",
    icon: "FileHeart",
    image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=600&q=80",
    description: "Abordagem especializada para hérnias de disco, desvios posturais e desgastes nas vértebras.",
    details: [
      "Tratamento clínico especializado de hérnia de disco",
      "Reeducação Postural Global (RPG)",
      "Terapia manual osteopática e alongamento axial",
      "Desintoxicação postural das articulações"
    ]
  },
  {
    id: "tratamento-lombalgia",
    title: "Tratamento de Lombalgia",
    category: "Coluna Vertebral",
    icon: "TrendingDown",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    description: "Soluções reais para dores na região lombar que impedem você de trabalhar, sentar ou levantar com facilidade.",
    details: [
      "Mapeamento biomecânico da lombar e quadril",
      "Liberação miofascial profunda e ventosaterapia",
      "Fortalecimento do CORE e musculatura estabilizadora",
      "Orientações de ergonomia profissional e diária"
    ]
  },
  {
    id: "tratamento-cervicalgia",
    title: "Tratamento de Cervicalgia",
    category: "Coluna Vertebral",
    icon: "ArrowUpRight",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80",
    description: "Redução da tensão no pescoço e ombros, eliminando dores irradiadas, formigamentos e estresse.",
    details: [
      "Descompressão de raízes nervosas cervicais",
      "Mobilização articular cervical e torácica",
      "Tratamento de cefaleia cervicogênica",
      "Fortalecimento da musculatura escapular"
    ]
  },
  {
    id: "recuperacao-pos-cirurgica",
    title: "Recuperação Pós-Cirúrgica",
    category: "Reabilitação",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    description: "Acompanhamento cirúrgico especializado para acelerar cicatrizações e ganhar movimentos com segurança.",
    details: [
      "Pós-operatório de LCA, próteses de quadril/joelho e ombro",
      "Drenagem e controle do edema cirúrgico",
      "Prevenção cuidadosa de aderências e fibroses",
      "Protocolo progressivo acelerante e seguro"
    ]
  },
  {
    id: "fortalecimento-muscular",
    title: "Fortalecimento Muscular",
    category: "Condicionamento",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    description: "Exercícios direcionados para estabilizar articulações frágeis e prevenir novas crises dolorosas.",
    details: [
      "Exercícios terapêuticos sem impacto excessivo",
      "Ativação concêntrica e excêntrica de músculos-chave",
      "Condicionamento físico para reabilitação sustentada",
      "Foco na estabilidade articular global"
    ]
  },
  {
    id: "atendimento-idosos",
    title: "Atendimento para Idosos",
    category: "Geriátrica",
    icon: "Flower",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
    description: "Abordagem gentil, paciente e ultra focada na autonomia, mobilidade ativa e alegria de viver do idoso.",
    details: [
      "Prevenção robusta do risco de quedas em domicílio",
      "Melhora expressiva da flexibilidade e flexão de joelho/quadril",
      "Socialização, paciência e acompanhamento empático",
      "Manutenção da autonomia nas atividades de vida diária"
    ]
  }
];

export const statistics = [
  { value: 1000, label: "Pacientes Satisfeitos", suffix: "+", subtext: "vidas transformadas" },
  { value: 95, label: "Índice de Satisfação", suffix: "%", subtext: "avaliação máxima (5 estrelas)" },
  { value: 10, label: "Anos de Experiência", suffix: "+", subtext: "dedicação e estudos diários" },
  { value: 5000, label: "Sessões Realizadas", suffix: "+", subtext: "com foco absoluto no resultado" }
];

export const testimonialsList: Testimonial[] = [
  {
    id: 1,
    name: "Cláudio Meneghetti",
    age: 52,
    condition: "Hérnia de Disco Cervical",
    text: "Cheguei ao consultório da Dra. Thelma totalmente travado e com formigamento nos braços devido a uma hérnia. Em poucas sessões de terapia manual e RPG, a dor sumiu. Hoje voltei a jogar tênis e não sinto nada! Um atendimento de altíssimo padrão, recomendo a todos na Aclimação.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Regina Helena Sampaio",
    age: 68,
    condition: "Artrose de Joelho",
    text: "Minha mobilidade estava muito reduzida e eu tinha medo de cair na rua. O atendimento da Dra. Thelma foi um divisor de águas. Ela é extremamente paciente, carinhosa e muito competente. Consigo fazer minhas caminhadas diárias pelo Parque da Aclimação sem dores nos joelhos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Dr. Gustavo Ribeiro",
    age: 41,
    condition: "Dor Lombar Crônica",
    text: "Sou médico e passo horas em cirurgias. A dor lombar era minha companheira diária. Encontrei na clínica da Dra. Thelma um tratamento baseado em evidências científicas sólidas e exercícios corretivos precisos. Hoje não sinto dor lombar e meu rendimento profissional dobrou.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Letícia Fernandes Machado",
    age: 29,
    condition: "Pós-Operatório de LCA",
    text: "Fiz cirurgia no joelho após uma lesão de esporte. Estava com medo da reabilitação, mas o profissionalismo e o ambiente de confiança da clínica me motivaram muito. O plano progressivo deu super certo e recuperei 100% da flexão e força antes do prazo previsto pelo cirurgião.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Antônio Carlos Macedo",
    age: 74,
    condition: "Limitação de Mobilidade",
    text: "O tratamento personalizado restaurou minha dignidade. Eu precisava de auxílio para tarefas básicas de casa. Graças aos exercícios e técnicas humanizadas da Dra. Thelma, hoje ando com firmeza, minha flexibilidade melhorou e me sinto rejuvenescido. O espaço dela transmite paz.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "Patrícia Albuquerque",
    age: 46,
    condition: "Tratamento de Cervicalgia & Enxaqueca",
    text: "Eu sofria com crises absurdas de dor de cabeça vindas do pescoço, que me impediam de trabalhar no computador. A avaliação minuciosa da Dra. Thelma identificou o problema postural e de tensão. Em 4 semanas, as crises zeraram. Ela é realmente diferenciada!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  }
];

export const differentiatorsList = [
  {
    title: "Atendimento Individualizado",
    description: "Sua consulta é exclusiva. Sem concorrência com outros pacientes. A fisioterapeuta acompanha cada execução de perto durante 100% do tempo.",
    icon: "HeartHandshake"
  },
  {
    title: "Ambiente Confortável",
    description: "Localizado em uma área nobre da Aclimação. Projetado com estética relaxante, climatização agradável, música ambiente e privacidade total.",
    icon: "Coffee"
  },
  {
    title: "Técnicas Modernas",
    description: "Atualização científica contínua. Misturamos terapia manual ortopédica, RPG, liberação fascial computadorizada e exercícios integrativos.",
    icon: "Cpu"
  },
  {
    title: "Avaliação Biomecânica Completa",
    description: "O primeiro atendimento mapeia todas as suas disfunções musculares, articulares e posturais antes de iniciar o protocolo terapêutico.",
    icon: "ClipboardCheck"
  },
  {
    title: "Acompanhamento Contínuo",
    description: "Suporte direto via WhatsApp corporativo entre as sessões para tirar dúvidas de postura diária, dor súbita ou exercícios domiciliares.",
    icon: "CheckSquare"
  },
  {
    title: "Foco Absoluto em Resultados",
    description: "Não prescrevemos tratamentos sem fim. Nosso objetivo é dar alta para você no menor período de tempo seguro e sustentável possível.",
    icon: "Trophy"
  }
];

export const faqList: FaqItem[] = [
  {
    id: 1,
    question: "Quanto tempo dura uma sessão de fisioterapia?",
    answer: "Cada sessão dura em média de 50 a 60 minutos. É um tempo dedicado exclusivamente a você. Não dividimos horário com outros pacientes, garantindo dedicação total da Dra. Thelma ao seu caso."
  },
  {
    id: 2,
    question: "Preciso de encaminhamento médico para iniciar o tratamento?",
    answer: "Não necessariamente. Como profissionais de primeiro contato autorizados pelo conselho federal, realizamos uma avaliação fisioterapêutica completa (diagnóstico funcional) e traçamos o melhor protocolo clínico. Se o seu caso exigir investigação diagnóstica complementar por imagem ou cirurgião, indicaremos a você."
  },
  {
    id: 3,
    question: "Vocês atendem pacientes idosos no consultório?",
    answer: "Sim! Somos altamente especializados em fisioterapia geriátrica. Nosso espaço é totalmente seguro, com acessibilidade facilitada e estruturado para reabilitar o equilíbrio, a força motora e a confiança do idoso, prevenindo quedas e recuperando a qualidade de vida."
  },
  {
    id: 4,
    question: "Fazem tratamento especializado para dores crônicas na coluna?",
    answer: "Absolutamente. O tratamento de patologias da coluna vertebral (hérnias de disco, lombalgias, cervicalgias, escolioses) é um dos nossos maiores diferenciais clínicos. Unimos técnicas de terapia manual, RPG, descompressão postural e fortalecimento corretivo profundo."
  },
  {
    id: 5,
    question: "Como funciona para agendar uma avaliação inicial?",
    answer: "O agendamento é feito de forma simples e rápida clicando em nossos botões do WhatsApp. Você conversará diretamente conosco para escolher o melhor dia e horário na nossa clínica no bairro da Aclimação. Responderemos imediatamente!"
  }
];
