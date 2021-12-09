import React from "react";
import profileImage from "../assets/profile.jpg";
import Message from "./Message";

const ParticipantMessage = () => {
  return (
    <div className="ml-4 w-full pb-4">
      <p className="text-textBlue font-semibold text-xs ml-8 pb-2">
        Kate Johnson. 11:24 AM
      </p>
      <div className="flex items-end">
        <img
          src={profileImage}
          alt="profile image"
          className="w-6 h-6 object-cover rounded-full"
        />
        <Message style={"bg-white ml-2"} />
      </div>
    </div>
  );
};

export default ParticipantMessage;
