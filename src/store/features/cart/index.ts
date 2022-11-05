import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICart } from '../../../interfaces/cart.interface';
import { IProduct } from '../../../interfaces/product.interface';

const initialState: ICart = {
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart != null) itemInCart.quantity++;
      else state.products.push({ ...action.payload, quantity: 1 });
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item != null) item.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item != null)
        if (item.quantity === 1) item.quantity = 1;
        else item.quantity--;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item != null) {
        const removeItem = state.products.filter(
          (item) => item.id !== action.payload
        );
        console.log(removeItem);
        state.products = removeItem;
      }
    }
  }
});

export const { addProduct, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
