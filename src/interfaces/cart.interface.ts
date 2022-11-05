import { IProductInCart } from './product.interface';

export interface ICart {
  id?: number;
  products: IProductInCart[];
}
