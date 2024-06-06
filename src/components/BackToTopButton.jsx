import { MoveUp } from 'lucide-react';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="text-gray-500 flex justify-center items-center cursor-pointer"
    >
      <span className="mr-2">
        <MoveUp />
      </span>
      <span>Back to Top</span>
    </div>
  );
};

export default BackToTopButton;
