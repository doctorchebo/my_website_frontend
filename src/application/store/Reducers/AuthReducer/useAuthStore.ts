import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../Store';
import { onLogin } from './actions';

export const useAuthStore = () => {
  const dispatch = useAppDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const onLoginCallback = useCallback(
    (credentials: any) => {
      dispatch(onLogin(credentials));
    },
    [dispatch]
  );
  return {
    auth,
    onLogin: onLoginCallback,
  };
};
