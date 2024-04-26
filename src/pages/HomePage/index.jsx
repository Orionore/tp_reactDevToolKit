// pages/HomePage/index.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAsync } from '../../store/postsSlice';
import { fetchCommentsByPostId } from '../../api/comments';
import AddCommentForm from '../../components/AddCommentForm';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const [submittedPost, setSubmittedPost] = useState(null);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  useEffect(() => {
    const submittedPostString = localStorage.getItem('submittedPost');
    if (submittedPostString) {
      setSubmittedPost(JSON.parse(submittedPostString));
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/add-post">Ajouter un post</Link>
      {submittedPost && (
        <div>
          <h2>{submittedPost.title}</h2>
          <p>{submittedPost.body}</p>
          <Link to={`/post/${submittedPost.id}`}>Voir détails</Link>
        </div>
      )}
      {posts && posts.map(post => (
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
