import habs from '../../assets/intro-pictures/habs.png';

const Montreal = () => {
  return (
    <div className="relative inline-block group cursor-pointer">
      <span className="underline">Montreal, Canada</span>
      <div className="absolute z-10 scale-250 bottom-[-50px] hidden group-hover:block">
        <img src={habs} className="" alt="My picture" />
      </div>
    </div>
  );
};

export default Montreal;
