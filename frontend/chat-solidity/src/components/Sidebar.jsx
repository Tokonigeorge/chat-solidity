import React from "react";
import Profile from "./Profile";
import ParticipantList from "./ParticipantList";
import "../styles/scrollbar.css";
import SearchInput from "./SearchInput";

const Sidebar = ({}) => {
  return (
    <div className="w-80 h-screen pt-16 overflow-y-scroll styleScroll">
      <div className="flex flex-col items-center">
        <Profile style={"w-32 h-32"} />
        <p className="text-textBlue font-semibold text-xl mt-2">Say hi to me</p>
      </div>
      <div className="mx-4">
        {" "}
        <SearchInput />
      </div>
      <div className="mt-4 p-4">
        <p className="text-sm text-textGray font-bold sticky top-0">
          {" "}
          Participants
        </p>
        <div className="mt-4 overflow-y-scroll styleScroll">
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
          <ParticipantList />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
