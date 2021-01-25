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
  return (
    <AccordionContainer>
      <AccordionHeader>This is my accordion</AccordionHeader>
      <AccordionItemsContainer>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
      </AccordionItemsContainer>
    </AccordionContainer>
  );
}

const AccordionContainer = styled.div`
  background: #1c1c1c;
  box-shadow: 2px 2px 10px grey;
  width: 60vw;
  margin: auto;
  margin-top: 5rem;
`;

const AccordionHeader = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const AccordionItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
