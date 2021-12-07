import React, { useState } from "react";

const Nameinput = ({}) => {
  const [value, setValue] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventdefault();
    if (value.length === 0) {
      return setEmptyInput(true);
    }
    console.log(value);
  };

  return (
    <div className="w-screen px-10 md:w-96 mt-8 ">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Please type in a name"
          className="w-full p-2 rounded-md outline-none text-textBlue font-semibold"
        />
        {emptyInput && <p>Don't be shy, put in a name</p>}
        <button
          type={"submit"}
          onClick={(e) => handleSubmit(e)}
          className={`mt-4 w-full bg-boldGreen py-2 px-3 rounded-md bg-opacity-60 text-textBlue font-semibold shadow-md`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Nameinput;
