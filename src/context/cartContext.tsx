import React, { createContext, FC, ReactNode, useContext } from 'react';

const CartContext = createContext({});

const ContextProvider: FC<ReactNode> = ({ children }) => {
  const value = {};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};
