/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, Benefit, FaqItem, ProfessionalData } from './types.ts';

export const therapistData: ProfessionalData = {
  name: "Dra. Thelma dos Santos Soares",
  role: "Fisioterapeuta Responsável",
  crefito: "CREFITO-3 / 21.590-F",
  specialties: [
    "Reabilitação de Coluna Vertebral & Hérnia de Disco",
    "Fisioterapia traumato-ortopédica clássica e esportiva",
    "Tratamento de Articulações (Ombro, Joelho e Quadril)",
    "Avaliação Biomecânica & Postural Detalhada",
    "Exercícios Terapêuticos Personalizados & RPG"
  ],
  bio: "Com mais de 10 anos de sólida experiência clínica, a Dra. Thelma Soares desenvolveu uma metodologia focada em resultados rápidos e duradouros. No elegante consultório na Aclimação, cada paciente recebe atendimento 100% individual e exclusivo do início ao fim. Especializada no tratamento de dores na coluna, articulações e reabilitação musculoesquelética, ela dispensa abordagens genéricas ou puramente passivas, unindo avaliação profunda e exercícios ativos direcionados para devolver a sua liberdade de movimento sem remédios ou cirurgias.",
  experienceYears: 10
};

export const benefitsList: Benefit[] = [
  {
    id: "atend_individual",
    title: "Atendimento 100% Individual",
    description: "Sessões inteiramente exclusivas com a Dra. Thelma. Sem dividir a atenção com outros pacientes ou delegar exercícios.",
    icon: "UserCheck"
  },
  {
    id: "avaliacao_profunda",
    title: "Avaliação Detalhada de 1 Hora",
    description: "Mapeamento biomecânico completo para descobrir a causa raiz mecânica e postural das suas dores em vez de apenas tratar sintomas.",
    icon: "ClipboardCheck"
  },
  {
    id: "especialidade_coluna",
    title: "Foco em Coluna e Articulações",
    description: "Soluções precisas e resolutivas para hérnias de disco, lombalgias, dores severas de joelho, quadril, ombros e cervicalgias.",
    icon: "Activity"
  },
  {
    id: "exercicios_ativos",
    title: "Exercícios Personalizados",
    description: "Fisioterapia ativa moderna e inteligente. Prescrição exata de movimentos terapêuticos e fortalecimento, fugindo do 'choquinho padrão'.",
    icon: "Dumbbell"
  },
  {
    id: "consultorio_aclimacao",
    title: "Consultório na Aclimação",
    description: "Um espaço privativo, acolhedor e com excelente localização no coração do bairro, garantindo máximo conforto acústico e térmico.",
    icon: "Home"
  },
  {
    id: "experiencia_clinica",
    title: "Sólida Experiência Clínica",
    description: "Mais de 10 anos de dedicação exclusiva à reabilitação musculoesquelética complexa com foco total na resolução definitiva da queixa.",
    icon: "Award"
  }
];

export const servicesList: Service[] = [
  {
    id: "avaliacao-detalhada",
    title: "Avaliação Biomecânica Detalhada",
    category: "Diagnóstico",
    icon: "ClipboardCheck",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    description: "Sessão inicial individual de 1 hora dedicada a mapear minuciosamente suas disfunções posturais, testes de força muscular, amplitude articular e hábitos diários.",
    details: [
      "Mapeamento mecânico e postural detalhado de 60 minutos",
      "Identificação precisa da causa raiz mecânica e postural de dores complexas",
      "Testes específicos de mobilidade e estabilidade articular",
      "Entrega do plano de tratamento personalizado e estimativa de alta"
    ]
  },
  {
    id: "tratamento-coluna",
    title: "Reabilitação Especializada de Coluna",
    category: "Coluna Vertebral",
    icon: "FileHeart",
    image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=600&q=80",
    description: "Abordagem focada e sem pressa para hérnias de disco, lombalgias crônicas, cervicalgias e desvios, descomprimindo articulações dolorosas de forma segura.",
    details: [
      "Tratamento clínico avançado para Hérnia de Disco (coluna lombar e cervical)",
      "Combate de Lombalgia crônica que impede de sentar ou levantar com conforto",
      "Descompressão articular manual e técnicas posturais integradas",
      "Restauro da mobilidade vertebral e reabsorção inflamatória segura"
    ]
  },
  {
    id: "reabilitacao-musculoesqueletica",
    title: "Reabilitação Musculoesquelética & Artropatias",
    category: "Articulações",
    icon: "Orbit",
    image: "/src/assets/images/treatment_session_1781281850678.jpg",
    description: "Tratamento personalizado de disfunções e desgastes nas grandes articulações como ombro, joelho e quadril, focado na recuperação de autonomia.",
    details: [
      "Prevenção e tratamento de crises de Artrose de joelho e quadril",
      "Tratamento de tendinites, bursites e lesões ligamentares complexas",
      "Reabilitação assertiva para restabelecer força, apoio de carga e caminhar livre",
      "Protocolos específicos com foco no reparo de tecidos moles"
    ]
  },
  {
    id: "exercicios-terapeuticos",
    title: "Exercícios Terapêuticos & RPG",
    category: "Movimento Ativo",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    description: "Fisioterapia ativa! Prescrição exata e acompanhamento de exercícios dinâmicos medicinais para restabelecimento definitivo de funções musculares.",
    details: [
      "RPG (Reeducação Postural Global) aplicado à reabilitação ativa",
      "Exercícios controlados para fortalecimento muscular profundo do CORE",
      "Prescrição mecânica voltada para a independência funcional",
      "Ensino de exercícios preventivos específicos para realizar em casa"
    ]
  },
  {
    id: "pos-cirurgico",
    title: "Acompanhamento Pós-Cirúrgico",
    category: "Reabilitação",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    description: "Protocolos fisioterapêuticos dedicados pós-intervenção cirúrgica de grande e médio porte, regenerando tecidos de forma assistida e inteligente.",
    details: [
      "Pós-operatório de LCA (Joelho), Próteses de Quadril, Joelho e reparo de Ombro",
      "Gerenciamento de aderências do tecido cicatricial e edema pós-cirúrgico",
      "Exercícios passivos e ativos assistidos em progressão rigorosa",
      "Visita clínica dedicada para reaver força dinâmica no menor tempo seguro"
    ]
  }
];

export const statistics = [
  { value: 10, label: "Anos de Experiência Clínica", suffix: "+", subtext: "dedicação exclusiva ao paciente" },
  { value: 100, label: "Atendimento Individual", suffix: "%", subtext: "foco exclusivo em você" },
  { value: 8, label: "Especialidades em Coluna & Dor", suffix: "", subtext: "fisioterapia baseada em evidência" },
  { value: 1, label: "Paciente por Sessão", suffix: "", subtext: "atenção e segurança máximas" }
];

export const testimonialsList: Testimonial[] = [
  {
    id: 1,
    name: "Cláudio Meneghetti",
    age: 52,
    condition: "Hérnia de Disco Cervical",
    text: "Cheguei ao consultório da Dra. Thelma totalmente travado e com formigamento nos braços devido a uma hérnia. Em poucas sessões de terapia individual prescrevendo exercícios exatos e RPG, a dor sumiu. Hoje voltei a jogar tênis e não sinto mais nada! Um atendimento de altíssimo padrão, recomendo a todos o consultório dela na Aclimação.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Regina Helena Sampaio",
    age: 68,
    condition: "Artrose de Joelho",
    text: "Minha mobilidade estava muito reduzida e eu tinha medo de cair na rua. O atendimento 100% individual da Dra. Thelma foi um divisor de águas. Ela prescreveu exercícios terapêuticos focados nos meus limites. Hoje consigo caminhar feliz pelo Parque da Aclimação sem dores nos joelhos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Dr. Gustavo Ribeiro",
    age: 41,
    condition: "Dor Lombar e Crônica",
    text: "Sou médico e passo horas em pé operando. Minha dor lombar era insuportável no final do expediente. Encontrei na clínica da Dra. Thelma um tratamento sério, baseado em evidências profundas com testes físicos minuciosos. A avaliação de 1 hora foi fantástica. Hoje já não sinto dores.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Letícia Fernandes Machado",
    age: 29,
    condition: "Reabilitação de Joelho",
    text: "Operei o joelho de rompimento de ligamento e estava ansiosa com a fisioterapia. Ter o consultório na Aclimação facilitou muito. Mas o principal diferencial foi que a Dra. Thelma fica do lado 100% da sessão, corrigindo cada movimento do meu exercício terapêutico. Minha evolução foi incrível.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Antônio Carlos Macedo",
    age: 74,
    condition: "Limitação Musculoesquelética",
    text: "Seu tratamento personalizado restaurou minha estabilidade. Graças à cuidadosa fisioterapia ativa da Dra. Thelma, hoje ando com firmeza, minha flexibilidade melhorou e me sinto seguro para subir escadas. O consultório dela tem um cuidado humanizado ímpar.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  }
];

export const differentiatorsList = [
  {
    title: "Atendimento 100% Individual",
    description: "Cada sessão é exclusiva para você. A Dra. Thelma não divide horários e não atende várias salas simultaneamente. Você tem atenção integral o tempo todo.",
    icon: "HeartHandshake"
  },
  {
    title: "Consultório na Aclimação",
    description: "Localizado no coração da Aclimação. Um espaço privativo de alto padrão, livre de barulhos, extremamente confortável e planejado para o seu acolhimento.",
    icon: "Coffee"
  },
  {
    title: "Foco Clínico Especializado",
    description: "Especialidade centrada no diagnóstico mecânico e reabilitação da coluna, distúrbios articulares e reabilitação musculoesquelética complexa.",
    icon: "Activity"
  },
  {
    title: "Avaliação Altamente Detalhada",
    description: "Na consulta inicial de uma hora, realizamos um diagnóstico funcional profundo para descobrir por que a dor ocorre, avaliando todo o seu corpo de forma sistêmica.",
    icon: "ClipboardCheck"
  },
  {
    title: "Exercícios Terapêuticos Ativos",
    description: "Sem dependência exclusiva de processos puramente passivos (como os tradicionais 'choquinhos'). Prescrevemos movimentos direcionados que fortalecem e resolvem o problema de vez.",
    icon: "Dumbbell"
  },
  {
    title: "Ampla Experiência Clínica",
    description: "Mais de 10 anos dedicados à prática clínica real e atualização internacional constante, trazendo soluções consagradas pela ciência para o seu tratamento.",
    icon: "Trophy"
  }
];

export const faqList: FaqItem[] = [
  {
    id: 1,
    question: "Como funciona o atendimento individual?",
    answer: "No consultório da Dra. Thelma, você é o único foco. A sessão dura em média de 50 a 60 minutos e a fisioterapeuta acompanha cada exercício do seu lado. Não existem salas divididas, estagiários ou sessões paralelas. É um compromisso absoluto com a sua reabilitação."
  },
  {
    id: 2,
    question: "O foco inicial é sempre a avaliação biomecânica?",
    answer: "Sim! Antes de iniciar qualquer conduta terapêutica, realizamos uma Avaliação Inicial de 1 hora. É nela que mapamos suas dores na coluna ou articulações, amplitudes e deficiências posturais. Esse mapeamento detalhado orienta a elaboração exata de cada exercício terapêutico do seu tratamento."
  },
  {
    id: 3,
    question: "O consultório na Aclimação é de fácil acesso?",
    answer: "Sim, o consultório está estrategicamente situado em ponto nobre do bairro da Aclimação, em edifício seguro, extremamente privativo e com acessibilidade garantida. O ambiente foi planejado para resguardar sua privacidade térmica, acústica e emocional."
  },
  {
    id: 4,
    question: "Como é o tratamento voltado para Coluna e Articulações?",
    answer: "O foco é aliviar a compressão mecânica e remodelar os tecidos por meio de terapia manual especializada, RPG e exercícios terapêuticos específicos. O fortalecimento muscular profundo impede que dores de coluna (hérnias, lombalgia) ou articulações (joelho, ombro) persistam no cotidiano."
  },
  {
    id: 5,
    question: "O tratamento inclui exercícios ou fico apenas em aparelhos?",
    answer: "Privilegiamos a fisioterapia ativa. Aparelhos terapêuticos analgésicos só são utilizados se houver real e temporária indicação clínica para alívio de dor aguda. O coração do tratamento definitivo baseia-se em exercícios terapêuticos personalizados para restaurar de fato sua função."
  },
  {
    id: 6,
    question: "Como funciona para agendar uma avaliação inicial?",
    answer: "O agendamento é feito de forma simples e rápida clicando em nossos botões do WhatsApp. Você conversará diretamente conosco para escolher o melhor dia e horário na nossa clínica no bairro da Aclimação. Responderemos imediatamente!"
  }
];
