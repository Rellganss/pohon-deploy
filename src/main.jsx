import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import TreeDetail from './pages/TreeDetail';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/pohon-deploy" element={<App />} />
        <Route path="/pohon-deploy/tree/:id" element={<TreeDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
