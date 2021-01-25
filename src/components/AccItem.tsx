import { useState } from 'react';
import styled from 'styled-components';
import { TAccInfo } from '../types/types';

type TProps = {
  item: TAccInfo;
};

export default function AccItem({ item }: TProps) {
  const { body, title } = item;
  const [show, setShow] = useState(false);
  return (
    <ItemContainer>
      <ItemHeaderContainer>
        <ItemHeader>Q: {title}?</ItemHeader>
        <OpenClose onClick={() => setShow(!show)}>{show ? '-' : '+'}</OpenClose>
      </ItemHeaderContainer>
      {show && <ItemInfo>{body}</ItemInfo>}
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  box-shadow: 1px 1px 4px #8f8f8f;
  width: 100%;
  padding: 2rem;
  margin: 1rem 0px;
`;

const OpenClose = styled.div`
  color: #b3b3b3;
  font-size: 3rem;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: #fff;
  }
`;

const ItemHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemHeader = styled.h2`
  color: #bdbdbd;
  font-size: 2rem;
`;

const ItemInfo = styled.p`
  color: #bdbdbd;
  margin: 1rem 0px;
  font-size: 1.5rem;
`;
