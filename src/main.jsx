import React from 'react';
import ReactDOM from 'react-dom'; // Memperbaiki import dari react-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App';
import './index.css';
import TreeDetail from './pages/TreeDetail';

const router = createBrowserRouter([
  {
    path: "pohon-deploy/",
    element: <App />,
  },
  {
    path: "/pohon-deploy/tree/:id",
    element: <TreeDetail />,
  },
])

// Mengganti render menggunakan ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);
