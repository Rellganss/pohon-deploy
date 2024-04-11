// LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import treesData from '../data/trees.json';

const LandingPage = () => {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    setTrees(treesData);
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-blue-200 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di Website Kami</h1>
          <p className="text-lg mb-8">Temukan informasi terbaru tentang pohon-pohon di sekitar Anda.</p>
          <Link to="/explore" className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">Mulai Jelajahi</Link>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Informasi Pohon</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trees && trees.length > 0 ? (
            trees.map((tree) => (
              <Link key={tree.id} to={`/tree/${tree.id}`} className="hover:underline">
                <Card tree={tree} />
              </Link>
            ))
          ) : (
            <p>Tidak ada data pohon yang tersedia.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
