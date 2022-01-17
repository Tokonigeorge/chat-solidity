import React from "react";
// import profilePic from "../assets/profile.jpg";
import imageOne from "../assets/imageOne.png";
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";
// import { imageUrl } from "./AvatarPick";

const ParticipantList = ({ name, message, date, url }) => {
  const cutstringlength = (string, num) => {
    return string?.length > num ? string.substring(0, num) + "..." : string;
  };
  return (
    <div className="flex items-start mb-4 p-2 rounded-md cursor-pointer hover:bg-gray-200 ease-linear">
      <img
        src={imageUrl(url)}
        alt=""
        className="w-8 h-8 rounded-full object-cover mr-2"
      />
      <div>
        <p className="text-textBlue font-bold">{name}</p>
        <p className="text-xs text-textGray">{cutstringlength(message, 35)}</p>
      </div>
    </div>
  );
};

export default ParticipantList;

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
