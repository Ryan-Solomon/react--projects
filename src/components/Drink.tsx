import React, { FC } from 'react';
import styled from 'styled-components';
import { Drink } from '../types/types';

type Props = {
  drink: Drink;
};

export const DrinkComponent: FC<Props> = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb } = drink;

  return <h1>{strDrink}</h1>;
};
