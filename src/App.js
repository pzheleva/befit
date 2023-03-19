import logo from './logo.svg';
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

function App() {
  return (
    <>
  <Header/>
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
  </Routes>
  </>
  );
}

export default App;
