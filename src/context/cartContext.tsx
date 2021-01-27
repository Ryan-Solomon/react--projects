import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import { Drink, TCartContext } from '../types/types';

const initialContextState: TCartContext = {
  items: [],
  addToCart: (i: Drink) => null,
  removeFromCart: (i: string) => null,
  clearCart: () => null,
};

const CartContext = createContext(initialContextState);

type TAction =
  | {
      type: 'ADD';
      payload: Drink;
    }
  | {
      type: 'REMOVE';
      payload: string;
    }
  | {
      type: 'CLEAR';
    };

const cartReducer = (state: Drink[], action: TAction): Drink[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return [...state.filter((item) => item.idDrink !== action.payload)];
    case 'CLEAR':
      return [];
    default:
      throw new Error('Action not supported');
  }
};

const initialState: Drink[] = [];

export const ContextProvider: FC<ReactNode> = ({ children }) => {
  const [items, setItems] = useReducer(cartReducer, initialState);
  const value = {};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
