import React from "react";
import "../styles/loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="ls-particles ls-part-1"></div>
        <div className="ls-particles ls-part-2"></div>
        <div className="ls-particles ls-part-3"></div>
        <div className="ls-particles ls-part-4"></div>
        <div className="ls-particles ls-part-5"></div>
        <div className="lightsaber ls-left ls-green"></div>
        <div>
          <div className="lightsaber ls-right ls-red"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;