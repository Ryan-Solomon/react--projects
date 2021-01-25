import styled from 'styled-components';
import { TMovie } from '../types/types';

type TProps = {
  movie: TMovie;
};

export default function Movie({ movie }: TProps) {
  const { poster_path, title, vote_average } = movie;

  return (
    <MovieContainer>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt='movie'
      />
      <MovieDetails>
        <MovieTitle>{title}</MovieTitle>
        <MovieVoteText>Vote Average: {vote_average}</MovieVoteText>
      </MovieDetails>
    </MovieContainer>
  );
}

const MovieDetails = styled.div`
  display: none;
  position: absolute;
  bottom: 0rem;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.8);
`;

const MovieContainer = styled.div`
  position: relative;
  box-shadow: 2px 2px 10px grey;
  &:hover ${MovieDetails} {
    display: block;
  }
`;

const MovieImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MovieTitle = styled.h2`
  color: white;
`;

const MovieVoteText = styled.h3`
  color: white;
`;
