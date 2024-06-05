import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center py-6 px-5">
      <div className="flex text-white font-bold justify-center items-center">
        <span className="mr-2">Copyright</span>
        <span className="mr-2">
          <Copyright size={20} />
        </span>
        <span>2024</span>
      </div>
      <span className="text-white font-italic">William Chan</span>
    </div>
  );
};

export default Footer;
