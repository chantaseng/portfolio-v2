import { MoveUp } from 'lucide-react';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="text-gray-500 py-[60px]">
      <div className="flex justify-center items-center">
        <div onClick={scrollToTop} className="flex">
          <MoveUp className="mr-2 cursor-pointer" />
          <span className="cursor-pointer">Back to Top</span>
        </div>
      </div>
    </div>
  );
};

export default BackToTopButton;
