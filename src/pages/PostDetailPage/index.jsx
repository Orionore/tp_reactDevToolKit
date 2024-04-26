import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCommentsForPost } from '../redux/commentsSlice';
import PostDetail from '../components/PostDetail';

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === parseInt(postId)));

  useEffect(() => {
    dispatch(fetchCommentsForPost(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <h1>Post Detail Page</h1>
      <PostDetail post={post} />
    </div>
  );
};

export default PostDetailPage;
