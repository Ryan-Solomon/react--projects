import styled from 'styled-components';

const url = `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_UPCOMING_MOVIE_SEARCH_API_KEY}<&language=en-US`;

export default function Movies() {
  return (
    <MoviesContainer>
      <h1>Movies</h1>
    </MoviesContainer>
  );
}

const MoviesContainer = styled.div``;
