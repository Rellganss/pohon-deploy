// App.js
import React from 'react';
import LandingPage from './pages/LandingPage'; // Misalkan Anda memiliki folder 'pages' untuk menyimpan halaman-halaman
import TreeDetail from './pages/TreeDetail'; // Impor komponen TreeDetail
import treesData from './data/trees.json'; // Impor data JSON 


const App = () => {
  return (
    <div>
      <LandingPage />
      <TreeDetail treesData={treesData} />
    </div>
  );
}

export default App;
