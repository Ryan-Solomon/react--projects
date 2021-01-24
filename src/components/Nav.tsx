import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <NavContainer>
      <NavList>
        <Link to='/'>
          <NavItem>Home</NavItem>
        </Link>
        <Link to='/birthday'>
          <NavItem>Birthday Reminder</NavItem>
        </Link>
      </NavList>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  background: #1a1a1a;
  padding: 1.5rem;
  box-shadow: 2px 2px 10px #222;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  color: white;
`;

const NavItem = styled.li`
  color: #d0d0d0;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  margin: 0px 2rem;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    transform: scale(0.98);
    cursor: pointer;
  }
`;
