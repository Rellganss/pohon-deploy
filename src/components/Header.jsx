// Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#1a4d2e] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">WISATA MERANTI</h1>
        <nav>
          <ul className="flex">
            <li><a href="#" className="text-white hover:bg-blue-600 px-4 py-2">Beranda</a></li>
            <li><a href="#" className="text-white hover:bg-blue-600 px-4 py-2">Tentang</a></li>
            <li><a href="#" className="text-white hover:bg-blue-600 px-4 py-2">Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
