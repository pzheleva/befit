import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Register from "./components/User/Register/Register";
import Login from "./components/User/Login/Login";
import React from "react";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import Topic from "./components/PostTopic/Topic";
import { Switch, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Booking from "./components/Booking/Booking";
import Profile from "./components/User/Profile/Profile";
import Schedule from "./components/Schedule/Schedule";
import AuthContext from "./components/contexts/AuthContext";
import Error from "./components/Error/Error";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  const [userInfo, setUserInfo] = useState({ isAuth: false, user: "" });
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  if (localStorageUser !== null && userInfo.user == "") {
    console.log("test");
    setUserInfo({ isAuth: true, user: { ...localStorageUser } });
  }


 const refreshLogin = () => {
  setUserInfo({ isAuth: false, user: "" });
 }
 

  return (
    <>
      <AuthContext.Provider value={{ userInfo, refreshLogin }}>
        <Header {...userInfo} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post-topic" element={<Topic />} />
          <Route path="/blog/details/:topicId" element={<Details />} />
          <Route path="/blog/details/:topicId/edit" element={<Edit />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </AuthContext.Provider>
    </>
  );
}

export default App;
