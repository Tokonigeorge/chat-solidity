import React from "react";

const Message = ({ style }) => {
  return (
    <div
      className={`${style} w-auto max-w-1/2 p-2 text-left rounded-lg text-sm text-textBlue font-semibold break-words`}
    >
      <p>
        My name is Bukola and this is my message to the world, I'm so happy
        indeed, I am. I am so happy.
      </p>
    </div>
  );
};

export default Message;
