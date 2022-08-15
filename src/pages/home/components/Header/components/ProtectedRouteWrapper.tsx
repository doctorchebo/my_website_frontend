import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../../../application/store/Reducers/AuthReducer/useAuthStore';

export interface IProtectedRoutes {
  children: ReactElement;
  redirect: string;
}

const ProtectedRouteWrapper = ({ children, redirect }: IProtectedRoutes) => {
  const { auth } = useAuthStore();
  const navigate = useNavigate();
  if (auth.isLoggedIn) {
    return <>{children}</>;
  } else {
    navigate(redirect);
  }
};

export default ProtectedRouteWrapper;
