import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the use of `react-dom/client`
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use `createRoot` instead of `render`

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log web vitals to the console or send them to an analytics endpoint
reportWebVitals(console.log);
