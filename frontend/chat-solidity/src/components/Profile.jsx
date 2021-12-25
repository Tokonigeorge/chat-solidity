import React from "react";
import profilePic from "../assets/profile.jpg";
import imageOne from "../assets/imageOne.png";
import imageTwo from "../assets/imageTwo.png";
import imageThree from "../assets/imageThree.png";
import imageFour from "../assets/imageFour.png";
// import { imageUrl } from "./AvatarPick";

const Profile = ({ style, url }) => {
  return (
    <div className="">
      <img
        src={url ? imageUrl(url) : profilePic}
        alt=""
        className={` ${style} rounded-full object-cover ring-1 ring-textBlue shadow-lg`}
      />
    </div>
  );
};

export default Profile;

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
