import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ICredentials } from '../../../../pages/login/Login';
import { RootState, useAppDispatch } from '../../Store';
import { onLogin, onLogout } from './actions';

export const useAuthStore = () => {
  const dispatch = useAppDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const onLoginCallback = useCallback(
    (credentials: ICredentials) => {
      dispatch(onLogin(credentials));
    },
    []
  );
  const onLogoutCallback = useCallback(()=>{
    dispatch(onLogout());
  }, [])
  return {
    auth,
    onLogin: onLoginCallback,
    onLogout: onLogoutCallback
  };
};
