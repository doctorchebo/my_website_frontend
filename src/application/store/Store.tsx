import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import blogReducer from './Reducers/BlogReducer/BlogSlice';
import authReducer from './Reducers/AuthReducer/AuthSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
