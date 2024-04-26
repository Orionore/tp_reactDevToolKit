import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../api/posts';

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = { title, body, userId: 1 }; // Assuming user with ID 1
      await dispatch(addPost(postData));
      // Reset form after successful submission
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
