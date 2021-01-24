import styled from 'styled-components';
import Nav from '../components/Nav';

export default function HomePage() {
  return (
    <HomeContainer>
      <Nav />
      <h1>Home Page</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  color: #fff;
`;
