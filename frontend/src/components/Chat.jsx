import React from "react";
import ChatInput from "./ChatInput";
import Typing from "./Typing";
import ChatArea from "./ChatArea";
import { useDataContextVal } from "../context/dataContext";

const Chat = () => {
  const [{ typing }] = useDataContextVal();
  return (
    <div className="bg-gray-200 h-full rounded-md md:relative w-full">
      <div className="sticky top-0 py-3.5 font-bold text-textBlue border-b border-gray-500 border-opacity-20 pl-4 hidden md:block">
        Messages
      </div>
      <ChatArea />
      <div className="absolute bottom-0 left-0 w-full z-10 bg-transparent pt-2 ">
        {typing && <Typing />}
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
