import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isConstructorDeclaration } from 'typescript';
import BirthdayReminderCard from '../components/BrithdayReminderCard';
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
  if (status === 'ERROR') return <h1>Error</h1>;

  console.log(users);

  return (
    <>
      <Nav />
      <Container>
        <Title>{users.length} birthdays today</Title>
        {users.map((user) => (
          <BirthdayReminderCard key={user.id} user={user} />
        ))}
        <ClearButton onClick={() => setUsers([])}>Clear Reminders</ClearButton>
      </Container>
    </>
  );
}

const Container = styled.div`
  background: #fff;
`;

const Title = styled.h2`
  color: #333;
`;

const ClearButton = styled.button`
  background: #222;
  color: #fff;
`;
