// pages/PostDetailPage/index.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostByIdAsync } from '../../store/postsSlice';
import { fetchCommentsByPostId } from '../../api/comments';
import AddCommentForm from '../../components/AddCommentForm';

const PostDetailPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.posts.find(post => post.id === parseInt(postId)));
  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(fetchPostByIdAsync(postId));
    fetchComments();
  }, [dispatch, postId]);

  const fetchComments = async () => {
    try {
      const data = await fetchCommentsByPostId(postId);
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error.message);
    }
  };

  return (
    <div>
      <h1>Post Detail Page</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <h2>Commentaires</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
      <AddCommentForm postId={postId} />
    </div>
  );
};

export default PostDetailPage;
