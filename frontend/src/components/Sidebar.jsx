import React from "react";
import Profile from "./Profile";
import ParticipantList from "./ParticipantList";
import "../styles/scrollbar.css";
import SearchInput from "./SearchInput";
import { useDataContextVal } from "../context/dataContext";

const Sidebar = ({}) => {
  const [{ waves, list, avatar }] = useDataContextVal();

  return (
    <div className="md:w-80 w-64 h-screen pt-16 overflow-y-scroll styleScroll">
      <div className="flex flex-col items-center">
        <Profile style={"w-32 h-32 ring-opacity-40"} url={avatar} />
        <p className="text-textBlue font-semibold text-xl mt-2">Say hi to me</p>
      </div>
      <div className="mx-4">
        {" "}
        <SearchInput />
      </div>
      <div className="">
        <p className="text-sm text-textGray font-bold sticky px-4 pt-8 pb-2 -top-20 bg-bgWhite">
          {" "}
          Participants
        </p>
        <div className="mt-4 overflow-y-scroll styleScroll px-4">
          {list?.map((i, indx) => {
            return (
              <ParticipantList
                name={i.name}
                date={i.timestamp}
                message={i.message}
                key={indx}
                url={i.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
