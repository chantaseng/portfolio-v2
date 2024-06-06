import me from '../../assets/intro-pictures/me.png';

const MyPicture = () => {
  return (
    <div className="relative inline-block group cursor-pointer">
      <span className="underline">William Chan</span>
      <div className="absolute z-10 scale-250 bottom-[-50px] hidden group-hover:block">
        <img src={me} className="" alt="Hometown picture" />
      </div>
    </div>
  );
};

export default MyPicture;
