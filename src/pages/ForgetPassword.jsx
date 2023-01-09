import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/password.jpg";
import OAuth from "./OAuth";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const onChangeEmail = (events) => {
    console.log(events.target.value);
    setEmail(events.target.value);
  };
  return (
    <section>
      <div className="text-3xl text-center mt-6 font-bold">Forget Password</div>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src={img1} alt="sign-in-img" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form autoComplete="off">
            <input
              className="w-full mb-6 px-3 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              value={email}
              type="email"
              id="email"
              placeholder="Email Address"
              onChange={onChangeEmail}
            />
            <div className="flex justify-between text-sm sm:text-lg ">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-500  hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
          </form>
          <button
            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            type="submit"
          >
            send reset password
          </button>
          <div className="my-4 items-center before:border-t flex before:flex-1  before:border-gray-500 after:border-t after:flex-1  after:border-gray-500">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth />
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
