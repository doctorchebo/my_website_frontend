import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About/About';
import Blog from '../../pages/Blog/Blog';
import ContactMe from '../../pages/contactMe/ContactMe';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Projects from '../../pages/Projects/Projects';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact_me' element={<ContactMe />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
