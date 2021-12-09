import React, { useState } from "react";
import { useDataContextVal } from "../context/dataContext";
import { updateTyping } from "../context/actions";

const ChatInput = () => {
  const [{ typing }, dispatch] = useDataContextVal();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    dispatch(updateTyping(true));
  };

  const handleFocusOut = () => {
    dispatch(updateTyping(false));
  };

  return (
    <div className="mx-4">
      <form className="flex bg-bgWhite w-full mb-4 rounded-lg">
        <input
          placeholder="send me a message through the blockchain..."
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          onFocus={handleFocus}
          onBlur={handleFocusOut}
          className="w-full bg-transparent outline-none py-3 px-2 text-xs text-textBlue"
        />
        <button
          type="submit"
          className="bg-boldGreen px-2.5 my-1 mr-1.5 rounded-lg text-bgWhite"
        >
          <Sendicon style={{ textColor: "white" }} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;

const Sendicon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 20 20"
      fill="currentColor"
      className=" transform rotate-45"
    >
      <path
        fill="currentColor"
        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 
      1.428a1 1 0 001.17-1.408l-7-14z"
      />
    </svg>
  );
};
