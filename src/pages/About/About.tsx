import React from 'react';
import locale from './locale/en.json';
const About = () => {
  const { title, content1, content2, content3 } = locale;
  return (
    <div className='body-container'>
      <div className='title'>{title}</div>
      <p className='content'>{content1}</p>
      <p className='content'>{content2}</p>
      <p className='content'>{content3}</p>
    </div>
  );
};

export default About;
