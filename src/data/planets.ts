export interface PlanetData {
  id: string;
  name: string;
  nameEn: string;
  color: string;
  emissive: string;
  radius: number; // 3D sphere radius
  realRadiusKm: number; // actual radius in km
  distance: number; // 3D orbit radius
  realDistanceMillionKm: number; // actual distance from sun
  orbitSpeed: number; // 3D orbit speed
  rotationSpeed: number; // 3D self rotation speed
  orbitalPeriod: string; // real orbital period
  rotationPeriod: string; // real rotation period
  temperature: string;
  moons: number;
  gravity: string;
  mass: string;
  description: string;
  funFact: string;
  hasRings: boolean;
  ringColor?: string;
  ringInner?: number;
  ringOuter?: number;
}

export const SUN_DATA = {
  name: "Sol",
  nameEn: "Sun",
  radius: 3.5,
  realRadiusKm: 696340,
  temperature: "5.500 °C (superfície) · 15.000.000 °C (núcleo)",
  mass: "1,989 × 10³⁰ kg (333.000x a massa da Terra)",
  age: "4,6 bilhões de anos",
  type: "Anã amarela (G2V)",
  description:
    "O Sol é a estrela central do Sistema Solar e responsável por 99,86% de toda a massa do sistema. Sua energia sustém toda a vida na Terra através da fusão nuclear que converte hidrogênio em hélio em seu núcleo.",
  funFact:
    "A luz do Sol leva cerca de 8 minutos e 20 segundos para chegar à Terra — quando você olha para o Sol, está vendo como ele era no passado.",
};

export const PLANETS: PlanetData[] = [
  {
    id: "mercurio",
    name: "Mercúrio",
    nameEn: "Mercury",
    color: "#9c8b7a",
    emissive: "#3a3228",
    radius: 0.38,
    realRadiusKm: 2440,
    distance: 7,
    realDistanceMillionKm: 57.9,
    orbitSpeed: 0.04,
    rotationSpeed: 0.004,
    orbitalPeriod: "88 dias",
    rotationPeriod: "58,6 dias",
    temperature: "-173 °C a 427 °C",
    moons: 0,
    gravity: "3,7 m/s²",
    mass: "3,3 × 10²³ kg",
    description:
      "O menor e mais interno planeta do Sistema Solar, Mercúrio é um mundo de extremos — sem atmosfera significativa, sua superfície alterna entre temperaturas abrasadoras e congelantes.",
    funFact:
      "Um dia em Mercúrio (sunrise to sunrise) dura 176 dias terrestres — mais que seu próprio ano de 88 dias.",
    hasRings: false,
  },
  {
    id: "venus",
    name: "Vênus",
    nameEn: "Venus",
    color: "#e8b87a",
    emissive: "#5a4320",
    radius: 0.55,
    realRadiusKm: 6052,
    distance: 10,
    realDistanceMillionKm: 108.2,
    orbitSpeed: 0.015,
    rotationSpeed: 0.002,
    orbitalPeriod: "225 dias",
    rotationPeriod: "243 dias (retrógrado)",
    temperature: "465 °C (superfície)",
    moons: 0,
    gravity: "8,87 m/s²",
    mass: "4,87 × 10²⁴ kg",
    description:
      "Vênus é o planeta mais quente do Sistema Solar devido a um efeito estufa descontrolado. Sua densa atmosfera de CO₂ retém calor de forma extrema, tornando-o um verdadeiro forno planetário.",
    funFact:
      "Vênus gira no sentido oposto aos outros planetas — no Vênus, o Sol nasce no oeste e se põe no leste.",
    hasRings: false,
  },
  {
    id: "terra",
    name: "Terra",
    nameEn: "Earth",
    color: "#4a90d9",
    emissive: "#1a3a5a",
    radius: 0.6,
    realRadiusKm: 6371,
    distance: 14,
    realDistanceMillionKm: 149.6,
    orbitSpeed: 0.01,
    rotationSpeed: 0.01,
    orbitalPeriod: "365,25 dias",
    rotationPeriod: "23h 56min",
    temperature: "-89 °C a 58 °C (média 15 °C)",
    moons: 1,
    gravity: "9,81 m/s²",
    mass: "5,97 × 10²⁴ kg",
    description:
      "Nosso lar. O único planeta conhecido que abriga vida, com oceanos de água líquida, uma atmosfera rica em oxigênio e um campo magnético que nos protege da radiação solar.",
    funFact:
      "A Terra é o único planeta não nomeado em homenagem a um deus da mitologia greco-romana.",
    hasRings: false,
  },
  {
    id: "marte",
    name: "Marte",
    nameEn: "Mars",
    color: "#c1440e",
    emissive: "#4a1505",
    radius: 0.5,
    realRadiusKm: 3389,
    distance: 18,
    realDistanceMillionKm: 227.9,
    orbitSpeed: 0.008,
    rotationSpeed: 0.009,
    orbitalPeriod: "687 dias",
    rotationPeriod: "24h 37min",
    temperature: "-153 °C a 20 °C",
    moons: 2,
    gravity: "3,71 m/s²",
    mass: "6,42 × 10²³ kg",
    description:
      "O Planeta Vermelho deve sua cor ao óxido de ferro em seu solo. Marte abriga o maior vulcão e o maior cânion do Sistema Solar, e é o principal alvo na busca por vida extraterrestre.",
    funFact:
      "O Monte Olimpo em Marte tem 22 km de altura — quase 3 vezes o Monte Everest.",
    hasRings: false,
  },
  {
    id: "jupiter",
    name: "Júpiter",
    nameEn: "Jupiter",
    color: "#d8a87a",
    emissive: "#4a3520",
    radius: 1.6,
    realRadiusKm: 69911,
    distance: 26,
    realDistanceMillionKm: 778.5,
    orbitSpeed: 0.002,
    rotationSpeed: 0.02,
    orbitalPeriod: "11,9 anos",
    rotationPeriod: "9h 56min",
    temperature: "-145 °C (topo das nuvens)",
    moons: 95,
    gravity: "24,79 m/s²",
    mass: "1,9 × 10²⁷ kg",
    description:
      "O gigante do Sistema Solar. Júpiter é tão massivo que todos os outros planetas juntos caberiam dentro dele. Sua Grande Mancha Vermelha é uma tempestade que dura há séculos.",
    funFact:
      "A Grande Mancha Vermelha de Júpiter é uma tempestade maior que a Terra, ativa há pelo menos 350 anos.",
    hasRings: false,
  },
  {
    id: "saturno",
    name: "Saturno",
    nameEn: "Saturn",
    color: "#e3c98f",
    emissive: "#4a3f20",
    radius: 1.3,
    realRadiusKm: 58232,
    distance: 34,
    realDistanceMillionKm: 1434,
    orbitSpeed: 0.0009,
    rotationSpeed: 0.018,
    orbitalPeriod: "29,5 anos",
    rotationPeriod: "10h 42min",
    temperature: "-178 °C",
    moons: 146,
    gravity: "10,44 m/s²",
    mass: "5,68 × 10²⁶ kg",
    description:
      "Famoso por seus deslumbrantes anéis de gelo e poeira, Saturno é o segundo maior planeta do Sistema Solar e tem uma densidade tão baixa que flutuaria na água.",
    funFact:
      "Saturno é tão leve que, se existisse um oceano grande o suficiente, ele flutuaria — é o único planeta menos denso que a água.",
    hasRings: true,
    ringColor: "#c4a86a",
    ringInner: 1.8,
    ringOuter: 2.8,
  },
  {
    id: "urano",
    name: "Urano",
    nameEn: "Uranus",
    color: "#8fd4e0",
    emissive: "#1a4a55",
    radius: 0.9,
    realRadiusKm: 25362,
    distance: 42,
    realDistanceMillionKm: 2871,
    orbitSpeed: 0.0004,
    rotationSpeed: 0.012,
    orbitalPeriod: "84 anos",
    rotationPeriod: "17h 14min (retrógrado)",
    temperature: "-224 °C",
    moons: 28,
    gravity: "8,69 m/s²",
    mass: "8,68 × 10²⁵ kg",
    description:
      "O gigante de gelo. Urano é único porque gira de lado — seu eixo de rotação é inclinado quase 98°, provavelmente devido a uma colisão colossal no passado distante.",
    funFact:
      "Urano 'roda' em torno do Sol deitado — seu eixo é inclinado a 98°, fazendo cada polo apontar para o Sol por 42 anos seguidos.",
    hasRings: false,
  },
  {
    id: "netuno",
    name: "Netuno",
    nameEn: "Neptune",
    color: "#3b5fd9",
    emissive: "#0a1a4a",
    radius: 0.88,
    realRadiusKm: 24622,
    distance: 50,
    realDistanceMillionKm: 4495,
    orbitSpeed: 0.0001,
    rotationSpeed: 0.014,
    orbitalPeriod: "165 anos",
    rotationPeriod: "16h 6min",
    temperature: "-218 °C",
    moons: 16,
    gravity: "11,15 m/s²",
    mass: "1,02 × 10²⁶ kg",
    description:
      "O planeta mais distante do Sol. Netuno é um mundo azul e ventoso, com os ventos mais rápidos do Sistema Solar, atingindo até 2.100 km/h.",
    funFact:
      "Netuno foi o primeiro planeta descoberto por cálculos matemáticos — sua existência foi prevista antes de ser observada.",
    hasRings: false,
  },
];

export interface CosmicObject {
  id: string;
  name: string;
  category: string;
  distance: string;
  description: string;
  image: string;
  facts: string[];
}

export const GALAXY_FACTS = {
  name: "Via Láctea",
  type: "Galáxia espiral barrada (SBbc)",
  diameter: "≈ 100.000 anos-luz",
  stars: "100 a 400 bilhões de estrelas",
  age: "13,6 bilhões de anos",
  mass: "1,5 trilhões de massas solares",
  centerSagittariusA: "Sagitário A* — buraco negro supermassivo",
  ourPosition:
    "O Sol está a ≈ 26.000 anos-luz do centro galáctico, no Brazo de Órion",
  rotationPeriod: "≈ 225 a 250 milhões de anos (ano galáctico)",
  description:
    "A Via Láctea é nossa galáxia natal — um vasto disco espiral de estrelas, gás e poeira que abriga nosso Sistema Solar em um de seus braços periféricos. Vista de fora, seria semelhante a um disco achatado com um bojo central brilhante.",
  facts: [
    "Somos uma galáxia 'espiral barrada', o que significa que o centro tem uma estrutura em forma de barra de estrelas.",
    "Estima-se que existam mais de 100 bilhões de planetas na Via Láctea.",
    "A Via Láctea é uma das duas trilhões de galáxias no universo observável.",
    "Em cerca de 4,5 bilhões de anos, a Via Láctea colidirá com a Galáxia de Andrômeda, formando uma nova 'Milkomeda'.",
    "O buraco negro central, Sagitário A*, tem uma massa 4 milhões de vezes a do Sol.",
  ],
};

export const COSMIC_OBJECTS: CosmicObject[] = [
  {
    id: "andromeda",
    name: "Galáxia de Andrômeda",
    category: "Galáxia espiral",
    distance: "2,5 milhões de anos-luz",
    description:
      "A galáxia mais próxima de grande porte da Via Láctea, Andrômeda é visível a olho nu e está se aproximando de nós a 110 km/s. Em bilhões de anos, ambas as galáxias se fundirão.",
    image:
      "https://images.pexels.com/photos/40074430/pexels-photo-40074430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    facts: [
      "Contém cerca de 1 trilhão de estrelas",
      "Será visível a olho nu em céus escuros",
      "Vai colidir com a Via Láctea em ~4,5 bilhões de anos",
    ],
  },
  {
    id: "sagittarius-a",
    name: "Sagitário A*",
    category: "Buraco negro supermassivo",
    distance: "26.000 anos-luz",
    description:
      "O buraco negro no coração da Via Láctea. Com massa equivalente a 4 milhões de sóis, sua existência foi confirmada em 2022 com a primeira imagem direta de um buraco negro central galáctico.",
    image:
      "https://images.pexels.com/photos/23522813/pexels-photo-23522813.png?auto=compress&cs=tinysrgb&h=650&w=940",
    facts: [
      "Massa: 4,1 milhões de massas solares",
      "Primeira imagem obtida em 2022 pelo Event Horizon Telescope",
      "Devolve matéria que se aproxima demais do horizonte de eventos",
    ],
  },
  {
    id: "pillars",
    name: "Pilares da Criação",
    category: "Nebulosa",
    distance: "6.500 anos-luz",
    description:
      "Formações monumentais de gás e poeira na Nebulosa da Águia, capturadas pelo telescópio Hubble. São berçários de novas estrelas, imensas além da compreensão humana.",
    image:
      "https://images.pexels.com/photos/20881655/pexels-photo-20881655.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    facts: [
      "Altura estimada: 4-5 anos-luz",
      "Capturadas pelo telescópio Hubble em 1995",
      "Na verdade já podem ter sido destruídas por uma supernova há 6.000 anos",
    ],
  },
  {
    id: "sirius",
    name: "Sirius",
    category: "Sistema estelar binário",
    distance: "8,6 anos-luz",
    description:
      "A estrela mais brilhante do céu noturno. Sirius é, na verdade, um sistema de duas estrelas — Sirius A, brilhante e azul-branca, e Sirius B, uma anã branca densa e discreta.",
    image:
      "https://images.pexels.com/photos/33931044/pexels-photo-33931044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    facts: [
      "Conhecida como 'Estrela Cão' desde a antiguidade",
      "Sirius B tem a massa do Sol compactada no tamanho da Terra",
      "Brilha 25x mais que o Sol",
    ],
  },
];

export interface CosmicPhenomenon {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export const COSMIC_PHENOMENA: CosmicPhenomenon[] = [
  {
    id: "blackholes",
    title: "Buracos Negros",
    icon: "Circle",
    description:
      "Regiões do espaço-tempo onde a gravidade é tão intensa que nada — nem a luz — pode escapar. O horizonte de eventos é a fronteira sem retorno.",
    details: [
      "Formados pelo colapso de estrelas massivas",
      "Existem buracos negros supermassivos no centro de quase todas as galáxias",
      "O tempo se dilata drasticamente perto de um buraco negro",
    ],
  },
  {
    id: "supernovas",
    title: "Supernovas",
    icon: "Sparkles",
    description:
      "Explosões cósmicas catastróficas que marcam o fim de estrelas massivas. Em segundos, liberam mais energia que o Sol produzirá em toda sua vida.",
    details: [
      "Podem brilhar mais que uma galáxia inteira por semanas",
      "Criam elementos pesados como ouro, urânio e prata",
      "A última supernova visível a olho nu na Via Láctea foi em 1604",
    ],
  },
  {
    id: "nebulas",
    title: "Nebulosas",
    icon: "Cloud",
    description:
      "Nuvens gigantes de gás e poeira onde nascem novas estrelas. Algumas também são os restos de estrelas que já morreram.",
    details: [
      "Podem ter dezenas a centenas de anos-luz de extensão",
      "Compostas principalmente de hidrogênio e hélio",
      "São os berçários estelares do universo",
    ],
  },
  {
    id: "darkmatter",
    title: "Matéria Escura",
    icon: "Ghost",
    description:
      "Uma substância misteriosa que compõe 27% do universo, mas não emite nem absorve luz. Sua existência é inferida por seus efeitos gravitacionais nas galáxias.",
    details: [
      "27% do universo é matéria escura",
      "Apenas 5% é matéria 'normal' (visível)",
      "Ainda não foi detectada diretamente",
    ],
  },
  {
    id: "darkenergy",
    title: "Energia Escura",
    icon: "Zap",
    description:
      "A força misteriosa que acelera a expansão do universo. Compõe 68% de tudo que existe, mas sua natureza permanece um dos maiores mistérios da ciência.",
    details: [
      "68% do universo é energia escura",
      "Está acelerando a expansão do universo",
      "Sua natureza fundamental é desconhecida",
    ],
  },
  {
    id: "gravitational-waves",
    title: "Ondas Gravitacionais",
    icon: "Waves",
    description:
      "Ressacões no tecido do espaço-tempo, previstas por Einstein em 1916 e detectadas pela primeira vez em 2015, vindas da fusão de dois buracos negros.",
    details: [
      "Previstas pela Teoria da Relatividade Geral",
      "Detectadas pela primeira vez em 14/09/2015",
      "Abrem uma nova janela para observar o universo",
    ],
  },
];

export interface UniverseFact {
  id: number;
  title: string;
  value: string;
  description: string;
}

export const UNIVERSE_STATS: UniverseFact[] = [
  {
    id: 1,
    title: "Idade do Universo",
    value: "13,8 bilhões de anos",
    description: "Desde o Big Bang, o evento que deu origem a tudo que existe.",
  },
  {
    id: 2,
    title: "Galáxias Observáveis",
    value: "≈ 2 trilhões",
    description: "Estimativa de galáxias no universo observável.",
  },
  {
    id: 3,
    title: "Estrelas Estimadas",
    value: "10²⁴ estrelas",
    description: "Mais estrelas que grãos de areia em todas as praias da Terra.",
  },
  {
    id: 4,
    title: "Diâmetro Observável",
    value: "93 bilhões de anos-luz",
    description: "O tamanho do universo que podemos ver da Terra.",
  },
  {
    id: 5,
    title: "Expansão (H₀)",
    value: "73 km/s/Mpc",
    description: "A taxa à qual o universo está se expandindo.",
  },
  {
    id: 6,
    title: "Temperatura (FCCR)",
    value: "2,725 K",
    description: "A temperatura do Fundo Cósmico de Radiação de Micro-ondas.",
  },
];
