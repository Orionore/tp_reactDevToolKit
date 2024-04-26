import React from 'react';
import { useDispatch } from 'react-redux';
import { addPostAsync } from '../../store/postsSlice';

const AddPostPage = () => {
  const dispatch = useDispatch();

  const handleAddPost = () => {
    const newPost = {
      userId: 1,
      title: 'Nouveau post',
      body: 'Contenu du nouveau post',
    };
    dispatch(addPostAsync(newPost));
  };

  return (
    <div>
      <h1>Add Post Page</h1>
      <button onClick={handleAddPost}>Ajouter un post</button>
    </div>
  );
};

export default AddPostPage;
