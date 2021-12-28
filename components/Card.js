import MyModal from "./Modal";

function Card({ background, location, severity, description, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col w-auto rounded-lg shadow-lg justify-between h-auto prose overflow-hidden bg-zinc-300 pt-5 cursor-pointer`}
    >
      <h3 className="">Area: {location}</h3>
      <p>{description}</p>
      <h4 className={` ${background} w-full h-24 pt-8`}>
        Severity Level : {severity}
      </h4>
    </div>
  );
}

export default Card;
