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
