import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../application/store/Reducers/AuthReducer/useAuthStore';

const Logout = () => {
  const navigate = useNavigate();
  const { onLogout } = useAuthStore();
  const handleClick = () => {
    onLogout();
    navigate('/');
  }
  return (
    <div className='body-container'>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Logout;
