export interface ApodData {
  title: string;
  date: string;
  explanation: string;
  url: string;
  media_type: string;
  copyright?: string;
}

export const APOD_FALLBACK: ApodData = {
  title: "Nebulosa da Roseta",
  date: "2024-01-15",
  explanation:
    "A Nebulosa da Roseta é uma região de formação estelar localizada a cerca de 5.000 anos-luz da Terra. As cores desta imagem representam diferentes comprimentos de onda de luz, revelando a estrutura complexa de gás e poeira que compõe este berçário estelar. No coração da nebulosa, estrelas jovens e quentes emitem radiação que esculpe e ilumina o gás ao redor, criando a forma que lembra uma rosa cósmica.",
  url: "https://images-assets.nasa.gov/image/PIA12348/PIA12348~orig.jpg",
  media_type: "image",
  copyright: "NASA / ESA",
};
