export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface Order {
  id: number;
  userId: number;
  total: number;
  status: "pending" | "shipped" | "delivered";
  date: string;
  items: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  joined: string;
}

export interface FilterState {
  search: string;
  sortBy: "price-asc" | "price-desc" | "name";
  page: number;
  category: string;
}