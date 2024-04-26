import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsForPost } from '../api/comments';
import CommentItem from './common/CommentItem';

const PostDetail = ({ match }) => {
  const dispatch = useDispatch();
  const { postId } = match.params;
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === parseInt(postId)));
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(fetchCommentsForPost(postId));
  }, [dispatch, postId]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostDetail;
