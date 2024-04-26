import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostByIdAsync } from '../../store/postsSlice'; // Mettez à jour l'importation

const PostDetailPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, postId));

  useEffect(() => {
    dispatch(fetchPostByIdAsync(postId)); // Utilisez fetchPostByIdAsync
  }, [dispatch, postId]);

  return (
    <div>
      <h1>Post Detail Page</h1>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
