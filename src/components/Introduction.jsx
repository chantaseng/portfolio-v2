import Montreal from './intro-interactive/Montreal';
import MyPicture from './intro-interactive/MyPicture';

const Introduction = () => {
  return (
    <div>
      <div className="w-full h-60"></div>
      <div className="p-[30px] flex justify-center items-center">
        <div className="text-white max-w-3xl text-center">
          Hi! I’m <MyPicture />, a Frontend Developer, based in <Montreal />. As
          a Junior Frontend Developer, I bring a robust set of skills
          encompassing HTML, CSS, JavaScript, React, Tailwind, and SCSS. My
          specialization lies in creating and maintaining responsive websites
          that prioritize a seamless user experience.
        </div>
      </div>
      <div className="w-full h-60"></div>
    </div>
  );
};

export default Introduction;
