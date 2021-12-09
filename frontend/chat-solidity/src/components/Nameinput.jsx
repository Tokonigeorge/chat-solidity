import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Nameinput = ({}) => {
  const [value, setValue] = useState("");
  const [emptyInput, setEmptyInput] = useState(true);
  const [longName, setLongName] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value.length > 0) {
      setEmptyInput(false);
      if (e.target.value.length >= 15) {
        setLongName(true);
      } else {
        setLongName(false);
      }
    } else {
      setEmptyInput(true);
    }
    // value.length > 0 && setEmptyInput(false);
  };

  return (
    <div className="w-full px-10 md:w-96 mt-8 ">
      <form className="flex flex-col">
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder="What should we call you?"
          className={`w-full p-2 rounded-md outline-none text-textBlue font-semibold ${
            value.length > 0 && "ring-1 ring-blue-300"
          }`}
          maxLength={15}
        />
        {longName && <ErrorMessage text="Make it a shorter name :/" />}
        {!emptyInput && (
          <p
            role="button"
            className={`mt-4 w-fulll text-center bg-boldGreen py-2 px-3 rounded-md bg-opacity-60 hover:bg-opacity-70 ease-in text-textBlue font-semibold shadow-md`}
          >
            Submit
          </p>
        )}
        {/* <button
          type={"submit"}
          onClick={(e) => handleSubmit(e)}
          className={`mt-4 w-full bg-boldGreen py-2 px-3 rounded-md bg-opacity-60 hover:bg-opacity-70 ease-in text-textBlue font-semibold shadow-md`}
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Nameinput;
