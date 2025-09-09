export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
  inStock?: boolean;
  stockCount?: number;
}

export interface Category {
  name: string;
  image: string;
  count: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedOptions?: Record<string, string>;
}

export interface FilterOptions {
  category: string;
  priceRange?: [number, number];
  rating?: number;
  inStock?: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';
