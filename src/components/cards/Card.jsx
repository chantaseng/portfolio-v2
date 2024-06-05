import { Plus } from 'lucide-react';
import comidaeats from '../../assets/comidaeats.png';
import { useState } from 'react';
import Content from '../Content';

const Card = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="w-full my-8">
      <div className="mx-4">
        <div className="flex flex-col lg:flex-row gap-4 h-[500px]">
          <div className="lg:overflow-hidden">
            <img
              className="lg:img--scroll"
              src={comidaeats}
              alt="comidaeats main page"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-white">
              <h1 className="text-7xl">ComidaEats</h1>
              <p className="mb-2">
                ComidaEats is a food ordering application where you can grab
                your favorite food in cities like Toronto or Montreal.
              </p>
              <span
                className="underline cursor-pointer"
                onClick={toggleReadMore}
              >
                Testing instructions{' '}
              </span>
              <p>{isReadMore ? <Content /> : ''}</p>
            </div>
            <br></br>
            <br></br>
            <div className="text-white">
              <span className="flex font-bold text-2xl">
                <Plus />
                React
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                TailwindCSS
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                TypeScript
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                Auth0
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                Stripe
              </span>
              <span className="flex font-bold text-2xl">
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

export default Card;

{
  /* <div className="w-full my-8">
      <div className="mx-4">
        <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-4 h-[500px]">
          <div className="lg:overflow-hidden relative">
            <img
              className="lg:img--scroll"
              src={comidaeats}
              alt="comidaeats main page"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-white">
              <h1 className="text-7xl">ComidaEats</h1>
              <p className="mb-2">
                ComidaEats is a food ordering application where you can grab
                your favorite food in cities like Toronto or Montreal.
              </p>
              <span
                className="underline cursor-pointer"
                onClick={toggleReadMore}
              >
                Testing instructions{' '}
              </span>
              <p>{isReadMore ? <Content /> : ''}</p>
            </div>
            <br></br>
            <br></br>
            <div className="text-white">
              <span className="flex font-bold text-2xl">
                <Plus />
                React
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                TailwindCSS
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                TypeScript
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                Auth0
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                Stripe
              </span>
              <span className="flex font-bold text-2xl">
                <Plus />
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
