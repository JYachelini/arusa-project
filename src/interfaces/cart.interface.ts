import { IProduct } from './product.interface'

export interface ICart {
	id?: number
	totalPrice: number
	totalItems: number
	products: IProduct[]
}
