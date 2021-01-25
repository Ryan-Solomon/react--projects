import styled from 'styled-components';
import { TMovie } from '../types/types';

type TProps = {
  movie: TMovie;
};

export default function Movie({ movie }: TProps) {
  return <h1>Movie</h1>;
}
