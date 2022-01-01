import Button from "./Button";

function Header({ handleClick }) {
  return (
    <div className=" z-10 sticky shadow bg-white bg-opacity-80 w-screen flex flex-col justify-center items-center top-0">
      <h1 className=" text-3xl font-bold py-5 underline">UK Flood Warnings</h1>
      <p>Please select severity level</p>
      <div className="flex gap-2 py-3 ">
        <Button
          handleClick={handleClick}
          title={1}
          bgColor={"bg-red-500"}
          hover={"hover:bg-red-600 hover:text-white"}
          text={"Severe Flooding, Danger to Life."}
        />
        <Button
          handleClick={handleClick}
          title={2}
          bgColor={"bg-orange-500"}
          hover={"hover:bg-orange-600 hover:text-white"}
          text={"Flooding is Expected, Immediate Action Required."}
        />
        <Button
          handleClick={handleClick}
          title={3}
          bgColor={"bg-yellow-500"}
          hover={"hover:bg-yellow-600 hover:text-white"}
          text={"Flooding is Possible, Be Prepared."}
        />
        <Button
          handleClick={handleClick}
          title={4}
          bgColor={"bg-green-500"}
          hover={"hover:bg-green-600 hover:text-white"}
          text={"The warning is no longer in force"}
        />
      </div>
    </div>
  );
}

export default Header;
