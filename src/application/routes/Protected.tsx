import React from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
export interface IProtected {
  hasAccess: boolean;
  redirect: string;
}
const Protected = ({ hasAccess, redirect }: IProtected) => {
  return <>{hasAccess ? <Outlet /> : <Navigate to={redirect} />}</>;
};

export default Protected;
