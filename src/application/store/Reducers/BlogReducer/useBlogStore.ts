import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../Store';
import { onGetPosts } from './actions';


export const useBlogStore = () => {
  const dispatch = useAppDispatch();
  const blogs = useSelector((state: RootState) => state.blog);
  const onGetPostsCallback = useCallback(() => {
    dispatch(onGetPosts());
  }, [dispatch]);
  return { blogs, onGetPosts: onGetPostsCallback };
};
