import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez Routes
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import AddPostPage from './pages/AddPostPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/add-post" element={<AddPostPage />} />
      </Routes>
    </Router>
  );
};

export default App;
