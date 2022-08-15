import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../../../../application/store/Reducers/AuthReducer/useAuthStore';
import './Header.css';

const Header = () => {
  const { auth } = useAuthStore();
  console.log(JSON.stringify(auth));

  return (
    <header className='top-menu'>
      <NavLink className='header-link' to={'/'}>
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
      {!auth.isLoggedIn && (
        <NavLink className='header-link' to={'/login'}>
          Login
        </NavLink>
      )}
      {auth.isLoggedIn && (
        <NavLink className='header-link' to={'/logout'}>
          Logout
        </NavLink>
      )}
    </header>
  );
};

export default Header;
