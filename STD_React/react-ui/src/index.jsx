import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/base.css';
import './assets/css/layout.css';
import './assets/css/utilities.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();