// Main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot dari react-dom/client
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App';
import './index.css';
import TreeDetail from './pages/TreeDetail';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tree/:id",
    element: <TreeDetail />,
  },
])


// Render aplikasi menggunakan createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
