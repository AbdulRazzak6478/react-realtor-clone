import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit() {
    try {
      if(auth.currentUser.displayName !== name)
      {
        //update display name in firebase auth
        await updateProfile(auth.currentUser,{
          displayName:name,
        });
        // update name in the fireStore
        const docRef = doc(db , "users" ,auth.currentUser.uid);
        await updateDoc(docRef ,{
          name,
        });
      }
      toast.success("Profile Details Updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }
  return (
    <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-center mt-6 ">My Profile</h1>
      <div className="w-full md:w-[50%] px-6 mt-6">
        <form>
          {/* Name Input */}
          <input
            type="text"
            id="name"
            value={name}
            disabled={!changeDetails}
            onChange={onChange}
            className={`w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white-700 border border-gray-300 rounded transition ease-in-out ${
              changeDetails && "bg-red-200 focus:bg-red-200 "
            }`}
          />
          {/* Email Input */}
          <input
            type="email"
            id="email"
            value={email}
            disabled={!changeDetails}
            onChange={onChange}
            className={`w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white-700 border border-gray-300 rounded transition ease-in-out  `}
          />
          <div className="flex justify-between text-sm sm:text-lg mb-6">
            <p className="flex items-center ">
              Do you want to change your name?
              <span
                onClick={() => {
                  changeDetails && onSubmit();
                  setChangeDetails((prevState) => !prevState);
                }}
                className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer "
              >
                {changeDetails ? "Apply change" : "Edit"}
              </span>
            </p>
            <p
              onClick={onLogout}
              className="text-blue-600 hover:text-blue-800 cursor-pointer transition ease-in-out duration-200"
            >
              Sign out
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
