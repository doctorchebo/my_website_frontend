import React, { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  return (
    <header className='top-menu'>
      <NavLink className='header-link' to={'/'} >
        Home
      </NavLink>
      <NavLink className='header-link' to={'/about'}>
        About
      </NavLink>
      <NavLink className='header-link' to={'/contact_me'}>
        Contact me
      </NavLink>
      <NavLink className='header-link' to={'/projects'}>
        Projects
      </NavLink>
      <NavLink className='header-link' to={'/blog'}>
        Blog
      </NavLink>
      <NavLink className='header-link' to={'/login'}>
        Login
      </NavLink>
      <NavLink className='header-link' to={'/logout'}>
        Logout
      </NavLink>
    </header>
  );
};

export default Header;
