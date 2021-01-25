import styled from 'styled-components';
import useSWR from 'swr';
import { TAccInfo } from '../types/types';

const url = 'https://jsonplaceholder.typicode.com/posts';
// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Accordion() {
  const { data, error } = useSWR<TAccInfo[]>(url, fetcher);
  if (!data) return <h1>Loading..</h1>;
  if (error) return <h1>Error</h1>;
  const posts = data.slice(0, 10);
  console.log(posts);
  return <h1>Acc</h1>;
}
