import React from 'react';
import './styles.css';
export interface Comment {
  id: number;
  author: number;
  comment: string;
}
export interface ICommentList {
  comments: Comment[];
}

const CommentList = ({ comments }: ICommentList) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div>
            {comment.id} {comment.author} {comment.comment}
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
