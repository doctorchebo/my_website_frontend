import React from 'react';
import AppRoutes from '../application/routes/AppRoutes';
import Header from './home/components/Header/Header';
import PersonalCard from './home/components/PersonalCard/ProfileCard/PersonalCard';
import './Navigator.css';

const Navigator = () => {
  return (
    <div className='wrapper'>
      <div className='header'>
        <Header />
      </div>
      <div className='body'>
        <AppRoutes />
      </div>
    </div>
  );
};

export default Navigator;
