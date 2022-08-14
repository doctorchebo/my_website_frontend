import React, { useEffect, useState } from 'react';
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
  const { onGetPosts, blogs } = useBlogStore();
  const [posts, setPosts] = useState<Result[] | null>(null);
  useEffect(() => {
    // AxiosService.getPosts().then((res) => {
    //   setPosts(res.data.results);
    // });
    onGetPosts();
  }, []);

  return <div>{JSON.stringify(blogs.posts, null, 2)}</div>;
};

export default PostList;
