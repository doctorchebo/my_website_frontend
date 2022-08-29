import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../../../components/Container/Container';
import List from '../../../../components/List/List';
import Typhography from '../../../../components/Typography/Typhography';
import AxiosService from '../../../../services/AxiosService';
import { Button } from '../../../../stories/Button';

import './post.css';
export interface Category {
  id: number;
  name: string;
}

export interface IPost {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  content: string;
  created_at: string;
  category: Category[];
}
const Post = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AxiosService.getPost(`/posts/${slug}/`).then((res) => setPost(res.data));
    window.scrollTo({ top: -10, left: 0, behavior: 'smooth' });
  }, []);

  const handleClick = () => {
    navigate('/blog');
  };

  return (
    <div className='post-container'>
      <div>
        <Button
          size='medium'
          onClick={handleClick}
          primary
          label={'Back'}
          backgroundColor={'#0191C8'}
        />
      </div>

      {post && (
        <div className='post-content'>
          <Typhography
            color='#006699'
            content={post.title}
            position='center'
            size={3}
          />
          <div className='image-container'>
            <img className='post-image' src={post.image_url} alt='alt_image' />
          </div>
          <div className='info-container'>
            <List
              direction='horizontal'
              items={post!.category}
              builder={(item) => (
                <Typhography
                  content={`#${item.name}`}
                  position='left'
                  size='small'
                />
              )}
            />
            <Typhography content={`created: today`} position='left' />
          </div>
          <Typhography content={post.content} position='left' size='medium' />
        </div>
      )}
    </div>
  );
};

export default Post;
