import { useState } from 'react';
import landing from '../../assets/pig-game/landing.png';
import start from '../../assets/pig-game/start-game.png';
import playing from '../../assets/pig-game/playing.png';
import winner from '../../assets/pig-game/winner.png';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const CardPigGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [landing, start, playing, winner];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full mb-24">
      <div className="mx-8">
        <div className="flex flex-col md:flex-row-reverse md:gap-8 md:w-full md:h-[500px] xl:h-[700px]">
          <div className="relative">
            <a href="https://pig-game-chantaseng.netlify.app" target="blank">
              <img
                src={slides[currentIndex]}
                className="h-[300px] w-full md:h-[500px] xl:h-[700px] object-cover"
                alt="Pig game images"
              />
            </a>

            <div>
              <div>
                <a
                  className="text-gray-500 hover:text-white font-bold z-10 absolute top-1/2 transition ease-in-out duration-1000"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={36} />
                </a>
                <a
                  className="text-gray-500 hover:text-white font-bold z-10 absolute right-0 top-1/2 transition ease-in-out duration-1000"
                  onClick={handleNext}
                >
                  <ChevronRight size={36} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-white mt-4 md:mt-0 md:flex md:flex-col md:justify-between">
            <div className="md:w-[400px] xl:w-[500px]">
              <h1 className="text-5xl md:text-6xl mb-2 uppercase font-bold">
                Pig Game 🐷
              </h1>
              <p className="mb-2">
                A multiplayer web game where the goal is to be the first to
                score 100 points.
              </p>
            </div>

            <br></br>
            <br></br>

            <div className="font-bold text-4xl">
              <span className="flex items-center">
                <Plus />
                HTML
              </span>
              <span className="flex items-center">
                <Plus />
                CSS
              </span>
              <span className="flex items-center">
                <Plus />
                Javascript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPigGame;
