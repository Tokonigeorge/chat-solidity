import React from "react";
import Message from "./Message";

const SentMessage = () => {
  return (
    <div className="pr-4 flex flex-col items-end pb-4">
      <p className="text-textBlue font-semibold text-xs pb-2">You 11:24 AM</p>
      <Message style="bg-gray-300 bg-opacity-50" />
    </div>
  );
};

export default SentMessage;
