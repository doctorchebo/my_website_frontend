import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About/About';
import Blog from '../../pages/Blog/Blog';
import Post from '../../pages/Blog/components/Post/Post';
import ContactMe from '../../pages/contactMe/ContactMe';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Logout from '../../pages/Logout/Logout';
import NotFound from '../../pages/NotFound/NotFound';
import Projects from '../../pages/Projects/Projects';
import { useAuthStore } from '../store/Reducers/AuthReducer/useAuthStore';
import Protected from './Protected';

const AppRoutes = () => {
  const { auth } = useAuthStore();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact_me' element={<ContactMe />} />
      <Route path='projects' element={<Projects />} />
      <Route path='blog' element={<Blog />}/>
      <Route path='blog/:slug' element={<Post/>}/>
      <Route
        element={<Protected hasAccess={auth.isLoggedIn} redirect={'/login'} />}
      >
        <Route path='logout' element={<Logout />} />
      </Route>
      <Route
        element={<Protected hasAccess={!auth.isLoggedIn} redirect={'/'} />}
      >
        <Route path='login' element={<Login />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
