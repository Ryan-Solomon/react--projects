import styled from 'styled-components';
import { TMovie } from '../types/types';

type TProps = {
  movie: TMovie;
};

export default function Movie({ movie }: TProps) {
  const { poster_path, title, vote_average } = movie;
  console.log(poster_path);
  return (
    <MovieContainer>
      <MovieTitle>{title}</MovieTitle>
      <MovieImage src={poster_path} alt='movie' />
      <MovieVoteText>Vote Average: {vote_average}</MovieVoteText>
    </MovieContainer>
  );
}

const MovieContainer = styled.div``;

const MovieImage = styled.img``;

const MovieTitle = styled.h2`
  color: white;
`;

const MovieVoteText = styled.h3`
  color: white;
`;
