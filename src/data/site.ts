import { whatsappUrl } from "@/lib/whatsapp";

export type ConfirmationState = "confirmed" | "needs-confirmation";

export type ConfirmableValue = {
  value: string;
  state: ConfirmationState;
  note?: string;
};

export type ClassGroup = {
  id: string;
  name: string;
  audience: string;
  guidance: ConfirmableValue;
  description: string;
  imageLabel: string;
};

export type Sensei = {
  name: string;
  grade: ConfirmableValue;
  role: string;
  tier: "chief" | "lead" | "support";
  summary: string;
  image?: string;
  imagePosition?: string;
};

export type ScheduleDayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

export type ScheduleEntry = {
  className: "Adulto" | "Infantil";
  label: string;
  tone: "all" | "mixed" | "advanced" | "children";
  instructor?: string;
};

export type ScheduleRow = {
  period: string;
  time: string;
  startTime: string;
  endTime: string;
  monday?: ScheduleEntry;
  tuesday?: ScheduleEntry;
  wednesday?: ScheduleEntry;
  thursday?: ScheduleEntry;
  friday?: ScheduleEntry;
};

export type ScheduleSession = {
  day: "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta";
  label: string;
  weekday: number;
  startTime: string;
  endTime: string;
  className: "Adulto" | "Infantil";
  level: string;
  tone: ScheduleEntry["tone"];
  period: string;
  instructor?: string;
};

export type ContentPost = {
  slug: string;
  category: "ARTIGO" | "EVENTO" | "ACERVO" | "VIDEO";
  date?: string;
  title: string;
  summary: string;
  imageLabel: string;
  image?: string;
  imagePosition?: string;
  href: string;
};

export type ContentArticleSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: boolean;
};

export type ContentArticle = {
  slug: string;
  category: ContentPost["category"];
  title: string;
  description: string;
  heroImage?: string;
  sourceLabel: string;
  sourceUrl: string;
  sections: ContentArticleSection[];
};

export type InfoItem = {
  label: string;
  value: string;
  state?: ConfirmationState;
};

export type GoogleReview = {
  author: string;
  text: string;
};

const apixBase =
  "https://yata-apix-cd803d7f-15c8-4a01-a114-f0dc874154ae.s3-object.locaweb.com.br";
const yataBase = "https://yata.s3-object.locaweb.com.br";

export function apix(path: string) {
  return `${apixBase}/${path}`;
}

export function yata(path: string) {
  return `${yataBase}/${path}`;
}

export const siteInfo = {
  name: "Mushinkan",
  fullName: "Mushinkan Karate-Do",
  locationShort: "Vila Mariana, São Paulo",
  address: "Rua Domingos de Moraes, 2216",
  district: "Vila Mariana",
  city: "São Paulo, SP",
  whatsappDisplay: "(11) 99916-5718",
  whatsappExperimental: whatsappUrl(
    "Olá! Quero agendar uma aula experimental no Mushinkan."
  ),
  whatsappClass: whatsappUrl(
    "Olá! Quero saber qual turma do Mushinkan é mais indicada para mim."
  ),
  whatsappLocation: whatsappUrl(
    "Olá! Quero confirmar como chegar ao Dojo Mushinkan."
  ),
  whatsappEvent: whatsappUrl(
    "Olá! Quero tirar dúvidas sobre o exame de faixa do Mushinkan."
  ),
  googleRating: "5,0",
  googleReviewCount: 87,
  googleReviewsUrl:
    "https://www.google.com/search?q=Mushinkan+Karate+Shotokan+Vila+Mariana+avalia%C3%A7%C3%B5es",
  social: [
    {
      label: "Instagram",
      href: "https://instagram.com/mushinkan_karate"
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/mushinkankarate/"
    },
    {
      label: "YouTube",
      href: "https://youtube.com/channel/UCau-V9XsGZMcf1536d9-lsw"
    }
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.24336115144!2d-46.63907738502162!3d-23.595603584665863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2e0afa2fed%3A0xac251fbc2ec2c8ca!2sR.+Domingos+de+Morais%2C+2216+-+Vila+Mariana%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1447090302809",
  mapsRouteUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rua%20Domingos%20de%20Moraes%2C%202216%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP",
  transitNote: "A cerca de 5 minutos a pé da estação Santa Cruz do Metrô."
};

/* Curated real reviews. Live Google integration needs the Places API (API
   key + billing) and a server/build-time fetch; when that lands, replace
   this array, googleRating and googleReviewCount with the fetched values —
   the Home section renders whatever is here. */
export const googleReviews: GoogleReview[] = [
  {
    author: "Ada F.",
    text: "Professores e colegas acolhedores, ótimo ambiente."
  },
  {
    author: "Giuliano Banderali",
    text: "Disponibilidade de vários horários para treino e ótima localização."
  },
  {
    author: "Gabriel de França",
    text: "Excelentes treinos, bom espaço, turmas receptivas e bom custo benefício"
  }
];

export const navItems = [
  {
    label: "O Dojo",
    href: "/o-dojo",
    sections: [
      {
        label: "Tradição viva",
        href: "/o-dojo#tradicao",
        description:
          "Conheça o shomen, o Dojo Kun e os princípios presentes em cada aula."
      },
      {
        label: "História",
        href: "/o-dojo#historia",
        description:
          "A trajetória do Mushinkan e do Sensei Carlos Rocha desde os anos 1970."
      },
      {
        label: "Como treinamos",
        href: "/o-dojo#treino",
        description:
          "Veja como Kihon, Kata e Kumite convivem no treino diário."
      },
      {
        label: "Instrutores",
        href: "/o-dojo#instrutores",
        description:
          "Conheça os senseis e suas trajetórias no Karate Shotokan."
      }
    ]
  },
  {
    label: "Aulas e Horários",
    href: "/aulas-e-horarios",
    sections: [
      {
        label: "Grade semanal",
        href: "/aulas-e-horarios#horarios",
        description:
          "Consulte dias, períodos e níveis de cada horário."
      },
      {
        label: "Turmas",
        href: "/aulas-e-horarios#turmas",
        description: "Entenda as opções de treino para crianças e adultos."
      },
      {
        label: "Localização",
        href: "/aulas-e-horarios#localizacao",
        description:
          "Veja o endereço, o mapa e como chegar ao dojo na Vila Mariana."
      },
      {
        label: "Primeira aula",
        href: "/aulas-e-horarios#primeira-aula",
        description:
          "Saiba como escolher o horário e participar do primeiro treino."
      }
    ]
  },
  {
    label: "Karate Shotokan",
    href: "/karate-shotokan",
    sections: [
      {
        label: "Origens",
        href: "/karate-shotokan#origens",
        description:
          "Conheça o desenvolvimento do Karate em Okinawa e sua chegada ao Japão."
      },
      {
        label: "Gichin Funakoshi",
        href: "/karate-shotokan#funakoshi",
        description:
          "A trajetória do mestre que desenvolveu e difundiu o Shotokan moderno."
      },
      {
        label: "Como se treina",
        href: "/karate-shotokan#metodo",
        description:
          "Entenda o papel de Kihon, Kata e Kumite na prática tradicional."
      },
      {
        label: "Benefícios",
        href: "/karate-shotokan#beneficios",
        description:
          "Veja o que a prática desenvolve no corpo, na mente e no convívio."
      }
    ]
  },
  {
    label: "Conteúdos",
    href: "/conteudos",
    sections: [
      {
        label: "Artigos",
        href: "/conteudos#artigos",
        description:
          "Leia sobre história, filosofia e prática do Karate Shotokan."
      },
      {
        label: "Niju Kun",
        href: "/conteudos/niju-kun",
        description:
          "Conheça os vinte preceitos de Gichin Funakoshi."
      },
      {
        label: "Benefícios do Karate",
        href: "/conteudos/beneficios-do-karate",
        description:
          "Entenda o que a prática desenvolve no corpo, na mente e no convívio."
      }
    ]
  },
  {
    label: "Contato",
    href: "/contato",
    sections: [
      {
        label: "WhatsApp",
        href: "/contato#whatsapp",
        description:
          "Agende uma aula experimental ou tire dúvidas diretamente com o dojo."
      },
      {
        label: "Informações práticas",
        href: "/contato#informacoes",
        description:
          "Confira endereço, horários gerais e os canais oficiais do Mushinkan."
      },
      {
        label: "Mapa e rota",
        href: "/contato#mapa",
        description:
          "Localize o dojo e planeje sua chegada à Vila Mariana."
      }
    ]
  }
];

export const classGroups: ClassGroup[] = [
  {
    id: "infantil",
    name: "Infantil",
    audience: "Crianças",
    guidance: {
      value: "Cada criança é avaliada individualmente pelos senseis.",
      state: "confirmed"
    },
    description:
      "Disciplina, respeito, concentração e confiança desde os primeiros passos.",
    imageLabel: "Turma infantil"
  },
  {
    id: "adulto",
    name: "Adulto",
    audience: "Todos os níveis",
    guidance: {
      value: "Do iniciante ao avançado",
      state: "confirmed"
    },
    description:
      "Técnica, condicionamento físico, disciplina mental e aprofundamento no Karate Shotokan.",
    imageLabel: "Turma adulto"
  }
];

export const scheduleRows: ScheduleRow[] = [
  {
    period: "Manhã",
    time: "07:00 às 08:00",
    startTime: "07:00",
    endTime: "08:00",
    monday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    tuesday: {
      className: "Adulto",
      label: "Intermediário / Avançado",
      tone: "mixed"
    },
    wednesday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    thursday: {
      className: "Adulto",
      label: "Intermediário / Avançado",
      tone: "mixed"
    },
    friday: { className: "Adulto", label: "Avançado", tone: "advanced" }
  },
  {
    period: "Manhã",
    time: "09:30 às 10:30",
    startTime: "09:30",
    endTime: "10:30",
    tuesday: {
      className: "Infantil",
      label: "Todos os níveis",
      tone: "children"
    },
    thursday: {
      className: "Infantil",
      label: "Todos os níveis",
      tone: "children"
    }
  },
  {
    period: "Manhã",
    time: "10:30 às 11:30",
    startTime: "10:30",
    endTime: "11:30",
    tuesday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    thursday: { className: "Adulto", label: "Todos os Níveis", tone: "all" }
  },
  {
    period: "Tarde",
    time: "12:00 às 13:00",
    startTime: "12:00",
    endTime: "13:00",
    tuesday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    thursday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    friday: { className: "Adulto", label: "Todos os Níveis", tone: "all" }
  },
  {
    period: "Tarde",
    time: "16:40 às 17:40",
    startTime: "16:40",
    endTime: "17:40",
    tuesday: {
      className: "Infantil",
      label: "Todos os níveis",
      tone: "children"
    },
    thursday: {
      className: "Infantil",
      label: "Todos os níveis",
      tone: "children"
    }
  },
  {
    period: "Tarde",
    time: "17:00 às 18:00",
    startTime: "17:00",
    endTime: "18:00",
    monday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    wednesday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    friday: { className: "Adulto", label: "Todos os Níveis", tone: "all" }
  },
  {
    period: "Noite",
    time: "18:00 às 19:00",
    startTime: "18:00",
    endTime: "19:00",
    monday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    tuesday: {
      className: "Adulto",
      label: "Intermediário / Avançado",
      tone: "mixed"
    },
    wednesday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    thursday: {
      className: "Adulto",
      label: "Intermediário / Avançado",
      tone: "mixed"
    },
    friday: { className: "Adulto", label: "Todos os Níveis", tone: "all" }
  },
  {
    period: "Noite",
    time: "19:00 às 20:00",
    startTime: "19:00",
    endTime: "20:00",
    monday: { className: "Adulto", label: "Avançado", tone: "advanced" },
    tuesday: { className: "Adulto", label: "Avançado", tone: "advanced" },
    wednesday: { className: "Adulto", label: "Avançado", tone: "advanced" },
    thursday: { className: "Adulto", label: "Avançado", tone: "advanced" },
    friday: { className: "Adulto", label: "Avançado", tone: "advanced" }
  },
  {
    period: "Noite",
    time: "20:10 às 21:10",
    startTime: "20:10",
    endTime: "21:10",
    monday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    tuesday: { className: "Adulto", label: "Avançado", tone: "advanced" },
    wednesday: { className: "Adulto", label: "Todos os Níveis", tone: "all" },
    thursday: { className: "Adulto", label: "Avançado", tone: "advanced" }
  }
];

export const scheduleDays: Array<{
  key: ScheduleDayKey;
  label: ScheduleSession["day"];
  weekday: number;
}> = [
  { key: "monday", label: "Segunda", weekday: 1 },
  { key: "tuesday", label: "Terça", weekday: 2 },
  { key: "wednesday", label: "Quarta", weekday: 3 },
  { key: "thursday", label: "Quinta", weekday: 4 },
  { key: "friday", label: "Sexta", weekday: 5 }
];

export const scheduleSessions: ScheduleSession[] = scheduleRows.flatMap((row) =>
  scheduleDays.flatMap((day) => {
    const entry = row[day.key];

    if (!entry) {
      return [];
    }

    return [
      {
        day: day.label,
        label: day.label,
        weekday: day.weekday,
        startTime: row.startTime,
        endTime: row.endTime,
        className: entry.className,
        level: entry.label,
        tone: entry.tone,
        period: row.period.toLocaleLowerCase("pt-BR"),
        instructor: entry.instructor
      }
    ];
  })
);

function toMinutes(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

/**
 * Given a weekday (0 = Sunday) and minutes since midnight — both already in
 * the dojo's timezone — returns the session happening right now (if any)
 * and the next upcoming session of the week.
 */
export function findScheduleStatus(weekday: number, minutes: number) {
  const current = scheduleSessions.find(
    (session) =>
      session.weekday === weekday &&
      toMinutes(session.startTime) <= minutes &&
      minutes < toMinutes(session.endTime)
  );

  const next = scheduleSessions
    .map((session) => {
      const start = toMinutes(session.startTime);
      let deltaDays = session.weekday - weekday;

      if (deltaDays < 0 || (deltaDays === 0 && start <= minutes)) {
        deltaDays += 7;
      }

      return { session, sortValue: deltaDays * 24 * 60 + start };
    })
    .sort((a, b) => a.sortValue - b.sortValue)[0]?.session;

  return { current, next };
}

export const senseis: Sensei[] = [
  {
    name: "Carlos Rocha",
    grade: {
      value: "7º Dan JKA",
      state: "confirmed"
    },
    role: "Instrutor chefe",
    tier: "chief",
    summary:
      "Principal referência técnica e institucional do dojo e primeiro brasileiro a alcançar o 7º Dan JKA. Trajetória de décadas no Karate Shotokan, de competidor nos anos 1970 a formador de gerações de karatecas.",
    image: "/images/sensei-carlos-rocha.jpg"
  },
  {
    name: "Marcio Adami Santos",
    grade: {
      value: "3º Dan JKA",
      state: "confirmed"
    },
    role: "Instrutor",
    tier: "lead",
    summary:
      "Pratica Karate Shotokan há mais de 30 anos e ensina no Mushinkan. Foi campeão brasileiro de kumite por equipes em 2017 e vice-campeão brasileiro master de kumite em 2024.",
    image: "/images/sensei-marcio-adami.jpg"
  },
  {
    name: "Leandro Romero",
    grade: {
      value: "3º Dan JKA",
      state: "confirmed"
    },
    role: "Instrutor",
    tier: "lead",
    summary:
      "Iniciou no Karate Shotokan em 1992 e treina no Mushinkan desde 2010. Foi duas vezes vice-campeão de kata por equipes, em 2017 e 2019.",
    image: "/images/sensei-leandro-romero.png"
  },
  {
    name: "Alexandre Rollo",
    grade: {
      value: "3º Dan",
      state: "confirmed"
    },
    role: "Instrutor",
    tier: "support",
    summary:
      "Aluno do Sensei Carlos Rocha desde 2002. Tricampeão paulista de kumite na categoria master, em 2023, 2024 e 2025, e campeão paulista de kata na categoria master em 2025. Participou de dois cursos de aperfeiçoamento no Hombu Dojo, em Tóquio, em 2023 e 2025.",
    image: "/images/sensei-alexandre-rollo.jpg",
    imagePosition: "center 18%"
  },
  {
    name: "Henri Kenzo Taniguti",
    grade: {
      value: "3º Dan JKA",
      state: "confirmed"
    },
    role: "Instrutor",
    tier: "support",
    summary:
      "Aluno do Sensei Carlos Rocha desde 2000 e 3º Dan JKA desde 2024. Campeão paulista de kata e kumite na categoria Master I em 2023.",
    image: "/images/sensei-kenzo-taniguti.jpg"
  }
];

export const methodPillars = [
  {
    title: "Kihon",
    subtitle: "fundamentos",
    kanji: "基本",
    text:
      "Socos, chutes e defesas treinados pela repetição constante, com postura correta e precisão."
  },
  {
    title: "Kata",
    subtitle: "formas",
    kanji: "形",
    text:
      "Sequências preestabelecidas de ataques e defesas. No Shotokan, são 26 katas do básico ao avançado."
  },
  {
    title: "Kumite",
    subtitle: "luta",
    kanji: "組手",
    text:
      "Aplicação gradual da técnica com controle. O iniciante passa por etapas antes da luta livre."
  }
];

export const benefits = [
  {
    title: "Disciplina",
    text:
      "O treino constante fortalece responsabilidade, respeito e perseverança."
  },
  {
    title: "Foco mental",
    text:
      "A prática exige concentração total e ajuda a desenvolver controle emocional."
  },
  {
    title: "Autoconfiança",
    text:
      "A evolução técnica constrói confiança real através de esforço e dedicação."
  },
  {
    title: "Condicionamento",
    text:
      "Força, flexibilidade, coordenação, equilíbrio e resistência são trabalhados em conjunto."
  },
  {
    title: "Formação de caráter",
    text:
      "Humildade, autocontrole e respeito são praticados dentro e fora do dojo."
  }
];

/* The first three questions appear on the Home page; the full list lives on
   the /faq page. */
export const faqs = [
  {
    question: "Preciso ter experiência para começar?",
    answer:
      "Não. As turmas atendem do iniciante ao avançado, e todo aluno novo é acompanhado de perto pelos instrutores desde o primeiro treino."
  },
  {
    question: "Meu filho pode fazer uma aula experimental?",
    answer:
      "Sim. Cada criança responde de uma forma, por isso os senseis conversam com a família e avaliam individualmente qual é o melhor momento e a turma mais adequada."
  },
  {
    question: "Quais são os horários?",
    answer:
      "Há treinos de segunda a sexta nos períodos da manhã, tarde e noite, para as turmas infantil e adulto. A grade completa está na página Aulas e Horários."
  },
  {
    question: "Como funciona a aula experimental?",
    answer:
      "Você chama o dojo no WhatsApp, conversa diretamente com um instrutor, combina o melhor horário e vem experimentar uma aula sem compromisso."
  },
  {
    question: "Estou fora de forma. Posso acompanhar?",
    answer:
      "Sim. Cada aluno treina no próprio ritmo e pode reduzir a intensidade ou parar para descansar quando necessário, sempre com orientação dos instrutores."
  },
  {
    question: "Existem aulas para alunos avançados?",
    answer:
      "Sim. A grade possui horários de nível avançado e intermediário, além das aulas para todos os níveis. Consulte a página Aulas e Horários para ver a programação semanal."
  },
  {
    question: "Como é uma aula típica no Mushinkan?",
    answer:
      "A aula começa com saudação e aquecimento. Depois são treinados fundamentos, formas e diferentes etapas de combate, sempre de acordo com o nível da turma."
  },
  {
    question: "O que significa Mushinkan?",
    answer:
      "Mushin significa mente vazia, e kan significa casa ou local. Diferente da atenção plena, que observa pensamentos sem julgamento, no mushin a mente não se prende a eles: a ação surge livre, espontânea e sem ego."
  },
  {
    question: "Quanto custa a mensalidade?",
    answer:
      "Os valores são conversados diretamente no WhatsApp, junto com a indicação da turma mais adequada para você ou para seu filho."
  },
  {
    question: "Quem são os instrutores?",
    answer:
      "O Mushinkan conta com uma equipe de instrutores de Karate Shotokan tradicional, apresentada em detalhes na página O Dojo."
  },
  {
    question: "O que levar na primeira aula?",
    answer:
      "Roupa confortável de treino é suficiente para começar. O kimono branco pode ser adquirido depois, caso você decida continuar; o dojo pode indicar um fornecedor."
  },
  {
    question: "Onde fica o dojo?",
    answer:
      "Na Rua Domingos de Moraes, 2216, Vila Mariana, São Paulo, a cerca de 5 minutos a pé da estação Santa Cruz do Metrô. O mapa está na página Contato."
  }
];

export const contentPosts: ContentPost[] = [
  {
    slug: "o-que-e-o-karate",
    category: "ARTIGO",
    title: "O que é o Karate? De Okinawa ao Shotokan",
    summary:
      "A história do Karate, de Gichin Funakoshi à difusão do Karate Shotokan tradicional.",
    imageLabel: "Funakoshi",
    image: apix("7a2ff4464a8949bd9215c5833c99adfd.png"),
    imagePosition: "center top",
    href: "/conteudos/o-que-e-o-karate"
  },
  {
    slug: "niju-kun",
    category: "ARTIGO",
    title: "Niju Kun: os 20 preceitos de Funakoshi",
    summary:
      "A base filosófica do Shotokan: disciplina, respeito, humildade e perseverança.",
    imageLabel: "Caligrafia",
    image: "/images/dojo-central.jpg",
    href: "/conteudos/niju-kun"
  },
  {
    slug: "beneficios-do-karate",
    category: "ARTIGO",
    title: "Benefícios do Karate",
    summary:
      "Benefícios físicos, mentais, emocionais e sociais da prática regular.",
    imageLabel: "Treino",
    image: "/images/dojo-todos-niveis.jpg",
    href: "/conteudos/beneficios-do-karate"
  }
];

export const contentArticles: ContentArticle[] = [
  {
    slug: "o-que-e-o-karate",
    category: "ARTIGO",
    title: "O que é o Karate? De Okinawa ao Shotokan.",
    description:
      "A história do Karate Shotokan está ligada a Okinawa e à trajetória de Gichin Funakoshi, responsável por difundir a prática no Japão continental.",
    heroImage: apix("7a2ff4464a8949bd9215c5833c99adfd.png"),
    sourceLabel: "Conteúdo original do Mushinkan",
    sourceUrl: "https://mushinkan.com.br/o-que-e-o-karate",
    sections: [
      {
        title: "Raízes em Okinawa",
        paragraphs: [
          "O Karate se desenvolveu em Okinawa a partir do encontro entre métodos locais de combate, conhecidos como te ou tode, e influências de artes marciais chinesas. Ao longo do tempo, diferentes mestres organizaram e transmitiram essas técnicas.",
          "A prática que hoje conhecemos não nasceu pronta nem pertence a um único momento histórico. Ela foi sendo transformada por gerações de professores antes de chegar ao Japão continental e, depois, ao restante do mundo."
        ]
      },
      {
        title: "Gichin Funakoshi e a difusão no Japão",
        paragraphs: [
          "Nascido em Okinawa em 1868, Gichin Funakoshi estudou com mestres como Anko Asato e Anko Itosu. Em 1922, realizou uma demonstração em Tóquio e permaneceu no Japão para ensinar Karate.",
          "Funakoshi apresentou a prática também como caminho de formação pessoal. Técnica, disciplina, respeito e desenvolvimento do caráter passaram a ocupar o centro de seu ensino."
        ]
      },
      {
        title: "O nome Shotokan",
        paragraphs: [
          "Shoto era o pseudônimo usado por Funakoshi em seus poemas e caligrafias. Kan significa casa ou local. Shotokan, portanto, foi o nome dado ao dojo de seus alunos: a casa de Shoto.",
          "No pós-guerra, seguidores de Funakoshi organizaram a Japan Karate Association (JKA), tendo o mestre como sua principal referência. A organização contribuiu para sistematizar e difundir internacionalmente uma linha de Karate Shotokan."
        ]
      },
      {
        title: "Como se pratica",
        paragraphs: [
          "O treino começa com saudação e aquecimento e se desenvolve por três pilares complementares: Kihon, Kata e Kumite.",
          "O Kihon trabalha os fundamentos; o Kata organiza ataques e defesas em sequências; e o Kumite aplica a técnica diante de outra pessoa, de forma gradual e controlada. Nenhum dos três existe isoladamente."
        ]
      },
      {
        title: "Karate como caminho",
        paragraphs: [
          "Karate-do pode ser traduzido como o caminho das mãos vazias. O sufixo do indica que a prática vai além da técnica de combate: ela também propõe disciplina, autocontrole, humildade, respeito e perseverança.",
          "Essa dimensão está sintetizada nos Niju Kun, os vinte preceitos de Funakoshi, e no Dojo Kun recitado ao fim dos treinos."
        ]
      }
    ]
  },
  {
    slug: "niju-kun",
    category: "ARTIGO",
    title: "Niju Kun: os 20 preceitos de Gichin Funakoshi.",
    description:
      "Vinte princípios que apresentam o Karate como caminho de respeito, atenção, disciplina e aperfeiçoamento do caráter.",
    sourceLabel: "Niju Kun no site atual do Mushinkan",
    sourceUrl: "https://mushinkan.com.br/niju-kun",
    sections: [
      {
        title: "O Karate além da técnica",
        paragraphs: [
          "Para Gichin Funakoshi, o objetivo do Karate não se limitava à vitória ou à defesa pessoal. A prática deveria contribuir para o aperfeiçoamento do caráter e orientar a conduta dentro e fora do dojo.",
          "Os Niju Kun reúnem essa visão em vinte preceitos. As formulações podem variar entre traduções; abaixo está a versão adotada pelo Mushinkan."
        ]
      },
      {
        title: "Os vinte preceitos",
        ordered: true,
        items: [
          "Não se esqueça de que o Karate-do começa e termina com rei, o respeito.",
          "Não existe primeiro ataque no Karate.",
          "O Karate permanece do lado da justiça.",
          "Primeiro conheça a si mesmo; depois, conheça os outros.",
          "O pensamento acima da técnica.",
          "A mente deve ficar livre.",
          "O infortúnio surge de um descuido.",
          "O Karate vai além do dojo.",
          "O Karate é uma atividade para toda a vida.",
          "Aplique o sentido do Karate a todas as coisas. Isso é o que ele tem de belo.",
          "O Karate é como água fervente: sem calor, retorna ao estado tépido.",
          "Não pense em vencer. Pense em não perder.",
          "Mude de posição de acordo com o adversário.",
          "O resultado de uma batalha depende de como encaramos o vazio e o cheio, a fraqueza e a força.",
          "Considere as mãos e os pés do adversário como espadas.",
          "Ao sair pelo seu portão, você se depara com um milhão de inimigos.",
          "A kamae, posição de prontidão, é para os iniciantes; com o tempo, adota-se shizentai, a postura natural.",
          "Execute o Kata corretamente; o combate real é outra questão.",
          "Não se esqueça de graduar a aplicação da força, a contração e a expansão do corpo e a velocidade da técnica.",
          "Mantenha-se sempre atento, diligente e capaz na busca do caminho."
        ]
      }
    ]
  },
  {
    slug: "beneficios-do-karate",
    category: "ARTIGO",
    title: "Benefícios do Karate.",
    description:
      "Uma prática que trabalha o corpo, exige presença mental e cria vínculos por meio do treino coletivo.",
    sourceLabel: "Conteúdo original do Mushinkan",
    sourceUrl: "https://mushinkan.com.br/beneficios-do-karate",
    sections: [
      {
        title: "Benefícios físicos",
        paragraphs: [
          "O treinamento combina repetição técnica, deslocamentos, mudanças de base e movimentos amplos. A intensidade pode ser adaptada ao nível e ao momento de cada praticante."
        ],
        items: [
          "Força e resistência muscular.",
          "Flexibilidade e mobilidade.",
          "Coordenação e equilíbrio.",
          "Condicionamento cardiovascular.",
          "Agilidade, velocidade e consciência corporal."
        ]
      },
      {
        title: "Benefícios mentais e emocionais",
        paragraphs: [
          "Aprender e repetir técnicas exige concentração, paciência e disposição para corrigir detalhes. A evolução acontece gradualmente e ajuda o aluno a perceber o próprio progresso."
        ],
        items: [
          "Foco e concentração.",
          "Disciplina e constância.",
          "Autoconfiança construída pela prática.",
          "Autocontrole e gestão do estresse.",
          "Responsabilidade e respeito."
        ]
      },
      {
        title: "Benefícios sociais",
        paragraphs: [
          "O dojo é também um espaço de convivência. Crianças, adultos, iniciantes e alunos graduados compartilham o treino e aprendem a evoluir sem perder o cuidado com o outro."
        ],
        items: [
          "Convivência entre diferentes idades e níveis.",
          "Cooperação e espírito de equipe.",
          "Novas amizades e senso de comunidade.",
          "Aprendizado contínuo de respeito, humildade e perseverança."
        ]
      }
    ]
  }
];

export function getContentArticle(slug: string) {
  return contentArticles.find((article) => article.slug === slug);
}
