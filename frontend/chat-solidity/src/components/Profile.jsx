import React from "react";
import profilePic from "../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="">
      <img
        src={profilePic}
        alt=""
        className="md:w-56 md:h-56 w-32 h-32 rounded-full object-cover ring-1 ring-gray-200"
      />
    </div>
  );
};

export default Profile;
