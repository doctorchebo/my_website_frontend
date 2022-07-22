import React from 'react';
import './Body.css';
import { body } from './locale/en';
import react from '../../../../assets/images/react-logo.png';
import spring from '../../../../assets/images/spring-boot-logo.png';
import django from '../../../../assets/images/django-logo.png';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
const Body = () => {
  const { title, content, content1, content2, content3 } = body;
  return (
    <div className='body'>
      <div className='title'>{title}</div>
      <p>{content}</p>
      <p>{content1}</p>
      <div className='images-frameworks'>
        <img src={react} alt='react' />
        <img src={spring} alt='react' />
        <img src={django} alt='react' />
      </div>
      <p>{content2}</p>
      <p>{content3}</p>
      <button className='github-button'>
        <a className='github-link' href='https://github.com/doctorchebo'>
          GitHub <FaGithub size={40} color={'white'} />
        </a>
      </button>
    </div>
  );
};

export default Body;
