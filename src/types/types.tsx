export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type TStatus = 'LOADING' | 'ERROR' | 'FULFILLED';
