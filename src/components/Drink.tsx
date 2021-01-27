import React, { FC } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';
import { Drink } from '../types/types';

type Props = {
  drink: Drink;
  isInCart?: boolean;
};

export const DrinkComponent: FC<Props> = ({ drink, isInCart = false }) => {
  const { strDrink, strDrinkThumb } = drink;
  const { addToCart, removeFromCart } = useCartContext();

  return (
    <DrinkContainer>
      <DrinkImage src={strDrinkThumb} alt='drink' />
      <DrinkTitle>{strDrink}</DrinkTitle>
      {isInCart ? (
        <AddToCart onClick={() => removeFromCart(drink.idDrink)}>
          Remove From Cart
        </AddToCart>
      ) : (
        <AddToCart onClick={() => addToCart(drink)}>Add To Cart</AddToCart>
      )}
    </DrinkContainer>
  );
};

const DrinkContainer = styled.div``;

const DrinkTitle = styled.h2`
  color: #fff;
`;

const DrinkImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const AddToCart = styled.button`
  background: white;
  padding: 0.3rem;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
    color: #fff;
    cursor: pointer;
    transform: scale(0.95);
  }
`;
