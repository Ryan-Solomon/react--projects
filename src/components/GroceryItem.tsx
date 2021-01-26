import styled from 'styled-components';
import { TItem } from './GroceryList';

type TProps = {
  item: TItem;
};

export default function GroceryItem({ item }: TProps) {
  return (
    <Container>
      <ItemText>{item.text}</ItemText>
      <RemoveButton>X</RemoveButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 50%;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.h3`
  color: #fff;
  padding: 0.5rem;
  font-size: 1.5rem;
`;

const RemoveButton = styled.button`
  background: none;
  color: white;
  border: 1px solid white;
  padding: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    color: #333;
    border: 1px solid black;
    cursor: pointer;
  }
`;
