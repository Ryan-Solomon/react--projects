import styled from 'styled-components';
import useSWR from 'swr';

const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_UPCOMING_MOVIE_SEARCH_API_KEY}&language=en-US&page=1`;
// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Movies() {
  const { data, error } = useSWR(url, fetcher);
  console.log(data);
  return (
    <MoviesContainer>
      <h1>Movies</h1>
    </MoviesContainer>
  );
}

const MoviesContainer = styled.div``;
