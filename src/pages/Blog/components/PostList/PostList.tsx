import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../../../application/store/Reducers/AuthReducer/useAuthStore';
import { useBlogStore } from '../../../../application/store/Reducers/BlogReducer/useBlogStore';
import PostCard from '../PostCard/PostCard';

export interface Category {
  id: number;
  name: string;
}

export interface Result {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  content: string;
  created_at: string;
  category: Category[];
  key?: number;
}

export interface IPost {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

const PostList = () => {
  const { auth, onLogout } = useAuthStore();
  const { onGetPosts, blogs } = useBlogStore();
  useEffect(() => {
    onGetPosts();
  }, []);

  return <div>{JSON.stringify(blogs.posts, null, 2)}</div>;
};

export default PostList;
