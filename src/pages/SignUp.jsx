import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import img1 from "../assets/sign-up.jpg";
import OAuth from "./OAuth";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });
  const { name,email, password } = formData;
  const onChangeEmail = (events) => {
    console.log(events.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [events.target.id]: events.target.value,
    }));
  };
  return (
    <section>
      <div className="text-3xl text-center mt-6 font-bold">Sign Up</div>

      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img className="w-full rounded-2xl" src={img1} alt="sign-in-img" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form autoComplete="off">
            <input
              className="w-full mb-6 px-3 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              value={name}
              type="text"
              id="name"
              placeholder="Full name"
              onChange={onChangeEmail}
            />
            <input
              className="w-full mb-6 px-3 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              value={email}
              type="email"
              id="email"
              placeholder="Email Address"
              onChange={onChangeEmail}
            />
            <div className="relative mb-6">
              <input
                className="w-full px-3 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                value={password}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                onChange={onChangeEmail}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-4 top-4 cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between text-sm sm:text-lg ">
              <p className="mb-6">
                Have an account?
                <Link
                  to="/sign-in"
                  className="text-red-500  hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Sign in
                </Link>
              </p>
              <p>
                <Link
                  to="/forget-password"
                  className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out ml-1"
                >
                  Forget password?
                </Link>
              </p>
            </div>
          </form>
          <button
            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            type="submit"
          >
            Sign up
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

export default SignUp;
