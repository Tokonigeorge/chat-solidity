import React from "react";
import "../styles/loadinganimation.css";

const Typing = () => {
  return (
    <div className="flex items-center pb-2 ml-4 md:bg-transparent bg-gray-200">
      <div className="bg-bgWhite w-7 h-7 rounded-full mr-2 relative">
        <div className="dot-flashing"></div>
      </div>
      <p className="text-textBlue text-xs"> You are typing</p>
    </div>
  );
};

export default Typing;
