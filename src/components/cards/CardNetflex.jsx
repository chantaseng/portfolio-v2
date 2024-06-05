import netflex from '../../assets/netflex/netflex1.png';
import netflexMobile from '../../assets/netflex/netflex-mobile.png';
import { Plus } from 'lucide-react';

const CardNetflex = () => {
  return (
    <div className="w-full h-full mb-16">
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
              <h1 className="text-5xl md:text-6xl mb-2 uppercase">
                Netflex 🍿
              </h1>
              <p className="mb-2">
                Netflex is a clone website of Netflix where you can know what
                are the hottest and trendiest movies and tv shows in Hollywood
                right now. Intrigue by a movie, you can search on Netflex to get
                more information about it. Whether it is about the release date
                or your favorite actors or actresses. Don&apos;t forget to
                create an account to save the movie in your watchlist so you can
                watch them later!
              </p>
            </div>

            <br></br>
            <br></br>

            <div className="font-bold text-2xl">
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
