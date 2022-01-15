import React, { useState } from "react";

const SearchInput = () => {
  // const [{ list, waves }, dispatch] = useDataContextVal();
  const [value, setValue] = useState("");
  // const filterList = (arr, value) => {
  //   return arr?.filter((v, i, a) => a.findIndex((t) => t.name === value) === i);
  // };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="w-full flex items-center bg-gray-300 bg-opacity-30 rounded-md mt-4 text-sm">
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type={"text"}
          placeholder="Search"
          className="outline-none w-full py-2 px-3 bg-transparent text-textBlue"
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </form>
      <span className="mr-3 text-bgChat">
        <SearchIcon style={{ textColor: "#EDF0F5" }} />
      </span>
    </div>
  );
};

export default SearchInput;

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill="currentColor"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        // clipRule="evenodd"
      />
    </svg>
  );
};
