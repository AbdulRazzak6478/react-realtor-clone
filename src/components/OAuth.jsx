import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
const OAuth = () => {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user
      // to get user  doc is it available
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      // checking for the existing of the account
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      toast.success("Welcome To House Market");
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="w-full flex justify-center items-center bg-red-500 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-600 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-700 active:shadow-lg active:transition "
    >
      <FcGoogle className="mr-2 bg-white rounded-full text-2xl" /> continue with
      google
    </button>
  );
};

export default OAuth;
