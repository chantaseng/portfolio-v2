import { useState } from 'react';
import comidaeats from '../../assets/comidaeats/comidaeats.png';
import { Plus } from 'lucide-react';
import Content from '../Content';

const CardComidaEats = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="w-full h-full mb-16">
      <div className="mx-8">
        <div className="flex flex-col md:flex-row md:gap-8 md:w-full md:h-[500px] xl:h-[700px]">
          <div className="md:overflow-hidden">
            <a
              href="https://comida-food-ordering-app-frontend.onrender.com"
              target="blank"
            >
              <img
                src={comidaeats}
                className="block xl:hidden"
                alt="ComidaEats front page"
              />
              <img
                src={comidaeats}
                className="hidden xl:block"
                alt="ComidaEats front page"
              />
            </a>
          </div>

          <div className="text-white mt-4 md:mt-0 md:flex md:flex-col md:justify-between">
            <div className="md:w-[400px]">
              <h1 className="text-5xl md:text-6xl mb-2 uppercase">
                ComidaEats 🍟
              </h1>
              <p className="mb-2">
                ComidaEats is a food ordering application where you can grab
                your favorite food in cities like Toronto or Montreal.
              </p>
              <span
                className="underline cursor-pointer"
                onClick={toggleReadMore}
              >
                Testing Instructions
              </span>
              <span>{isReadMore ? <Content /> : ''}</span>
            </div>

            <br></br>
            <br></br>

            <div className="font-bold text-2xl">
              <span className="flex">
                <Plus />
                React
              </span>
              <span className="flex">
                <Plus />
                TailwindCSS
              </span>
              <span className="flex">
                <Plus />
                TypeScript
              </span>
              <span className="flex">
                <Plus />
                Auth0
              </span>
              <span className="flex">
                <Plus />
                Stripe
              </span>
              <span className="flex">
                <Plus />
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComidaEats;

// h-[300px] w-full object-cover
