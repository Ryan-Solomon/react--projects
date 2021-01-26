import styled from 'styled-components';
import Nav from '../components/Nav';

export default function HomePage() {
  return (
    <HomeContainer>
      <Nav />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  color: #fff;
`;
