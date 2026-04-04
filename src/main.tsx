import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

/**
 * Entry point for the React + Vite portfolio application
 * 
 * Note: BrowserRouter is not needed here as App.tsx uses RouterProvider
 * with createBrowserRouter for more advanced routing features.
 * 
 * ThemeProvider is also handled within MainLayout in App.tsx
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
