import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../../../components/Container/Container';
import List from '../../../../components/List/List';
import Typhography from '../../../../components/Typography/Typhography';
import AxiosService from '../../../../services/AxiosService';
import { Button } from '../../../../stories/Button';
import CommentList from '../CommentList/CommentList';

import './post.css';
export interface Category {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  author: number;
  comment: string;
}

export interface IPost {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  content: string;
  created_at: string;
  category: Category[];
  comments: Comment[];
}
const Post = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const contentbyParagraphs = post?.content.split('\r\n\r\n');

  useEffect(() => {
    AxiosService.getPost(`/posts/${slug}/`).then((res) => setPost(res.data));
    window.scrollTo({ top: -10, left: 0, behavior: 'smooth' });
  }, []);

  const handleClick = () => {
    navigate('/blog');
  };

  return (
    <div className='body-container'>
      {post && (
        <>
          {/* <div>{JSON.stringify(post, null, 2)}</div> */}
          <div className='header-container'>
            <Button
              size='small'
              onClick={handleClick}
              primary
              label={'Back'}
              backgroundColor={'#0191C8'}
            />
            <Typhography
              color='#006699'
              content={post.title}
              position='center'
              size='large-bold'
            />
          </div>
          <div className='post-content'>
            <img src={post.image_url} alt='alt_image' />
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
            {contentbyParagraphs?.map((p) => {
              return (
                <Typhography content={p} position='justify' size='medium' />
              );
            })}
          </div>
          {/* <CommentList comments={post.comments}/> */}
        </>
      )}
    </div>
  );
};

export default Post;
