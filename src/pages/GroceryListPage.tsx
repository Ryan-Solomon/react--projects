import React from 'react';
import styled from 'styled-components';
import GroceryList from '../components/GroceryList';
import Nav from '../components/Nav';

export default function GroceryListPage() {
  return (
    <>
      <Nav />
      <GroceryList />
    </>
  );
}
