import { useParams } from 'react-router-dom';
import treesData from '../data/trees.json';
import Button from '../components/button';

const TreeDetail = () => {
  const { name } = useParams();
  const tree = treesData.find(tree => tree.nama === name);

  if (!tree) {
    return <p className="text-red-500 text-center font-bold">Pohon tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden my-8">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold mb-2">{tree.nama}</h2>
        <p className="text-gray-600 mb-4">{tree.nama_latin}</p>
        {tree.image && <img src={`/${tree.image}`} alt={tree.nama} className="w-full h-auto" />}
        <p className="text-gray-700 mt-4 text-justify">{tree.deskripsi}</p>
        {tree.habitat && (
          <div>
            <h3 className="text-xl font-semibold mt-4">Habitat</h3>
            <p className="text-gray-700 text-justify">{tree.habitat}</p>
          </div>
        )}
        {tree.manfaat && (
          <div>
            <h3 className="text-xl font-semibold mt-4">Manfaat</h3>
            {Array.isArray(tree.manfaat) ? (
              <ul className="list-disc list-inside text-gray-700 text-justify">
                {tree.manfaat.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-justify">{tree.manfaat}</p>
            )}
          </div>
        )}
        <Button />
      </div>
    </div>
  );
};

export default TreeDetail
