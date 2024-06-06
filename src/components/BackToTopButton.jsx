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
      <div onClick={scrollToTop} className="flex justify-center items-center">
        <span className="mr-2 cursor-pointer">
          <MoveUp />
        </span>
        <span className="cursor-pointer">Back to Top</span>
      </div>
    </div>
  );
};

export default BackToTopButton;
