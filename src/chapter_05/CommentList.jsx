import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '조혁균',
    comment: '1번째 댓글일지도?'
  },
  {
    name: '조혁균',
    comment: '2번째 댓글일지도?'
  },
  {
    name: '조혁균',
    comment: '3번째 댓글일지도?'
  }
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
