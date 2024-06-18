import Montreal from './intro-interactive/Montreal';
import MyPicture from './intro-interactive/MyPicture';

const Introduction = () => {
  return (
    <div>
      <div className="w-full h-48"></div>
      <div className="p-[30px] flex justify-center items-center">
        <div className="text-white max-w-3xl text-center text-2xl">
          Hello, I’m <MyPicture />! I am a Junior Frontend Developer from{' '}
          <Montreal />. I love creating and maintaining responsive apps. When I
          am not on my computer, you will find me on a long walk with my wife
          and my dog looking for food, watching hockey or in a numismatic store
          looking at bills and coins.
        </div>
      </div>
      <div className="w-full h-60"></div>
    </div>
  );
};

export default Introduction;
