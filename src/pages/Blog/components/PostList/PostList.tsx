import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import AxiosService from '../../../../services/AxiosService';
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
  const [posts, setPosts] = useState<Result[] | null>(null);
  useEffect(() => {
    AxiosService.getPosts().then((res) => {
      setPosts(res.data.results);
    });
  }, []);

  return (
    <div>
      {posts?.map((post, index) => (
        <PostCard
          id={post.id}
          title={post.title}
          slug={post.slug}
          image_url={post.image_url}
          content={post.content}
          created_at={post.created_at}
          category={post.category}
          key={index}
        />
      ))}
      
    </div>
  );
};

export default PostList;
