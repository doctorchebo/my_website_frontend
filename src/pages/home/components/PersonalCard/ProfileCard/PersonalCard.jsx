import React from 'react';
import './PersonalCard.css';
import locale from './locale/en.json';
import ContactButton from './components/ContactButton/ContactButton';
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ProfileImage from '../ProfileImage/ProfileImage';

const PersonalCard = () => {
  const { title, subtitle } = locale;
  return (
    <div className='personal-card-container'>
      <ProfileImage />
      <h3 className='title'>{title}</h3>
      <h4 className='subtitle'>{subtitle}</h4>
      <div className='contact-button'>
        <ContactButton />
      </div>

      <IconContext.Provider value={{ color: '#006699', size: 40 }}>
        <div className='social-media'>
          <FaFacebook />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default PersonalCard;
