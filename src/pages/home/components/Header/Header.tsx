import React, { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  return (
    <header className='top-menu'>
      <NavLink to={'/'} >
        Home
      </NavLink>
      <NavLink to={'/about'}>
        About
      </NavLink>
      <NavLink to={'/project'}>
        Projects
      </NavLink>
      <NavLink to={'/blog'}>
        Blog
      </NavLink>
    </header>
  );
};

export default Header;
