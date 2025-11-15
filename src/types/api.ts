export interface Product {
  id: number;
  brand: string;
  name: string;
  price: string;
  image: string;
}

export interface CollectionsResponse {
  collections: Product[];
}
