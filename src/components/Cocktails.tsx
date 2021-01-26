import styled from 'styled-components';
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
          <Drink key={drink.idDrink} drink={drink} />
        ))}
      </DrinksContainer>
    </>
  );
};

const DrinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
