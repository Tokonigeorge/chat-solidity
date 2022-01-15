import React from "react";
import Message from "./Message";
import { getDate } from "../utils/date";

const SentMessage = ({ date, message }) => {
  return (
    <div className="pr-4 flex flex-col items-end pb-6">
      <p className="text-textBlue font-semibold text-xs pb-2">
        You, {getDate(date)}
      </p>
      <Message style="bg-gray-300 bg-opacity-50" message={message} />
    </div>
  );
};

export default SentMessage;
