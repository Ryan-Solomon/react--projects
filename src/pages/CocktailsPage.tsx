import React from 'react';
import styled from 'styled-components';
import { Cocktails } from '../components/Cocktails';
import Nav from '../components/Nav';

export const CocktailsPage = () => {
  return (
    <>
      <Nav />
      <Cocktails />
    </>
  );
};
