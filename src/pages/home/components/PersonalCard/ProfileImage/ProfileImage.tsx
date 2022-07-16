import React from 'react';
import './ProfileImage.css';
import myPhoto from '../../../../../assets/images/my_photo.jpg';

const ProfileImage = () => {
  return (
    <div className='profile-image'>
      <img src={myPhoto} alt='Marcelo' className='photo'/>
    </div>
  );
};

export default ProfileImage;
