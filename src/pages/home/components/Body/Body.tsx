import React from 'react';
import './Body.css';
import { body } from './locale/en';
import react from '../../../../assets/images/react-logo.png';
import spring from '../../../../assets/images/spring-boot-logo.png';
import django from '../../../../assets/images/django-logo.png';
import { FaGithub } from 'react-icons/fa';
import Typhography from '../../../../components/Typography/Typhography';
const Body = () => {
  const { title, content, content1, content2, content3 } = body;
  return (
    <div className='body-container'>
      <Typhography content={title} size={2} color='#006699' type='title'/>
      <Typhography content={content} size='small' type='description' position='justify' />
      <Typhography content={content1} size='small' type='description' position='justify' />
      <div className='images-frameworks'>
        <img src={react} alt='react' />
        <img src={spring} alt='react' />
        <img src={django} alt='react' />
      </div>
      <Typhography content={content2} size='small' type='description' position='justify' />
      <Typhography content={content3} size='small' type='description' position='justify' />
      <button className='github-button'>
        <a className='github-link' href='https://github.com/doctorchebo'>
          GitHub <FaGithub size={40} color={'white'} />
        </a>
      </button>
    </div>
  );
};

export default Body;
