import { createSlice } from '@reduxjs/toolkit';

export interface Category {
  id: number;
  name: string;
}

export interface IPost {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  content: string;
  created_at: string;
  category: Category[];
}

export interface IBlogState {
  posts: IPost[];
}

const blogState: IBlogState = {
  posts: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState: blogState,
  reducers: {
    getPosts(state, action) {
      state.posts.push(action.payload);
    },
  },
});

const { actions, reducer } = blogSlice;

export const { getPosts } = actions;

export default reducer;
