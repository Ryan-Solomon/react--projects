import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { DrinkComponent as Drink } from './Drink';

export const Cart = () => {
  const { items, clearCart } = useCartContext();

  if (items.length < 1) return <h1>No Items homie</h1>;
  return (
    <>
      <CartContainer>
        {items.map((item) => (
          <Drink isInCart={true} drink={item} key={item.idDrink} />
        ))}
        <button onClick={clearCart}>Clear</button>
      </CartContainer>
      <h1>Item Count: {items.length}</h1>
    </>
  );
};

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
