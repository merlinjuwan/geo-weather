import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BreakpointsProvider } from 'react-with-breakpoints';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BreakpointsProvider>
      <App />
    </BreakpointsProvider>
  </React.StrictMode>
);
