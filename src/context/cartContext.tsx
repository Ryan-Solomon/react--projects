import React, { createContext, FC, ReactNode, useContext } from 'react';
import { Drink, TCartContext } from '../types/types';

const initialContextState: TCartContext = {
  items: [],
  addToCart: (i: Drink) => null,
  removeFromCart: (i: string) => null,
  clearCart: () => null,
};

const CartContext = createContext(initialContextState);

const cartReducer = (state: Drink[], action: any) => {
  switch (action.type) {
    case 'ADD':
      return {};
    case 'REMOVE':
      return {};
    case 'CLEAR':
      return {};
    default:
      throw new Error('Action not supported');
  }
};

export const ContextProvider: FC<ReactNode> = ({ children }) => {
  const [items, setItems] = useReducer<Drink[]>(cartReducer, []);
  const value = {};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
