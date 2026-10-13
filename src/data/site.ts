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
    slug: "aluminio-retroiluminado-3d",
    title: "Letreros 3D de Aluminio Retroiluminados",
    subtitle: "Elegancia con efecto de luz posterior",
    image: "/images/projects/thumbs/dsm-consultores.webp",
    points: [
      "Iluminación posterior que genera un elegante efecto halo",
      "Fabricados en aluminio resistente y de acabado profesional",
      "Ideales para fachadas, oficinas y marcas corporativas",
    ],
  },
  {
    slug: "acrilico-3d",
    title: "Letreros en Acrílico 3D",
    subtitle: "Color, volumen y personalización",
    image: "/images/projects/thumbs/cardoso-clinica-dental.webp",
    points: [
      "Colores vibrantes y acabados modernos",
      "Ideales para logotipos, comercios y espacios interiores",
      "Posibilidad de incorporar iluminación LED",
    ],
  },
  {
    slug: "aluminio-3d",
    title: "Letreros de Aluminio 3D",
    subtitle: "Elegancia, resistencia y presencia",
    image: "/images/services/lorena-belleza-integral.webp",
    points: [
      "Acabado moderno y profesional para letras y logotipos",
      "Material resistente para aplicaciones interiores y exteriores",
      "Ideal para empresas, oficinas y fachadas comerciales",
    ],
  },
  {
    slug: "mdf-3d",
    title: "Letreros en MDF 3D",
    subtitle: "Estilo decorativo y versátil",
    image: "/images/services/ricopet.webp",
    points: [
      "Ideales para interiores y proyectos personalizados",
      "Disponibles en diferentes acabados, colores y espesores",
      "Perfectos para cafeterías, tiendas, estudios y decoración comercial",
    ],
  },
  {
    slug: "luminosos",
    title: "Letreros Luminosos",
    subtitle: "Máxima visibilidad de día y de noche",
    image: "/images/services/wong-town.webp",
    points: [
      "Iluminación LED de alto impacto y bajo consumo",
      "Mayor visibilidad para negocios y locales comerciales",
      "Diseños personalizados según la identidad de cada marca",
    ],
  },
  {
    slug: "doble-iluminacion-3d",
    title: "Letras 3D con Doble Iluminación",
    subtitle: "Iluminación frontal y retroiluminada",
    image: "/images/projects/thumbs/golstar.webp",
    points: [
      "Combina iluminación frontal y efecto halo posterior",
      "Mayor impacto visual tanto de día como de noche",
      "Ideal para marcas que buscan un acabado moderno y premium",
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
    title: "Él",
    category: "Letrero luminoso 3D",
    thumb: "/images/projects/thumbs/el.webp",
    full: "/images/projects/full/el.webp",
    alt: "Letrero instalado para Él",
    layout: "square",
  },
  {
    title: "Wong Town",
    category: "Letras acrílico 3D",
    thumb: "/images/projects/thumbs/wong-town-fachada.webp",
    full: "/images/projects/full/wong-town-fachada.webp",
    alt: "Letras acrílico 3D instaladas para Wong Town",
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
    title: "Patty Wong",
    category: "Letrero luminoso 3D",
    thumb: "/images/projects/thumbs/patty-wong.webp",
    full: "/images/projects/full/patty-wong.webp",
    alt: "Letrero luminoso 3D instalado para Patty Wong",
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
    title: "Aloha",
    category: "Letras acrílico 3D",
    thumb: "/images/projects/thumbs/aloha.webp",
    full: "/images/projects/full/aloha.webp",
    alt: "Letrero acrílico instalado para Aloha",
    layout: "square",
  },
  {
    title: "Urban Restaurant",
    category: "Letras acrílico 3D",
    thumb: "/images/projects/thumbs/urban-restaurant.webp",
    full: "/images/projects/full/urban-restaurant.webp",
    alt: "Letrero acrílico instalado para Urban Restaurant",
    layout: "banner",
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
    category: "Letras acrílico 3D",
    thumb: "/images/projects/thumbs/sol-y-mar.webp",
    full: "/images/projects/full/sol-y-mar.webp",
    alt: "Letrero acrílico instalado para Sol y Mar",
    layout: "square",
  },

  {
    title: "Fushion Wong",
    category: "Letrero luminoso 3D",
    thumb: "/images/projects/thumbs/fushion-wong.webp",
    full: "/images/projects/full/fushion-wong.webp",
    alt: "Letrero luminoso instalado para Fushion Wong",
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
    category: "Letras acrílico 3D retroiluminadas",
    thumb: "/images/projects/thumbs/dsm-consultores.webp",
    full: "/images/projects/full/dsm-consultores.webp",
    alt: "Letrero retroiluminadas instalado para DSM Consultores",
    layout: "square",
  },
  {
    title: "Anticuchería D'Kyara",
    category: "Letrero doble iluminación",
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
  {
    title: "Hong Yi",
    category: "Letrero luminoso 3D",
    thumb: "/images/projects/thumbs/hong-yi.webp",
    full: "/images/projects/full/hong-yi.webp",
    alt: "Letrero luminoso instalado para Hong Yi",
    layout: "square",
  },
  {
    title: "Centro Renzulli",
    category: "Letrero acrílico 3D",
    thumb: "/images/projects/thumbs/centro-renzulli.webp",
    full: "/images/projects/full/centro-renzulli.webp",
    alt: "Letrero acrílico instalado para Centro Renzulli",
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

export const clients = [
  {
    name: "El",
    logo: "/images/clients/el.webp",
  },
  {
    name: "Vittoria Cafetería",
    logo: "/images/clients/vittoria-cafeteria.webp",
  },
  {
    name: "Wakamono",
    logo: "/images/clients/wakamono.webp",
  },
  {
    name: "Ricopet",
    logo: "/images/clients/ricopet.webp",
  },
  {
    name: "AFC",
    logo: "/images/clients/afc.webp",
  },
  {
    name: "Torito Anticuchería",
    logo: "/images/clients/torito-anticucheria.webp",
  },
  {
    name: "Sisa Dermoestética",
    logo: "/images/clients/sisa-dermoestetica.webp",
  },
  {
    name: "Walon",
    logo: "/images/clients/walon.webp",
    contrast: "dark",
  },
  {
    name: "Tai Loy",
    logo: "/images/clients/tai-loy.webp",
  },
  {
    name: "Golstar",
    logo: "/images/clients/golstar.webp",
    contrast: "dark",
  },
  {
    name: "Cardoso Clínica Dental",
    logo: "/images/clients/dental-cardoso.webp",
  },
  {
    name: "D'Patas",
    logo: "/images/clients/d-patas.webp",
    contrast: "dark",
  },

  // Agregar los archivos cuando tengamos sus logos preparados.
  // {
  //   name: "Hong Yi",
  //   logo: "/images/clients/hong-yi.jpg",
  // },
  // {
  //   name: "Wong Town",
  //   logo: "/images/clients/wong-town.jpg",
  // },
  // {
  //   name: "Patty Wong",
  //   logo: "/images/clients/patty-wong.jpg",
  // },
];
