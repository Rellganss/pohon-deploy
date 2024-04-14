import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import treesData from '../data/trees.json';

const LandingPage = () => {
  const [trees, setTrees] = useState([]);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    setTrees(treesData);
  }, []);

  const handleExploreClick = () => {
    cardContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-500 min-h-screen flex items-center justify-center relative">
        <img src="/1.jpg" alt="Background" className="absolute inset-0 object-cover w-full h-full opacity-50" />
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di Website Kami</h1>
          <p className="text-lg mb-8">Temukan informasi terbaru tentang pohon-pohon di sekitar Anda.</p>
          <button onClick={handleExploreClick} className="bg-[#1a4d2e] text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-500 transition duration-300 ease-in-out">Mulai Jelajahi</button>
        </div>
      </div>
      <div className="container mx-auto mt-8" ref={cardContainerRef}>
        <h1 className="text-3xl font-bold mb-4 text-center">Informasi Pohon</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trees && trees.length > 0 ? (
            trees.map((tree) => (
              <Link key={tree.id} to={`/tree/${tree.nama}`}>
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
