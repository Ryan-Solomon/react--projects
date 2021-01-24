import styled from 'styled-components';
import { TTour } from '../types/types';

type TProps = {
  tour: TTour;
};

export default function Tour({ tour }: TProps) {
  const { image, info, name, price } = tour;

  return <h1>{name}</h1>;
}
