import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Loading, Nav, NavLinkStyled } from './LayoutStyles';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loading>...Loading</Loading>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
