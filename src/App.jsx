// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import AddPostPage from './pages/AddPostPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/post/:postId" component={PostDetailPage} />
          <Route path="/add-post" component={AddPostPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
