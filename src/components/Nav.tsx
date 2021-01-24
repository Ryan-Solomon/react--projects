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

const NavContainer = styled.nav``;

const NavList = styled.ul``;

const NavItem = styled.li``;
