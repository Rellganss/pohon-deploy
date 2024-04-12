import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#1a4d2e] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/favicon.png" alt="Logo Wisata Meranti" className="w-12 h-12 mr-2" />
        <nav>
          <ul className="flex">
            <li><a href="http://meranti-kita.itk.ac.id/" className="text-white hover:bg-gray-500 px-4 py-2">Beranda</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=62816977478&text&type=phone_number&app_absent=0" className="text-white hover:bg-gray-500 px-4 py-2">Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
