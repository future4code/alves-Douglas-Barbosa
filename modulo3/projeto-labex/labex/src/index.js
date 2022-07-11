import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Reset } from './Components/Styles/Elements/Generic/Reset';
import { Base } from './Components/Styles/Elements/Generic/Base';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>
);
