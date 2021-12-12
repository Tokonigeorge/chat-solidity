import React from "react";
import Profile from "./Profile";
import { useDataContextVal } from "../context/dataContext";

const Topbar = () => {
  const [{ avatar }] = useDataContextVal();

  return (
    <div className="flex items-center pt-4">
      <Profile style={"w-8 h-8 ring-opacity-40"} url={avatar} />
      <p className="text-textBlue font-semibold ml-3">Say hi to me</p>
    </div>
  );
};

export default Topbar;
