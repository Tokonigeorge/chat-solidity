import React from "react";
// import profileImage from "../assets/profile.jpg";
import Message from "./Message";
import { getDate } from "../utils/date";
import imageOne from "../assets/imageOne.png";
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";
// import { imageUrl } from "./AvatarPick";

const ParticipantMessage = ({ date, name, message, url }) => {
  return (
    <div className="pl-4 w-full pb-6">
      <p className="text-textBlue font-semibold text-xs ml-8 pb-2">
        {name}, {getDate(date)}
      </p>
      <div className="flex items-end">
        <img
          src={imageUrl(url)}
          alt="profile image"
          className="w-6 h-6 object-cover rounded-full"
        />
        <Message style={"bg-white ml-2"} message={message} />
      </div>
    </div>
  );
};

export default ParticipantMessage;

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
