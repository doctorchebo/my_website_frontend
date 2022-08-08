import React from 'react';
import AxiosService from '../../services/AxiosService';

const Logout = () => {
  const handleLogout = () => {
    AxiosService.logout();
  };
  return (
    <div className='body-container'>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
