import styled from 'styled-components';
import { TUser } from '../types/types';

type TProps = {
  user: TUser;
};

export default function BirthdayReminderCard({ user }: TProps) {
  const { email, name, username } = user;

  return (
    <CardContainer>
      <CardHeader>{name}</CardHeader>
      <CardSubheading>{email}</CardSubheading>
      <CardSubheading>{username}</CardSubheading>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.h2`
  color: #333;
`;

const CardSubheading = styled.h3`
  color: #333;
`;
