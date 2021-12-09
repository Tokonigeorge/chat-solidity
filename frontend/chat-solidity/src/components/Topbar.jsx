import React from "react";
import Profile from "./Profile";

const Topbar = () => {
  return (
    <div className="flex items-center pt-4">
      <Profile style={"w-8 h-8"} />
      <p className="text-textBlue font-semibold ml-3">Say hi to me</p>
    </div>
  );
};

export default Topbar;
