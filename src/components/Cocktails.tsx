import React from 'react';
import styled from 'styled-components';
import { DrinkComponent } from './Drink';
import { useCocktails } from './swr/useCocktails';

export const Cocktails = () => {
  const { data, error, isLoading } = useCocktails('margarita');
  if (isLoading) return <h1>loading..</h1>;
  if (error) return <h1>Error..</h1>;
  console.log(data);
  return (
    <>
      <h1>Drinks</h1>
      <DrinksContainer>
        {data?.map((drink) => (
          <DrinkComponent key={drink.idDrink} drink={drink} />
        ))}
      </DrinksContainer>
    </>
  );
};

const DrinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
