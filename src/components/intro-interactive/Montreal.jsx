import montreal from '../../assets/intro-pictures/montreal.png';

const Montreal = () => {
  return (
    <div className="relative inline-block group">
      <span className="underline cursor-pointer">Montreal, Canada</span>
      <div className="absolute z-10 scale-250 bottom-[-50px] hidden group-hover:block">
        <img src={montreal} className="" alt="My picture" />
      </div>
    </div>
  );
};

export default Montreal;
