import React, { createContext, FC, ReactNode, useContext } from 'react';
import { Drink, TCartContext } from '../types/types';

const initialContextState: TCartContext = {
  items: [],
  addToCart: (i: Drink) => null,
  removeFromCart: (i: string) => null,
  clearCart: () => null,
};

const CartContext = createContext(initialContextState);

export const ContextProvider: FC<ReactNode> = ({ children }) => {
  const value = {};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
