import { useState } from 'react';
import homepage from '../../assets/ouva/homepage.png';
import destination from '../../assets/ouva/destination.png';
import activity from '../../assets/ouva/activity-description.png';
import ouva from '../../assets/ouva/favicon.png';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const CardOuva = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [homepage, destination, activity];

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
        <div className="flex flex-col md:flex-row md:gap-8 md:w-full md:h-[500px] xl:h-[700px]">
          <div className="relative">
            <a href="https://github.com/chantaseng/ouva" target="blank">
              <img
                src={slides[currentIndex]}
                className="h-[300px] w-full object-cover object-top md:h-[500px] md:w-[1000px] xl:h-[700px] xl:w-[1400px]"
                alt="Ouva app"
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
              <h1 className="text-5xl md:text-6xl mb-2 uppercase flex items-center font-bold">
                Ouva <img className="ml-4" src={ouva} width={60} height={30} />
              </h1>
              <p className="mb-2">
                OUVA is a travel planning application for travel enthusiasts.
                This idea was conceptualized as part of my final team project at
                Le Wagon Montreal. Crafted with Ruby, Rails, Javascript, HTML
                and CSS, discover what our beautiful planet has to offer with
                numerous off beaten path activities and marvelous destinations
                to visit. It is only at OUVA, that you can feel alive again!
              </p>
            </div>

            <br></br>
            <br></br>

            <div className="font-bold text-4xl">
              <span className="flex items-center">
                <Plus />
                Ruby
              </span>
              <span className="flex items-center">
                <Plus />
                Sass
              </span>
              <span className="flex items-center">
                <Plus />
                Javascript
              </span>
              <span className="flex items-center">
                <Plus />
                Ruby on Rails
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOuva;
