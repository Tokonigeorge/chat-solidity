import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Nameinput = ({}) => {
  const [value, setValue] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      return setEmptyInput(true);
    }
    console.log(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setEmptyInput(false);
  };

  return (
    <div className="w-screen px-10 md:w-96 mt-8 ">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder="What should we call you?"
          className={`w-full p-2 rounded-md outline-none text-textBlue font-semibold ${
            emptyInput && "ring-1 ring-red-300"
          } ${value.length > 0 && "ring-1 ring-blue-300"}`}
        />
        {emptyInput && <ErrorMessage text="Don't be shy, put in a name :)" />}
        <button
          type={"submit"}
          onClick={(e) => handleSubmit(e)}
          className={`mt-4 w-full bg-boldGreen py-2 px-3 rounded-md bg-opacity-60 hover:bg-opacity-70 ease-in text-textBlue font-semibold shadow-md`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Nameinput;
