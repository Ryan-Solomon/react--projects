import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const useCocktails = (searchTerm: string) => {
  const url = `${baseUrl}${searchTerm}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    isLoading: data ? false : true,
    data,
    error,
  };
};
