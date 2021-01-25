import React from 'react';
import styled from 'styled-components';
import Movies from '../components/Movies';
import Nav from '../components/Nav';

export default function MoviesPage() {
  return (
    <>
      <Nav />
      <Movies />
    </>
  );
}

const MoviesPageContainer = styled.div``;
