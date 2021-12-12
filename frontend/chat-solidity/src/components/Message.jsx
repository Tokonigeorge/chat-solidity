import React from "react";

const Message = ({ style, message }) => {
  return (
    <div
      className={`${style} w-auto max-w-1/2 p-2 text-left rounded-lg text-sm text-textBlue font-semibold break-words`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
