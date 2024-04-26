import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsAsync, selectAllPosts } from '../../store/postsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {posts && posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`}>Voir détails</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
