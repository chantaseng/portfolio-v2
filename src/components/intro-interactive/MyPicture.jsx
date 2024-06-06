import me from '../../assets/intro-pictures/me.png';

const MyPicture = () => {
  return (
    <div className="relative inline-block group">
      <span className="underline cursor-pointer">William Chan</span>
      <div className="absolute z-10 scale-250 bottom-[-50px] hidden group-hover:block">
        <img src={me} className="" alt="Hometown picture" />
      </div>
    </div>
  );
};

export default MyPicture;
