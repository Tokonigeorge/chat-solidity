import React from "react";
import ChatInput from "./ChatInput";
import Typing from "./Typing";
import ChatArea from "./ChatArea";

const Chat = () => {
  return (
    <div className="bg-bgChat h-full rounded-md relative w-full">
      <div className="sticky top-0 py-3.5 font-bold text-textBlue border-b border-gray-500 border-opacity-20 pl-4">
        Messages
      </div>
      <ChatArea />
      <div className="absolute bottom-0 left-0 w-full">
        <Typing />
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
