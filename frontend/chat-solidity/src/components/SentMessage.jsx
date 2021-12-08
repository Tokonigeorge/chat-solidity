import React from "react";
import Message from "./Message";

const SentMessage = () => {
  return (
    <div className="ml-4 w-full flex flex-col items-end pb-4">
      <p className="text-textBlue font-semibold text-xs pb-2 -mr-14">
        You 11:24 AM
      </p>
      <Message style="-mr-14 bg-gray-500 bg-opacity-30" />
    </div>
  );
};

export default SentMessage;
