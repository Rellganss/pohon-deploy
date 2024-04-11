// Card.jsx
import { Link } from "react-router-dom";

const Card = ({ tree }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <Link to={`/tree/${tree.id}`} className="cursor-pointer">
        <img
          src={`/${tree.image}`}
          alt={tree.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{tree.name}</h2>
        <p className="text-gray-600 mb-2">{tree.latinName}</p>
        <p className="text-gray-700">{tree.description}</p>
      </Link>
    </div>
  );
};

export default Card;
