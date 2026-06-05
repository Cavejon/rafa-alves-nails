export interface Service {
  id: string;
  name: string;
  price: number;
  category: 'manicure' | 'pedicure' | 'gel' | 'extensoes' | 'pacotes';
  description?: string;
}

export interface PricingCard {
  id: string;
  title: string;
  category: string;
  price: number;
  services: string[];
  highlight?: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  profession: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  service: string;
}

export interface ContactInfo {
  phone: string;
  whatsappLink: string;
  bookingLink: string;
  schedule: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
}

export const SERVICES: Service[] = [
  // Manicure
  {
    id: 'manicure-1',
    name: 'Manicure',
    price: 40,
    category: 'manicure',
    description: 'Manicure clássica com acabamento perfeito'
  },

  // Pedicure
  {
    id: 'pedicure-1',
    name: 'Pedicure',
    price: 50,
    category: 'pedicure',
    description: 'Pedicure completa e relaxante'
  },
  {
    id: 'pedicure-2',
    name: 'Spa dos Pés',
    price: 90,
    category: 'pedicure',
    description: 'Tratamento completo com hidratação profunda'
  },

  // Gel
  {
    id: 'gel-1',
    name: 'Esmaltação em Gel - Mão',
    price: 80,
    category: 'gel',
    description: 'Esmaltação em gel com acabamento impecável'
  },
  {
    id: 'gel-2',
    name: 'Esmaltação em Gel - Pé',
    price: 80,
    category: 'gel',
    description: 'Esmaltação em gel nos pés com durabilidade'
  },
  {
    id: 'gel-3',
    name: 'Banho em Gel com Esmaltação',
    price: 120,
    category: 'gel',
    description: 'Tratamento completo com gel e esmaltação'
  },

  // Extensões
  {
    id: 'ext-1',
    name: 'Alongamento Fibra de Vidro + Gel',
    price: 190,
    category: 'extensoes',
    description: 'Alongamento profissional com esmaltação em gel'
  },
  {
    id: 'ext-2',
    name: 'Alongamento F1',
    price: 150,
    category: 'extensoes',
    description: 'Alongamento com técnica F1'
  },
  {
    id: 'ext-3',
    name: 'Manutenção de Extensão/Alongamento',
    price: 150,
    category: 'extensoes',
    description: 'Manutenção de extensões ou alongamentos'
  },
  {
    id: 'ext-4',
    name: 'Postiça Realista Soft Gel com Esmaltação em Gel',
    price: 120,
    category: 'extensoes',
    description: 'Postiça realista com esmaltação em gel'
  },

  // Pacotes
  {
    id: 'pacote-1',
    name: 'Pacote 4 Mãos',
    price: 110,
    category: 'pacotes',
    description: 'Manicure para 4 pessoas'
  },
  {
    id: 'pacote-2',
    name: 'Pacote 4 Mãos + 2 Pés',
    price: 180,
    category: 'pacotes',
    description: 'Manicure + Pedicure para 4 pessoas e 2 pessoas'
  },
  {
    id: 'pacote-3',
    name: 'Pacote 4 Mãos + 1 Pé',
    price: 150,
    category: 'pacotes',
    description: 'Manicure para 4 + Pedicure para 1'
  },
  {
    id: 'pacote-4',
    name: 'Pacote 2 Pés',
    price: 70,
    category: 'pacotes',
    description: 'Pedicure para 2 pessoas'
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: 'manicure',
    name: 'Manicure',
    icon: '💅'
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    icon: '👣'
  },
  {
    id: 'gel',
    name: 'Gel',
    icon: '✨'
  },
  {
    id: 'extensoes',
    name: 'Extensões de Unhas',
    icon: '💎'
  },
  {
    id: 'pacotes',
    name: 'Pacotes Especiais',
    icon: '🎁'
  }
];

export const PRICING_CARDS: PricingCard[] = [
  {
    id: 'card-1',
    title: 'Manicure & Pedicure',
    category: 'Beleza Completa',
    price: 90,
    services: ['Manicure clássica', 'Pedicure relaxante', 'Finalização com hidratação'],
    highlight: 'Mais popular'
  },
  {
    id: 'card-2',
    title: 'Gel Premium',
    category: 'Esmaltação em Gel',
    price: 120,
    services: ['Gel para as mãos', 'Esmaltação em gel', 'Acabamento duradouro']
  },
  {
    id: 'card-3',
    title: 'Alongamento + Manutenção',
    category: 'Extensões',
    price: 180,
    services: ['Alongamento fibra de vidro', 'Manutenção e reforço', 'Esmaltação em gel']
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: 'assets/images/unha1.jpeg',
    alt: 'Alongamento stiletto vermelho vibrante',
    service: 'Extensões'
  },
  {
    id: 'gallery-2',
    src: 'assets/images/unha2.jpeg',
    alt: 'Esmaltação rosa com detalhes em folha de ouro',
    service: 'Gel'
  },
  {
    id: 'gallery-3',
    src: 'assets/images/unha3.jpeg',
    alt: 'Esmaltação nude rosé delicada e elegante',
    service: 'Manicure'
  },
  {
    id: 'gallery-4',
    src: 'assets/images/unha4.jpeg',
    alt: 'Manicure clássica vermelho marsala brilhante',
    service: 'Manicure'
  },
  {
    id: 'gallery-5',
    src: 'assets/images/unha5.jpeg',
    alt: 'Alongamento branco perolado com cristais',
    service: 'Extensões'
  },
  {
    id: 'gallery-6',
    src: 'assets/images/unha6.jpeg',
    alt: 'Esmaltação marrom chocolate sofisticada',
    service: 'Gel'
  },
  {
    id: 'gallery-7',
    src: 'assets/images/unha7.jpeg',
    alt: 'Alongamento preto fosco e brilhante elegante',
    service: 'Extensões'
  },
  {
    id: 'gallery-8',
    src: 'assets/images/unha8.jpeg',
    alt: 'Esmaltação vermelho cereja com brilho intenso',
    service: 'Gel'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    text: 'Adorei o atendimento! As profissionais são super atenciosas e o resultado ficou perfeito.',
    author: 'Maria',
    profession: 'Cliente',
    rating: 5
  },
  {
    id: 'testimonial-2',
    text: 'Voltei aqui várias vezes. Qualidade garantida, ambiente aconchegante e preços justos!',
    author: 'Ana',
    profession: 'Cliente',
    rating: 5
  },
  {
    id: 'testimonial-3',
    text: 'Recomendo demais! Melhor manicure que já fiz. Vou voltar com certeza!',
    author: 'Júlia',
    profession: 'Cliente',
    rating: 5
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: '+55 (47) 99233-5859',
  whatsappLink: 'https://wa.me/5547992335859?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20marcar%20um%20horário%20contigo.',
  bookingLink: 'https://colavo.link/r/SSSCgW?channel=colavo_booklink&expire=1780123914',
  schedule: {
    weekday: 'Seg–Sex: 8h–19:30h',
    saturday: 'Sábado: 9h–19:30h',
    sunday: 'Domingo: Fechado'
  }
};


export const HIGHLIGHTS = [
  'Profissionalismo',
  'Qualidade Premium',
  'Ambiente Aconchegante'
];

