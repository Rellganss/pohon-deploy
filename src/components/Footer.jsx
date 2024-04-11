import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>Informasi Pohon &copy; 2024. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-white hover:text-blue-200 px-2">Facebook</a>
          <a href="#" className="text-white hover:text-blue-200 px-2">Twitter</a>
          <a href="#" className="text-white hover:text-blue-200 px-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
