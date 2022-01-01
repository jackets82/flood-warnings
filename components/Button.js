import React from "react";

function Button({ handleClick, title, bgColor, hover, text }) {
  return (
    <>
      <button
        className={`${hover} ${bgColor} px-5 py-1 rounded transform duration-300 md:w-32 group`}
        value={title}
        onClick={handleClick}
        key={title}
      >
        {title}
        <span>
          <h3 className={` p-2 scale-0 right-0 ${bgColor} top-10 rounded absolute group-hover:scale-100 transition-all duration-300 group-hover:text-black shadow-2xl`}>{text}</h3>
        </span>
      </button>
    </>
  );
}

export default Button;
