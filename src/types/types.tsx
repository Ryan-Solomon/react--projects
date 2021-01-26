import { SpawnSyncOptionsWithStringEncoding } from 'child_process';

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type TTour = {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
};

export type TStatus = 'LOADING' | 'ERROR' | 'FULFILLED';

export type TMovie = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
};

export type TUpcomingMoviesResponse = {
  results: TMovie[];
};

export type TAccInfo = {
  id: number;
  title: string;
  body: string;
};

export type Drink = {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
};
