import React, { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDataContextVal } from "../context/dataContext";
import { updateName } from "../context/actions";
import AvatarPick from "./AvatarPick";

const Nameinput = ({}) => {
  const [{ name }, dispatch] = useDataContextVal();
  // const [value, setValue] = useState("");
  const [emptyInput, setEmptyInput] = useState(true);
  const [longName, setLongName] = useState(false);

  const handleChange = (e) => {
    dispatch(updateName(e.target.value));
    // setValue(e.target.value);
    //check length of input
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

  useEffect(() => {
    if (name.length > 0) {
      setEmptyInput(false);
    } else {
      setEmptyInput(true);
    }
  }, []);

  return (
    <div className="w-full px-10 md:w-96 mt-8 ">
      <form className="flex flex-col">
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
          placeholder="What should we call you?"
          className={`w-full p-2 rounded-md outline-none text-textBlue font-semibold ${
            name.length > 0 && "ring-1 ring-blue-300"
          }`}
          maxLength={15}
        />
        {longName && <ErrorMessage text="Make it a shorter name :/" />}
        <AvatarPick />
        {!emptyInput && (
          <Link to="/chat">
            <p
              className={`mt-4 mb-4 w-fulll text-center bg-boldGreen py-2 px-3 rounded-md bg-opacity-60 hover:bg-opacity-70 ease-in text-textBlue font-semibold shadow-md`}
            >
              Submit
            </p>
          </Link>
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
