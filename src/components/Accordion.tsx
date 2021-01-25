import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { TAccInfo } from '../types/types';
import AccItem from './AccItem';

const url = 'https://jsonplaceholder.typicode.com/posts';
// @ts-ignore
const fetcher = (...args) => axios.get(...args).then((res) => res.data);

export default function Accordion() {
  const { data, error } = useSWR<TAccInfo[]>(url, fetcher);
  if (!data) return <h1>Loading..</h1>;
  if (error) return <h1>Error</h1>;
  const posts = data.slice(0, 10);
  return (
    <AccordionContainer>
      <AccordionHeader>This is my accordion</AccordionHeader>
      <AccordionItemsContainer>
        {posts.map((item) => (
          <AccItem item={item} key={item.id} />
        ))}
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
  margin-bottom: 5rem;
`;

const AccordionHeader = styled.h2`
  text-align: center;
  font-size: 3rem;
  padding: 1rem;
  color: #dcdcdc;
`;

const AccordionItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
