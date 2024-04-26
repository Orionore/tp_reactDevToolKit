import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './common/PostItem';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <PostItem post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
