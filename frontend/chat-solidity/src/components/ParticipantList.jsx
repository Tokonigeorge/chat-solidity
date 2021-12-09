import React from "react";
import profilePic from "../assets/profile.jpg";

const ParticipantList = () => {
  return (
    <div className="flex items-start mb-4 p-2 rounded-md cursor-pointer hover:bg-gray-200 ease-linear">
      <img
        src={profilePic}
        alt=""
        className="w-8 h-8 rounded-full object-cover mr-2"
      />
      <div>
        <p className="text-textBlue font-bold">Bukola Ebikefe</p>
        <p className="text-xs text-textGray">This is the message...</p>
      </div>
    </div>
  );
};

export default ParticipantList;
