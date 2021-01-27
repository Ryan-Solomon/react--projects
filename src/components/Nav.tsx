import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavContainer show={showNav}>
      {showNav ? (
        <>
          <Toggle onClick={() => setShowNav(false)}>X</Toggle>
          <NavList>
            <Link to='/'>
              <NavItem>Home</NavItem>
            </Link>
            <Link to='/birthday'>
              <NavItem>Birthday Reminder</NavItem>
            </Link>
            <Link to='/tours'>
              <NavItem>Tours</NavItem>
            </Link>
            <Link to='/movies'>
              <NavItem>Movies</NavItem>
            </Link>
            <Link to='/accordion'>
              <NavItem>Accordion</NavItem>
            </Link>
            <Link to='/groceries'>
              <NavItem>Grocery List</NavItem>
            </Link>
            <Link to='/cocktails'>
              <NavItem>Cocktails</NavItem>
            </Link>
            <Link to='/cart'>
              <NavItem>Cart</NavItem>
            </Link>
          </NavList>
        </>
      ) : (
        <FaBars onClick={() => setShowNav(true)} size={30} color='white' />
      )}
    </NavContainer>
  );
}

type TNavProps = {
  show: boolean;
};

const NavContainer = styled.nav<TNavProps>`
  padding: 1.5rem;
  display: flex;
  color: white;
  flex-direction: column;
  box-shadow: ${({ show }) => (show ? '2px 2px 10px #c5b1b1' : '')};
  background: ${({ show }) => (show ? '#1a1a1a' : '')};
  width: 32rem;
  position: absolute;
  margin-left: ${({ show }) => (show ? '' : '2rem')};
`;

const Toggle = styled.div`
  color: #d0d0d0;
  position: absolute;
  right: 1.5rem;
  font-size: 2rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    color: #fff;
  }
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  color: #d0d0d0;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  transition: all 0.2s ease;
  padding: 1rem;
  width: 80%;

  &:hover {
    color: #fff;
    transform: scale(0.98);
    cursor: pointer;
  }
`;
