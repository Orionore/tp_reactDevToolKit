import React from 'react';
import { createRoot } from 'react-dom/client'; // Importer createRoot à partir de 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

// Utiliser createRoot au lieu de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
