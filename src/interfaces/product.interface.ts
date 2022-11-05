export interface IProduct {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  materials?: string[];
  producedIn?: string[];
  categories?: string[];
  sizeY: number;
  sizeX: number;
}

export interface IProductInCart {
  id: number;
  title: string;
  price: number;
  description?: string;
  imageUrl: string;
  materials?: string[];
  producedIn?: string[];
  categories?: string[];
  sizeY: number;
  sizeX: number;
  quantity: number;
}
