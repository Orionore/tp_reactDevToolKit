
import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>By: User {post.userId}</p>
    </div>
  );
};

export default PostItem;
