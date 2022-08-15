import React from 'react';
import { useAuthStore } from '../../application/store/Reducers/AuthReducer/useAuthStore';

const Logout = () => {
  const { onLogout } = useAuthStore();

  return (
    <div className='body-container'>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
};

export default Logout;
