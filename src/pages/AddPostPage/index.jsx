import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostAsync } from '../../store/postsSlice';
import { useNavigate } from 'react-router-dom';

const AddPostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting new post:', newPost);
    localStorage.setItem('submittedPost', JSON.stringify(newPost));
    dispatch(addPostAsync(newPost))
      .then(() => {
        console.log('New post added successfully');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error adding new post:', error);
      });
  };

  return (
    <div>
      <h1>Ajouter un Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input type="text" name="title" value={newPost.title} onChange={handleChange} />
        </label>
        <label>
          Contenu:
          <textarea name="body" value={newPost.body} onChange={handleChange} />
        </label>
        <button type="submit">Ajouter un post</button>
      </form>
    </div>
  );
};

export default AddPostPage;
