import React from "react";
import Profile from "./Profile";

const Sidebar = ({}) => {
  return (
    <div className="w-80 h-screen flex flex-col items-center mt-16">
      <Profile style={"w-32 h-32"} />
      <p className="text-textBlue font-semibold text-xl mt-2">Say hi to me</p>
    </div>
  );
};

export default Sidebar;
