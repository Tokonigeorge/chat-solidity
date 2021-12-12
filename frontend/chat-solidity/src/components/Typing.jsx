import React from "react";
import "../styles/loadinganimation.css";

const Typing = () => {
  return (
    <div className="flex items-center mb-2 ml-4">
      <div className="bg-bgWhite w-7 h-7 rounded-full mr-2 relative">
        <div className="dot-flashing"></div>
      </div>
      <p className="text-textBlue text-xs"> You are typing</p>
    </div>
  );
};

export default Typing;
