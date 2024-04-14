import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="/">
      <button className='bg-[#1a4d2e] text-white px-6 py-3 mt-5 rounded-full shadow-lg hover:bg-gray-500 transition duration-300 ease-in-out'>Back to Home</button>
    </Link>
  );
};

export default Button;