const Card = () => {
  return (
    <div className="w-full h-[90vh]">
      <div className="mx-4">
        <div className="grid grid-cols-[3fr_2fr] gap-4">
          <div className="bg-blue-200">Column 1</div>
          <div className="bg-green-200">Column 2</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
