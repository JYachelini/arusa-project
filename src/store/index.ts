import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './features/cart';
import homeReducer from './features/home';
import footerReducer from './features/footer';

const persistCartConfig = {
  key: 'cart',
  storage,
  whitelist: ['products', 'totalPrice', 'totalItems']
};

const store = configureStore({
  reducer: {
    cart: persistReducer<ReturnType<typeof cartReducer>>(
      persistCartConfig,
      cartReducer
    ),
    home: homeReducer,
    footer: footerReducer
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
