import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tour from '../components/Tour';
import { TStatus, TTour } from '../types/types';
const url = 'https://course-api.com/react-tours-project';

export default function ToursPage() {
  const [tours, setTours] = useState<TTour[]>([]);
  const [status, setStatus] = useState<TStatus>('LOADING');

  useEffect(() => {
    const getTours = async () => {
      setStatus('LOADING');
      try {
        const res = await fetch(url);
        if (res.status !== 200) {
          throw new Error('Res status not 200');
        }
        const data = await res.json();
        setTours(data);
        setStatus('FULFILLED');
      } catch (error) {
        setStatus('ERROR');
        console.error(error.message);
      }
    };
    getTours();
  }, []);

  if (status === 'LOADING') return <h1>Loading..</h1>;
  if (status === 'ERROR') return <h1>Error</h1>;

  return (
    <TourContainer>
      <TourTitle>Our Tours</TourTitle>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </TourContainer>
  );
}

const TourContainer = styled.div``;

const TourTitle = styled.h1`
  color: #fff;
`;
