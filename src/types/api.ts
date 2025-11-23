export interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  image: string;
  category?: string;
  gallery?: string[];
}

export interface CollectionsResponse {
  collections: Product[];
}

export interface ProductsResponse {
  products: Product[];
}
