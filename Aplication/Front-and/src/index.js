import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import'bootstrap/dist/css/bootstrap.min.css';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';


Chart.register(ArcElement, Tooltip, Legend);



const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
