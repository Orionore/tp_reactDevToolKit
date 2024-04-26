// components/AddPostForm/index.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addPostAsync } from '../../store/postsSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const handleAddPost = () => {
    // Logique pour ajouter un post
    const newPost = {
      userId: 1, // Utilisateur avec l'ID 1
      title: 'Nouveau post',
      body: 'Contenu du nouveau post',
    };
    dispatch(addPostAsync(newPost));
  };

  return (
    <div>
      <h1>Ajouter un Post</h1>
      <button onClick={handleAddPost}>Ajouter un post</button>
    </div>
  );
};

export default AddPostForm;
