import styled from 'styled-components';
import { useCartContext } from '../context/cartContext';

export const Cart = () => {
  const { items } = useCartContext();

  if (items.length < 1) return <h1>No Items homie</h1>;
  return (
    <CartContainer>
      {items.map((item) => (
        <h1 key={item.idDrink}>{item.strDrink}</h1>
      ))}
    </CartContainer>
  );
};

const CartContainer = styled.div``;
