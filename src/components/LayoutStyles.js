import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #133337;
  padding: 20px;
`;

export const Nav = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    font-weight: 800;
    color: #ffa500;
  }

  &.active {
    font-weight: 800;
    color: #ffa500;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
`;
