import styled from 'styled-components';
import useSWR from 'swr';
import { TUpcomingMoviesResponse } from '../types/types';

const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_UPCOMING_MOVIE_SEARCH_API_KEY}&language=en-US&page=1`;
// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Movies() {
  const { data, error } = useSWR<TUpcomingMoviesResponse>(url, fetcher);
  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <MoviesContainer>
      <h1>Movies</h1>
      {data.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MoviesContainer>
  );
}

const MoviesContainer = styled.div``;
