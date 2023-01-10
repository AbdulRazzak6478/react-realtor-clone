import React from "react";
import { FcGoogle } from "react-icons/fc";
const OAuth = () => {
  return (
    <button
      className="w-full flex justify-center items-center bg-red-500 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-600 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-700 active:shadow-lg active:transition "
      type="button"
    >
      <FcGoogle className="mr-2 bg-white rounded-full text-2xl" /> continue with google
    </button>
  );
};

export default OAuth;
