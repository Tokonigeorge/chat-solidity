import React from "react";

const Button = ({ type, text, handleClick, style }) => {
  return (
    <button
      type={type}
      onClick={() => handleClick()}
      className={`${style} bg-boldGreen py-2 px-3 rounded-md bg-opacity-60 text-textBlue font-semibold shadow-md`}
    >
      {text}
    </button>
  );
};

export default Button;
