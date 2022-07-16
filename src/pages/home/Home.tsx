import React from 'react';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import PersonalCard from './components/PersonalCard/PersonalCard';
import './Home.css';

const Home = () => {
  return (
    <div className='wrapper'>
      <div className='header'>
        <Header />
      </div>
      <div className='personal-card'>
        <PersonalCard />
      </div>
      <div className='body'>
        <Body />
      </div>
    </div>
  );
};

export default Home;
