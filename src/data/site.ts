export const site = {
  name: "LetreInnova",
  slogan: "Publicidad que vende",
  phoneDisplay: "918 131 967",
  whatsapp: "51918131967",
  whatsappMessage:
    "Hola, quisiera información y una cotización sobre letreros publicitarios.",
  email: "letreinnova@gmail.com",
  address: "",
  social: {
    facebook: "https://www.facebook.com/LETREinnova",
    instagram: "https://www.instagram.com/letreinnova_letreros/",
    tiktok:
      "https://www.tiktok.com/@ricardo__letreinnova?_r=1&_t=ZS-9AAiYJytwnO",
    x: "",
  },
};

export const services = [
  {
    slug: "acero-inoxidable",
    title: "Letreros en Acero Inoxidable",
    subtitle: "Máxima durabilidad y prestigio",
    image: "/images/projects/thumbs/dsm-consultores.webp",
    points: [
      "Acabado espejo, cepillado o pulido",
      "Alta resistencia al clima",
      "Ideal para marcas premium, clínicas y empresas",
    ],
  },
  {
    slug: "acrilico-3d",
    title: "Letreros en Acrílico 3D",
    subtitle: "Los más llamativos y personalizados",
    image: "/images/projects/thumbs/cardoso-clinica-dental.webp",
    points: [
      "Colores vibrantes y acabados premium",
      "Ideales para logos, marcas comerciales y decoración",
      "Opción con iluminación LED",
    ],
  },
  {
    slug: "aluminio-3d",
    title: "Letreros de Aluminio 3D",
    subtitle: "Elegancia, sobriedad y resistencia",
    image: "/images/services/rial-automotores.webp",
    points: [
      "Apariencia moderna y corporativa",
      "Perfectos para oficinas, empresas y señalización",
      "Uso interior y exterior",
    ],
  },
  {
    slug: "mdf-3d",
    title: "Letreros en MDF 3D",
    subtitle: "Estilo cálido y decorativo",
    image: "/images/projects/thumbs/señor-sazon.webp",
    points: [
      "Ideales para interiores y marcas creativas",
      "Acabados pintados o naturales",
      "Perfectos para cafeterías, boutiques y estudios",
    ],
  },
  {
    slug: "luminosos",
    title: "Letreros Luminosos",
    subtitle: "Máxima visibilidad de día y de noche",
    image: "/images/projects/thumbs/golstar.webp",
    points: [
      "Iluminación LED de alto impacto",
      "Perfectos para negocios, locales y marcas que quieren destacar",
      "Mayor recordación visual",
    ],
  },
  {
    slug: "pvc",
    title: "Letreros en PVC",
    subtitle: "Versátiles, ligeros y modernos",
    image: "/images/services/onco-vip.webp",
    points: [
      "Excelente relación precio–impacto",
      "Ideales para interiores, logos y señalización",
      "Acabados limpios y profesionales",
    ],
  },
];

// export type VideoProject = {
//   type: "video";
//   title: string;
//   category: string;
//   poster: string;
//   videoUrl: string;
// };

export type ProjectLayout = "banner" | "square" | "tall";

export interface Project {
  title: string;
  category: string;
  thumb: string;
  full: string;
  alt: string;
  layout: ProjectLayout;
}

export const projects: Project[] = [
  {
    title: "Wong",
    category: "Letrero luminoso",
    thumb: "/images/projects/thumbs/wong.webp",
    full: "/images/projects/full/wong.webp",
    alt: "Letrero luminoso instalado para Wong",
    layout: "banner",
  },
  {
    title: "Cardoso Clínica Dental",
    category: "Letrero luminoso",
    thumb: "/images/projects/thumbs/cardoso-clinica-dental.webp",
    full: "/images/projects/full/cardoso-clinica-dental.webp",
    alt: "Letrero iluminado instalado para Cardoso Clínica Dental",
    layout: "square",
  },
  {
    title: "Mango",
    category: "Letras 3D",
    thumb: "/images/projects/thumbs/Centinela-de-El-Oro.webp",
    full: "/images/projects/full/Centinela-de-El-Oro.webp",
    alt: "Letrero de Centinela de El Oro",
    layout: "square",
  },
  {
    title: "Ciudad Sonrisas",
    category: "Letras corporativas",
    thumb: "/images/projects/thumbs/ciudad-sonrisas.webp",
    full: "/images/projects/full/ciudad-sonrisas.webp",
    alt: "Letras corporativas instaladas para Ciudad Sonrisas",
    layout: "tall",
  },
  {
    title: "Mifarma",
    category: "Letrero corporativo",
    thumb: "/images/projects/thumbs/mi-farma-fachada.webp",
    full: "/images/projects/full/mi-farma-fachada.webp",
    alt: "Letrero corporativo instalado para Mifarma",
    layout: "banner",
  },
  {
    title: "Golstar",
    category: "Letrero luminoso",
    thumb: "/images/projects/thumbs/golstar.webp",
    full: "/images/projects/full/golstar.webp",
    alt: "Letrero luminoso instalado para Golstar",
    layout: "square",
  },
  {
    title: "Albert Einstein",
    category: "Letras corporativas",
    thumb: "/images/projects/thumbs/albert-einstein.webp",
    full: "/images/projects/full/albert-einstein.webp",
    alt: "Letras corporativas instaladas para Albert Einstein",
    layout: "square",
  },
  {
    title: "Urban Restaurant",
    category: "Letras 3D",
    thumb: "/images/projects/thumbs/urban-restaurant.webp",
    full: "/images/projects/full/urban-restaurant.webp",
    alt: "Letrero instalado para Urban Restaurant",
    layout: "banner",
  },
  {
    title: "Aloha",
    category: "Letrero luminoso",
    thumb: "/images/projects/thumbs/aloha.webp",
    full: "/images/projects/full/aloha.webp",
    alt: "Letrero luminoso instalado para Aloha",
    layout: "square",
  },
  {
    title: "Lalo's Cevichería",
    category: "Letrero luminoso",
    thumb: "/images/projects/thumbs/Cevicheria.Lalos.3.webp",
    full: "/images/projects/full/Cevicheria.Lalos.3.webp",
    alt: "Letrero luminoso instalado para Lalo's Cevichería",
    layout: "square",
  },
  {
    title: "Sol y Mar",
    category: "Letras 3D",
    thumb: "/images/projects/thumbs/sol-y-mar.webp",
    full: "/images/projects/full/sol-y-mar.webp",
    alt: "Letrero instalado para Sol y Mar",
    layout: "square",
  },

  {
    title: "Kexfarma Botica",
    category: "Letrero corporativo",
    thumb: "/images/projects/thumbs/kexfarma-botica.webp",
    full: "/images/projects/full/kexfarma-botica.webp",
    alt: "Letrero corporativo instalado para Kexfarma Botica",
    layout: "tall",
  },
  {
    title: "Señor Sazón",
    category: "Letrero corporativo",
    thumb: "/images/projects/thumbs/señor-sazon.webp",
    full: "/images/projects/full/señor-sazon.webp",
    alt: "Letrero corporativo instalado para Señor Sazón",
    layout: "banner",
  },

  {
    title: "DSM Consultores",
    category: "Letras corporativas",
    thumb: "/images/projects/thumbs/dsm-consultores.webp",
    full: "/images/projects/full/dsm-consultores.webp",
    alt: "Letrero corporativo instalado para DSM Consultores",
    layout: "square",
  },
  {
    title: "Anticuchería D'Kyara",
    category: "Letrero luminoso",
    thumb: "/images/projects/thumbs/anticucheria-dkyara.webp",
    full: "/images/projects/full/anticucheria-dkyara.webp",
    alt: "Letrero luminoso instalado para Anticuchería D'Kyara",
    layout: "banner",
  },
  {
    title: "El Peje Cevichería",
    category: "Letrero luminoso",
    thumb: "/images/projects/thumbs/el-peje-cevicheria.webp",
    full: "/images/projects/full/el-peje-cevicheria.webp",
    alt: "Letrero luminoso instalado para El Peje Cevichería",
    layout: "square",
  },
  {
    title: "Dental Paradise",
    category: "Letrero luminoso",
    thumb: "/images/projects/thumbs/dental-paradise.webp",
    full: "/images/projects/full/dental-paradise.webp",
    alt: "Letrero luminoso instalado para Dental Paradise",
    layout: "square",
  },
  {
    title: "CPE Endocrinología",
    category: "Letrero corporativo",
    thumb: "/images/projects/thumbs/cpe-endocrinologia.webp",
    full: "/images/projects/full/cpe-endocrinologia.webp",
    alt: "Letrero corporativo instalado para CPE Endocrinología",
    layout: "square",
  },
  // {
  //   title: "Parque Espacial KRI",
  //   category: "Letrero luminoso",
  //   thumb: "/images/projects/thumbs/parque-espacial-kri.webp",
  //   full: "/images/projects/full/parque-espacial-kri.webp",
  //   alt: "Letrero luminoso instalado para Parque Espacial KRI",
  //   layout: "square",
  // },
];

export const clients = Array.from({ length: 10 }, (_, index) => ({
  name: `Cliente ${String(index + 1).padStart(2, "0")}`,
  logo: `/images/clients/cliente-${String(index + 1).padStart(2, "0")}.svg`,
}));
