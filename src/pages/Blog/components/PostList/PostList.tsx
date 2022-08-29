import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../../../application/store/Reducers/AuthReducer/useAuthStore';
import { useBlogStore } from '../../../../application/store/Reducers/BlogReducer/useBlogStore';
import Typhography from '../../../../components/Typography/Typhography';
import PostCard from '../PostCard/PostCard';
import './postList.css';
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
  const { onGetPosts, blog } = useBlogStore();
  useEffect(() => {
    onGetPosts();
  }, []);

  return (
    <div>
      <Typhography content={'Welcome to my Blog'} size={3} color={'#006699'} />
      <div className="blogList-container">
        {blog.posts.map((post) => {
          return (
            <PostCard
              id={post.id}
              title={post.title}
              slug={post.slug}
              image_url={post.image_url}
              content={post.content}
              created_at={post.created_at}
              category={post.category}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
