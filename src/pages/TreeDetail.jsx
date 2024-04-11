import React from 'react';
import { useParams } from 'react-router-dom';
import treesData from '../data/trees.json';

const TreeDetail = () => {
  const { id } = useParams();
  const tree = treesData.find(tree => tree.id === parseInt(id));

  if (!tree) {
    return <p className="text-red-500">Pohon tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden my-8">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold mb-2">{tree.name}</h2>
        <p className="text-gray-600 mb-4">{tree.latinName}</p>
        <img src={tree.image} alt={tree.name} className="w-full h-auto" />
        <p className="text-gray-700 mt-4">{tree.description}</p>
      </div>
    </div>
  );
};

export default TreeDetail;
