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
      <div>
        <Typhography content={title} size='large-bold' color='#006699' type='title' />
        <Typhography
          content={content}
          size='medium'
          type='description'
          position='justify'
        />
        <Typhography
          content={content1}
          size='medium'
          type='description'
          position='justify'
        />
        <Typhography
          content={content2}
          size='medium'
          type='description'
          position='justify'
        />
        <Typhography
          content={content3}
          size='medium'
          type='description'
          position='justify'
        />
      </div>

      <div className='images-frameworks'>
        <img src={react} alt='react' />
        <img src={spring} alt='react' />
        <img src={django} alt='react' />
      </div>

      <button className='github-button'>
        <a className='github-link' href='https://github.com/doctorchebo'>
          GitHub <FaGithub size={40} color={'white'} />
        </a>
      </button>
    </div>
  );
};

export default Body;
