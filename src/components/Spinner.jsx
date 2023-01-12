import React from "react";
import spinner from "../assets/svg/spinner.svg";
const Spinner = () => {
  return (
    <div className="bg-black bg-opacity-60 flex justify-center items-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
        <img src={spinner} alt="Loading..." className="h-25" />
      </div>
    </div>
  );
};

export default Spinner;
