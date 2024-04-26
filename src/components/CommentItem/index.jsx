import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div>
      <p>{comment.body}</p>
      <p>By: User {comment.userId}</p>
    </div>
  );
};

export default CommentItem;
