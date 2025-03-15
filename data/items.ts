import { CategoryType, ProductType } from '../types';

export const categories: CategoryType[] = [
  {
    id: 'hair-care',
    name: 'Cuidados com o Cabelo',
    icon: 'scissors',
    description: 'Produtos profissionais para todos os tipos de cabelo'
  },
  {
    id: 'beard-care',
    name: 'Cuidados com a Barba',
    icon: 'beard',
    description: 'Produtos especializados para barba'
  },
  {
    id: 'skin-care',
    name: 'Cuidados com a Pele',
    icon: 'spray',
    description: 'Produtos para cuidados faciais masculinos'
  },
  {
    id: 'accessories',
    name: 'Acessórios',
    icon: 'razor',
    description: 'Ferramentas e acessórios profissionais'
  },
  {
    id: 'perfumes',
    name: 'Perfumaria',
    icon: 'spray',
    description: 'Fragrâncias masculinas exclusivas'
  }
];

export const products: ProductType[] = [
  // Cuidados com o Cabelo
  {
    id: 1,
    name: 'Pomada Modeladora Matte',
    description: 'Pomada modeladora com acabamento fosco para um visual natural',
    price: 49.90,
    category: 'hair-care',
    popular: true
  },
  {
    id: 2,
    name: 'Shampoo Antiqueda Premium',
    description: 'Shampoo fortalecedor com ativos naturais',
    price: 59.90,
    category: 'hair-care'
  },
  {
    id: 3,
    name: 'Máscara de Hidratação Profunda',
    description: 'Tratamento intensivo para cabelos danificados',
    price: 75.90,
    category: 'hair-care'
  },

  // Cuidados com a Barba
  {
    id: 4,
    name: 'Óleo para Barba Premium',
    description: 'Óleo hidratante com fragrância amadeirada',
    price: 45.90,
    category: 'beard-care',
    popular: true
  },
  {
    id: 5,
    name: 'Balm para Barba',
    description: 'Balm modelador e hidratante para barba',
    price: 39.90,
    category: 'beard-care'
  },
  {
    id: 6,
    name: 'Kit Barba Completo',
    description: 'Kit com shampoo, óleo e pente para barba',
    price: 129.90,
    category: 'beard-care',
    popular: true
  },

  // Cuidados com a Pele
  {
    id: 7,
    name: 'Loção Pós Barba',
    description: 'Loção calmante e refrescante',
    price: 49.90,
    category: 'skin-care'
  },
  {
    id: 8,
    name: 'Hidratante Facial Masculino',
    description: 'Hidratante oil-free para todos os tipos de pele',
    price: 55.90,
    category: 'skin-care'
  },

  // Acessórios
  {
    id: 9,
    name: 'Navalha Profissional',
    description: 'Navalha em aço inox com cabo em madeira',
    price: 189.90,
    category: 'accessories',
    popular: true
  },
  {
    id: 10,
    name: 'Pente de Madeira Premium',
    description: 'Pente artesanal em madeira nobre',
    price: 79.90,
    category: 'accessories'
  },

  // Perfumaria
  {
    id: 11,
    name: 'Perfume Gentleman',
    description: 'Fragrância masculina com notas amadeiradas',
    price: 199.90,
    category: 'perfumes',
    popular: true
  },
  {
    id: 12,
    name: 'Perfume Sport',
    description: 'Fragrância refrescante para o dia a dia',
    price: 159.90,
    category: 'perfumes'
  }
];
export const examItems = [
  {
    id: 1,
    name: 'Pomada Modeladora Matte',
    description: 'Pomada modeladora com acabamento fosco para um visual natural',
    price: 49.90,
    category: 'hair-care',
    popular: true
  },
  {
    id: 2,
    name: 'Shampoo Antiqueda Premium',
    description: 'Shampoo fortalecedor com ativos naturais',
    price: 59.90,
    category: 'hair-care'
  },
  {
    id: 3,
    name: 'Máscara de Hidratação Profunda',
    description: 'Tratamento intensivo para cabelos danificados',
    price: 75.90,
    category: 'hair-care'
  },

  // Cuidados com a Barba
  {
    id: 4,
    name: 'Óleo para Barba Premium',
    description: 'Óleo hidratante com fragrância amadeirada',
    price: 45.90,
    category: 'beard-care',
    popular: true
  },
  {
    id: 5,
    name: 'Balm para Barba',
    description: 'Balm modelador e hidratante para barba',
    price: 39.90,
    category: 'beard-care'
  },
  {
    id: 6,
    name: 'Kit Barba Completo',
    description: 'Kit com shampoo, óleo e pente para barba',
    price: 129.90,
    category: 'beard-care',
    popular: true
  },

  // Cuidados com a Pele
  {
    id: 7,
    name: 'Loção Pós Barba',
    description: 'Loção calmante e refrescante',
    price: 49.90,
    category: 'skin-care'
  },
  {
    id: 8,
    name: 'Hidratante Facial Masculino',
    description: 'Hidratante oil-free para todos os tipos de pele',
    price: 55.90,
    category: 'skin-care'
  },

  // Acessórios
  {
    id: 9,
    name: 'Navalha Profissional',
    description: 'Navalha em aço inox com cabo em madeira',
    price: 189.90,
    category: 'accessories',
    popular: true
  },
  {
    id: 10,
    name: 'Pente de Madeira Premium',
    description: 'Pente artesanal em madeira nobre',
    price: 79.90,
    category: 'accessories'
  },

  // Perfumaria
  {
    id: 11,
    name: 'Perfume Gentleman',
    description: 'Fragrância masculina com notas amadeiradas',
    price: 199.90,
    category: 'perfumes',
    popular: true
  },
  {
    id: 12,
    name: 'Perfume Sport',
    description: 'Fragrância refrescante para o dia a dia',
    price: 159.90,
    category: 'perfumes'
  }
];