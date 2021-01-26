import useSWR from 'swr';
import { Drink } from '../../types/types';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

type Response = {
  drinks: Drink[];
};

export const useCocktails = (searchTerm: string) => {
  const url = `${baseUrl}${searchTerm}`;
  const { data, error } = useSWR<Response>(url, fetcher);

  return {
    isLoading: data ? false : true,
    data: data?.drinks,
    error,
  };
};
