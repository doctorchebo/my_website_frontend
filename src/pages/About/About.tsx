import React from 'react';
import Typhography from '../../components/Typography/Typhography';
import locale from './locale/en.json';
const About = () => {
  const { title, content1, content2, content3 } = locale;
  return (
    <div className='body-container'>
      <div>
        <Typhography content={title} size={2} color='#006699' type='title' />
        <Typhography content={content1} type='description' position='justify' />
        <Typhography content={content2} type='description' position='justify' />
        <Typhography content={content3} type='description' position='justify' />
      </div>
    </div>
  );
};

export default About;
