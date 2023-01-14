import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import ForgetPassword from "./pages/ForgetPassword";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Toaster} from 'react-hot-toast';
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/offers" element={<Offers />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </Router>
      <Toaster />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
