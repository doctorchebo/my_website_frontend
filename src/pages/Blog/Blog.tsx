import React, { useEffect } from 'react';
import PostList from './components/PostList/PostList';
import './blog.css';
import { useAuthStore } from '../../application/store/Reducers/AuthReducer/useAuthStore';

const Blog = () => {
  const { onLogout } = useAuthStore();

  useEffect(() => {
    const handler = () => {
      if (!localStorage.getItem('access_token')) {
        onLogout();
      }
    };
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('storage', handler);
    };
  }, []);
  return (
    <div className='body-container'>
      <PostList />
    </div>
  );
};

export default Blog;
