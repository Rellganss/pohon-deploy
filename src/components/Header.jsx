// Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Informasi Pohon</h1>
        <nav>
          <ul className="flex">
            <li><a href="#" className="text-white hover:bg-blue-600 px-4 py-2">Beranda</a></li>
            <li><a href="#" className="text-white hover:bg-blue-600 px-4 py-2">Tentang</a></li>
            <li><a href="#" className="text-white hover:bg-blue-600 px-4 py-2">Galeri</a></li>
            <li><a href="#" className="text-white hover:bg-blue-600 px-4 py-2">Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
