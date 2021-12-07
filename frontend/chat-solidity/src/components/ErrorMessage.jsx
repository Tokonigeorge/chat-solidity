import React from "react";

const ErrorMessage = ({ text }) => {
  return (
    <div className="mt-4 text-center text-textBlue font-semibold bg-red-400 bg-opacity-20 py-2 ring-1 ring-red-400 rounded-md">
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;
