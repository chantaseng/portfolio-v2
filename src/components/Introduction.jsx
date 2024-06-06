import me from '../assets/me.png';

const Introduction = () => {
  return (
    <div>
      <div className="w-full h-60"></div>
      <div className="p-[30px] flex justify-center items-center">
        <div className="text-white max-w-3xl text-center">
          Hi! I’m{' '}
          <div className="relative inline-block group">
            <span className="underline cursor-pointer">William Chan</span>
            <div className="absolute z-10 scale-250 bottom-[-50px] hidden group-hover:block">
              <img src={me} className="" alt="My picture" />
            </div>
          </div>
          , a Frontend Developer, based in Montreal, Canada. As a Junior
          Frontend Developer, I bring a robust set of skills encompassing HTML,
          CSS, JavaScript, React, Tailwind, and SCSS. My specialization lies in
          creating and maintaining responsive websites that prioritize a
          seamless user experience.
        </div>
      </div>
      <div className="w-full h-60"></div>
    </div>
  );
};

export default Introduction;
