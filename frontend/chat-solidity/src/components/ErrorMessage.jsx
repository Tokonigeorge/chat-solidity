import React from "react";

const ErrorMessage = ({ text }) => {
  return (
    <div className="mt-4 text-center px-1.5 w-full mx-2 sm:mx-0 sm:w-auto  bg-red-400 bg-opacity-20 py-2 ring-1 ring-red-400 rounded-md">
      <p className="text-textBlue font-semibold">{text}</p>
    </div>
  );
};

export default ErrorMessage;
