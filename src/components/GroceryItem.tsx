import styled from 'styled-components';
import { TItem } from './GroceryList';

type TProps = {
  item: TItem;
};

export default function GroceryItem({ item }: TProps) {
  return <h1>{item.text}</h1>;
}
