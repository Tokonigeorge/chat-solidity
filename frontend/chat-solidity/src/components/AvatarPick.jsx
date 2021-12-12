import React, { useState } from "react";
import { useDataContextVal } from "../context/dataContext";
import { updateAvatar } from "../context/actions";

const AvatarPick = () => {
  const [{ avatar }, dispatch] = useDataContextVal();
  const avatarUrls = [
    "https://cdn-icons.flaticon.com/png/128/4725/premium/4725904.png?token=exp=1639215540~hmac=49068384c1b04bc29213a94873ca5546",
    "https://cdn-icons.flaticon.com/png/128/3371/premium/3371822.png?token=exp=1639215601~hmac=42372bc0a8ea7562e218cfd22c19fe80",
    "https://cdn-icons.flaticon.com/png/128/3371/premium/3371878.png?token=exp=1639215606~hmac=6b349c93c26df277bfa48f665d88afec",
    "https://cdn-icons.flaticon.com/png/128/1993/premium/1993167.png?token=exp=1639215636~hmac=c20fe1df3be14320d819255041946995",
  ];
  const handleClick = (i) => {
    dispatch(updateAvatar(i.target.src));
  };

  return (
    <div className="mt-4">
      <p className="font-semibold text-textBlue mb-4">Pick an Avatar</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-4 w-full">
        {avatarUrls?.map((i, indx) => (
          <img
            src={i}
            alt=""
            className={`w-20 h-20 rounded-md object-contain ring-1 ring-textBlue cursor-pointer shadow-md ${
              avatar === i ? "ring-opacity-100" : "ring-opacity-30"
            }`}
            key={indx}
            onClick={(i) => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarPick;
