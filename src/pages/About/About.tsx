import React from 'react';
import Typhography from '../../components/Typography/Typhography';
import locale from './locale/en.json';
const About = () => {
  const { title, content1, content2, content3 } = locale;
  return (
    <div className='body-container'>
      <div>
        <Typhography content={title} size='large-bold' color='#006699' type='title' />
        <Typhography content={content1} type='description' position='justify' size='medium'/>
        <Typhography content={content2} type='description' position='justify' size='medium'/>
        <Typhography content={content3} type='description' position='justify' size='medium'/>
      </div>
    </div>
  );
};

export default About;
