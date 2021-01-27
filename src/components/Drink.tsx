import React, { FC } from 'react';
import styled from 'styled-components';
import { Drink } from '../types/types';

type Props = {
  drink: Drink;
};

export const DrinkComponent: FC<Props> = ({ drink }) => {
  const { strDrink, strDrinkThumb } = drink;

  return (
    <DrinkContainer>
      <DrinkImage src={strDrinkThumb} alt='drink' />
      <DrinkTitle>{strDrink}</DrinkTitle>
      <AddToCart>Add To Cart</AddToCart>
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
