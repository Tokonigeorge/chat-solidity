import React, { useState } from "react";
import { useDataContextVal } from "../context/dataContext";
import { updateAvatar } from "../context/actions";
import imageOne from "../assets/imageOne.png";
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";

const AvatarPick = () => {
  const [{ avatar }, dispatch] = useDataContextVal();
  const avatarUrls = ["one", "two", "three", "four"];
  const handleClick = (i) => {
    dispatch(updateAvatar(i));
  };

  return (
    <div className="mt-4">
      <p className="font-semibold text-textBlue mb-4">Pick an Avatar</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-4 w-full">
        {avatarUrls?.map((i, indx) => (
          <img
            src={imageUrl(i)}
            alt=""
            className={`w-20 h-20 rounded-md object-contain ring-1 ring-textBlue cursor-pointer shadow-md ${
              avatar === i ? "ring-opacity-100" : "ring-opacity-30"
            }`}
            key={indx}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarPick;

const imageUrl = (i) => {
  if (i === "one") {
    return imageOne;
  } else if (i === "two") {
    return imageTwo;
  } else if (i === "three") {
    return imageThree;
  } else {
    return imageFour;
  }
};
