import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Drink } from '../types/types';
import { DrinkComponent } from './Drink';
import { useCocktails } from './swr/useCocktails';

type Data = {
  data: undefined | Drink[];
  error: any;
  isLoading: boolean;
};

export const Cocktails = () => {
  const [{ data, error, isLoading }, setCocktails] = useState<Data>({
    data: undefined,
    error: null,
    isLoading: false,
  });
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const { data, error, isLoading } = useCocktails(searchTerm);
    setCocktails({ data, error, isLoading });
  }, [searchTerm]);

  if (isLoading) return <h1>loading..</h1>;
  if (error) return <h1>Error..</h1>;
  console.log(data);
  return (
    <Container>
      <h1>Drinks</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchTerm(input);
        }}
      >
        <label htmlFor='search-input'>Search Drink</label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id='search-input'
          type='text'
        />
      </form>
      <DrinksContainer>
        {data?.map((drink) => (
          <DrinkComponent key={drink.idDrink} drink={drink} />
        ))}
      </DrinksContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const DrinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
