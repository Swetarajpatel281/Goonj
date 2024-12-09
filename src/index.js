import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Index from './Routes/Index';
import * as serviceWorker from '../src/Components/face-detection/handGestureOutput'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Index/>
  </React.StrictMode>
);
serviceWorker.unregister();
reportWebVitals();
