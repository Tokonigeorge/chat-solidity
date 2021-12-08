import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const ChatPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-auto h-screen py-2.5 pr-4">
        <Chat />
      </div>
    </div>
  );
};

export default ChatPage;
