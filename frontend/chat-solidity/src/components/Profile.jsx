import React from "react";
import profilePic from "../assets/profile.jpg";

const Profile = ({ style }) => {
  return (
    <div className="">
      <img
        src={profilePic}
        alt=""
        className={` ${style} rounded-full object-cover ring-1 ring-textBlue shadow-lg`}
      />
    </div>
  );
};

export default Profile;
