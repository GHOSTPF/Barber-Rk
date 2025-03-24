export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  prepInfo?: string;
  popular?: boolean;
  image?: string; 
}

export interface ExamItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
}

export interface CartItemType extends ProductType {
  quantity: number;
}

export interface CategoryType {
  id: string;
  name: string;
  icon: string;
  description: string;
}