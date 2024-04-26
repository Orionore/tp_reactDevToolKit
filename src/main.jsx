// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import du composant racine de l'application
import { Provider } from 'react-redux'; // Import du Provider pour Redux
import { store } from './store'; // Import du Redux Store

ReactDOM.render(
  <Provider store={store}> {/* Fournit le Redux Store à toute l'application */}
    <App /> {/* Rendu du composant racine de l'application */}
  </Provider>,
  document.getElementById('root') // Point d'entrée dans le DOM pour l'application
);