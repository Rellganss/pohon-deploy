// Card.jsx
import { Link } from "react-router-dom";

const Card = ({ tree }) => {

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return (
        <>
          {words.slice(0, 20).join(' ')}
          <span className="text-blue-500 cursor-pointer hover:underline"> Baca Selengkapnya...</span>
        </>
      );
    } else {
      return (
        <>
          {description} 
          <span className="text-blue-500 cursor-pointer hover:underline"> Baca Selengkapnya...</span>
        </>
      );
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 hover:shadow-[#1a4d2e] hover:scale-110">
      <Link to={`/tree/${tree.nama}`} className="cursor-pointer">
        <img
          src={`/${tree.image}`}
          alt={tree.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{tree.nama}</h2>
        <p className="text-gray-600 mb-2">{tree.nama_latin}</p>
        <p className="text-gray-700 text-justify">{truncateDescription(tree.deskripsi)}</p>
      </Link>
    </div>
  );
};

export default Card;
