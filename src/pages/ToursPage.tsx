import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TStatus } from '../types/types';
const url = 'https://course-api.com/react-tours-project';

export default function ToursPage() {
  const [tours, setTours] = useState<any>();
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
        console.log(data);
      } catch (error) {
        setStatus('ERROR');
        console.error(error.message);
      }
    };
    getTours();
  }, []);

  return <h1>Tours</h1>;
}
