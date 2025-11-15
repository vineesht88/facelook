export interface Product {
  id: number;
  title: string;
  sub: string;
  price: string;
  image: string;
  category?: string;
  brand?: string;
  gallery?: string[];
}

export interface CollectionsResponse {
  collections: Product[];
}

export interface ProductsResponse {
  products: Product[];
}
