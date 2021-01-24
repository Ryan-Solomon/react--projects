import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isConstructorDeclaration } from 'typescript';
import Nav from '../components/Nav';
import { TStatus, TUser } from '../types/types';

export default function BirthdayReminderPage() {
  const [status, setStatus] = useState<TStatus>('LOADING');
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (res.status !== 200) {
          throw new Error('Status is not ok');
        }
        const data = await res.json();
        setUsers(data);
        setStatus('FULFILLED');
      } catch (error) {
        setStatus('ERROR');
        console.error(error.message);
      }
    };
    getUsers();
  }, []);

  if (status === 'LOADING') return <h1>Loading..</h1>;
  if (status === 'ERROR' || users.length === 0) return <h1>Error</h1>;

  return (
    <Container>
      <Nav />
      <h1>Birthday Reminder</h1>
    </Container>
  );
}

const Container = styled.div``;
