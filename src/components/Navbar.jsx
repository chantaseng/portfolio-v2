import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center py-6 px-5">
      <h2 className="text-white font-bold cursor-pointer">William Chan</h2>
      <Link to="#getInTouch" smooth>
        <span className="text-white font-bold cursor-pointer">
          Get In Touch
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
