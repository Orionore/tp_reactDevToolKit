// components/AddCommentForm/index.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../api/comments';

const AddCommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState({ name: '', email: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addComment(postId, newComment);
      console.log('Comment added successfully');
    } catch (error) {
      console.error('Error adding comment:', error.message);
    }
  };

  return (
    <div>
      <h2>Ajouter un commentaire</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" name="name" value={newComment.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={newComment.email} onChange={handleChange} />
        </label>
        <label>
          Commentaire:
          <textarea name="body" value={newComment.body} onChange={handleChange} />
        </label>
        <button type="submit">Ajouter un commentaire</button>
      </form>
    </div>
  );
};

export default AddCommentForm;
