import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Topbar from "../components/Topbar";
import ParticipantList from "../components/ParticipantList";

const ChatPage = () => {
  return (
    <>
      <div className=" hidden md:flex">
        <Sidebar />
        <div className="flex-auto h-screen py-2.5 pr-4">
          <Chat />
        </div>
      </div>
      <div className="block md:hidden px-4">
        <div className="sticky top-0 bg-bgWhite pl-2">
          <Topbar />
          <div className="pt-4 pb-2 border-b border-gray-200 flex">
            <p className="text-sm text-textGray font-bold pr-3">Participants</p>
            <p className="text-sm text-textGray font-bold px-3">Messages</p>
          </div>
        </div>
        {/* <div className="mt-2">
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
        </div> */}
        <div className="h-screen">
          <Chat />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
