import { useState } from 'react';
import styled from 'styled-components';
import { TTour } from '../types/types';

type TProps = {
  tour: TTour;
};

export default function Tour({ tour }: TProps) {
  const { image, info, name, price } = tour;
  const [show, setShow] = useState(true);

  return (
    <TourContainer show={show}>
      <TourImage src={image} alt='tour' />
      <TourDetails>
        <TourHeading>{name}</TourHeading>
        <TourInfo>{info}</TourInfo>
      </TourDetails>
      <RemoveTourButton onClick={() => setShow(false)}>
        Not Interested
      </RemoveTourButton>
    </TourContainer>
  );
}

type TourContainerProps = {
  show: boolean;
};

const TourContainer = styled.div<TourContainerProps>`
  background: #fff;
  width: 40rem;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const TourDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`;

const TourImage = styled.img`
  width: 100%;
`;

const TourHeading = styled.h2`
  color: #333;
`;

const TourInfo = styled.p`
  color: #444;
`;

const RemoveTourButton = styled.button``;
