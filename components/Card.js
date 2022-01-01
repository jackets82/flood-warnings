function Card({
  background,
  location,
  severity,
  description,
  handleCardClick,
  id,
  message,
}) {
  return (
    <div
      message={message}
      key={id}
      onClick={handleCardClick}
      className={` group flex flex-col w-auto rounded-lg shadow-lg justify-between h-auto prose overflow-hidden bg-zinc-300 pt-5 mt-3 cursor-pointer relative hover:scale-105 hover:shadow-2xl
       transition-all duration-300`}
    >
      <p className="absolute w-full text-sm  font-bold">Click for further details</p>
      <h3 className="">Area: {location}</h3>
      <p className="px-2">{description}</p>
      {/* <p className=" scale-0 group-hover:scale-100 absolute top-20 p-2 w-1/2 left-16 bg-white rounded-lg shadow-lg transition-all duration-300">
        Click for more details
      </p> */}
      <h4 className={` ${background} w-full h-24 pt-8 `}>
        Severity Level : {severity}
      </h4>
    </div>
  );
}

export default Card;
