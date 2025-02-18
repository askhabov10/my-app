import React from 'react';
import ReactDOM from 'react-dom/client'; // Обратите внимание на изменение импорта
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Используем createRoot вместо render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
