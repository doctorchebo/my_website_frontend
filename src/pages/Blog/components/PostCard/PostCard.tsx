import React from 'react';
import { Result } from '../PostList/PostList';
import './PostCard.css';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import Typhography from '../../../../components/Typography/Typhography';
import List from '../../../../components/List/List';

const PostCard = ({
  id,
  title,
  slug,
  image_url,
  content,
  created_at,
  category,
  key,
}: Result) => {
  const timeAgo = moment(created_at).fromNow();
  return (
    <div className='post-container' key={key} id={slug}>
      <NavLink to={slug}>
        <img className='post-image' src={image_url} alt={title} />
      </NavLink>
      <div className='post-content'>
        <Typhography color='#006699' content={title} position='left' size='large-bold' />
        <List direction='horizontal' items={category} builder={(item)=><Typhography content={`#${item.name}`} position='left' size='small'/>}/>
        <Typhography content={`created: ${timeAgo}`} position='left'/>
        <Typhography content={`${content.split(' ').slice(0, 20).join(' ')}...`} position='left'/>
      </div>
    </div>
  );
};

export default PostCard;
