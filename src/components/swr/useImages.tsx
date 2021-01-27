import useSWR from 'swr';
import { Drink } from '../../types/types';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url = `https://api.unsplash.com/photos?page=1/?client_id=${process.env.REACT_APP_UNSPLASH_AK}`;

type Response = {
  drinks: Drink[];
};

export const useImages = () => {
  const { data, error } = useSWR(url, fetcher);
  console.log(data);

  return {
    isLoading: data ? false : true,
    error,
  };
};
