import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../../../components/List/List';
import Typhography from '../../../../components/Typography/Typhography';
import AxiosService from '../../../../services/AxiosService';
import moment from 'moment';

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
  // const timeAgo = moment(created_at).fromNow();
  const { slug } = useParams();
  console.log(`blog/posts/${slug}`);

  useEffect(() => {
    AxiosService.getPost(`/blog/posts/${slug}/`).then((res) =>
      setPost(res.data)
    );
  }, []);

  return (
    <div className='post-detail-view-container'>
      <img className='post-image' src='https://www.infobae.com/new-resizer/CoWWMWYEWL5B41R8QdFiwwt4fIg=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/RWJFE4PPSRGL3KTHP64JDYSVRY.png' alt='elmo' />
      <Typhography
        color='#006699'
        content="This is my first post"
        position='left'
        size='large-bold'
      />
      <List
        direction='horizontal'
        items={['tech', 'social']}
        builder={(item) => (
          <Typhography content={`#${item.name}`} position='left' size='small' />
        )}
      />
      <Typhography content={`created: today`} position='left' />
      <Typhography
        content='This is my first post'
        position='left'
      />
      {/* <h1>{JSON.stringify(post, null, 2)}</h1> */}
    </div>
  );
};

export default Post;
