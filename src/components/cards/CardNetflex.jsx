import netflex from '../../assets/netflex/netflex.png';
import netflexMobile from '../../assets/netflex/netflex-mobile.png';
import { Plus } from 'lucide-react';

const CardNetflex = () => {
  return (
    <div className="w-full h-full mb-24">
      <div className="mx-8">
        <div className="flex flex-col md:flex-row md:gap-8 md:w-full md:h-[500px] xl:h-[700px]">
          <div className="md:overflow-hidden">
            <a href="https://netflex1.netlify.app/" target="blank">
              <img
                src={netflexMobile}
                className="block h-[300px] w-full object-cover md:hidden"
                alt="Netflex front page"
              />

              <img
                src={netflex}
                className="hidden md:block md:img--scroll"
                alt="Netflex front page"
              />
            </a>
          </div>

          <div className="text-white mt-4 md:mt-0 md:flex md:flex-col md:justify-between">
            <div className="md:w-[400px]">
              <h1 className="text-5xl md:text-6xl mb-2 uppercase font-bold">
                Netflex 🍿
              </h1>
              <p className="mb-2">
                A Netflix-based replica highlighting trending movies and series,
                completed with the capability to register an account and
                bookmark your preferred shows for future viewing!
              </p>
            </div>

            <br></br>
            <br></br>

            <div className="font-bold text-4xl">
              <span className="flex items-center">
                <Plus />
                React
              </span>
              <span className="flex items-center">
                <Plus />
                TailwindCSS
              </span>
              <span className="flex items-center">
                <Plus />
                Axios
              </span>
              <span className="flex items-center">
                <Plus />
                Firestore
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNetflex;
