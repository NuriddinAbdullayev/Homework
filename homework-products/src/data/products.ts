export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Phone' | 'Laptop' | 'Headphones' | 'Watch';
  image: string;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'iPhone 16', price: 1200, category: 'Phone', image: '📱' },
  { id: 2, name: 'MacBook Pro 16"', price: 2400, category: 'Laptop', image: '💻' },
  { id: 3, name: 'AirPods Max', price: 550, category: 'Headphones', image: '🎧' },
  { id: 4, name: 'Apple Watch Ultra', price: 800, category: 'Watch', image: '⌚' },
  { id: 5, name: 'Samsung Galaxy S24', price: 1000, category: 'Phone', image: '📱' },
  { id: 6, name: 'Dell XPS 15', price: 1800, category: 'Laptop', image: '💻' },
  { id: 7, name: 'Sony WH-1000XM5', price: 400, category: 'Headphones', image: '🎧' },
  { id: 8, name: 'Galaxy Watch 6', price: 300, category: 'Watch', image: '⌚' },
];