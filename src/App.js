import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/User/Register/Register'
import Login from './components/User/Login/Login'; 
import React from 'react';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Topic from './components/PostTopic/Topic';
import { Switch, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Booking from './components/Booking/Booking';
import Profile from './components/User/Profile/Profile';
import Schedule from './components/Schedule/Schedule';
import AuthContext from './components/contexts/AuthContext';
import Error from './components/Error/Error';
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';


function App() {

  const [userInfo, setUserInfo] = useState({isAuth: false, user: ""});
  const localStorageUser = JSON.parse(localStorage.getItem('user'))
  if (localStorageUser !== null && userInfo.user == '') {
		setUserInfo({isAuth:true, user: {...localStorageUser}})
	}

  let navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();

    signOut(auth).then(() => {
      localStorage.removeItem("user");
      navigate("/home");
    }).catch((error) => {
        console.log(error.message)
    })

}


  return (
    <>
    <AuthContext.Provider value={{userInfo }}>
  <Header {...userInfo} handleLogout={handleLogout} />
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
  <Route path="*" element={<Error />} />
  </Routes>
  </AuthContext.Provider>
  </>
  );
}

export default App;
