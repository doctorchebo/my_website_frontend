import React from 'react';
import PostList from './components/PostList/PostList';
import './blog.css';

const Blog = () => {
  return (
      <div className='blog-container'>
        <PostList />
      </div>
  );
};

export default Blog;
