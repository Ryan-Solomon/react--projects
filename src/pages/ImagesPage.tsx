import React from 'react';
import styled from 'styled-components';
import { Images } from '../components/Images';
import Nav from '../components/Nav';

export const ImagesPage = () => {
  return (
    <ImagesContainer>
      <Images />
    </ImagesContainer>
  );
};

const ImagesContainer = styled.div`
  position: relative;
  top: 6rem;
`;
