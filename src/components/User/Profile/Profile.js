import "./Profile.css"
import { getId, getUser, getBookings, getPosts } from "../../../services/userService";
import React, { useEffect, useState } from "react";

export default function Profile() {

const id = getId();
const [userInfo, setUser] = useState([]);
const [userBookings, setUserBookings] = useState([]);
const [userPosts, setUserPosts] = useState([]);


useEffect(() => {
    async function getUserInfo() {
        const result = await getUser(id);
        setUser(result);
        
    }

    getUserInfo();

    async function getUserBookings() {
      const reservations = [];
      const result = await getBookings(id);
      if(result){
        result.map(x => {
          reservations.push(`${x.class} - ${x.date} - ${x.time}`);
        })
      }
      setUserBookings(reservations);
      
  }

  getUserBookings();

  async function getUserPosts() {
    const posts = [];
    const result = await getPosts(id);
    if(result){
      result.map(x => {
        posts.push(`Category: ${x.category}, Title: ${x.title}`);
      })
    }
    setUserPosts(posts);
    
}

getUserPosts();

}, []);




// userInfo.bookings.map(x => {
//   reservations.push(`${x.class} - ${x.date} - ${x.time}`);
// })

// userInfo.posts.map(x => {
//   posts.push(`${x.category} - ${x.title}`);
// })

    return(
<div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
  {" "}
  <div className="card p-4">
    {" "}
    <div className=" image d-flex flex-column justify-content-center align-items-center">
      {" "}
      <button className="btn btn-secondary">
        {" "}
        <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} />
      </button>{" "}
      <span className="name mt-3">{userInfo.firstName} {userInfo.lastName}</span>
      <span className="idd">{userInfo.email}</span>{" "}
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        {" "}

      </div>{" "}
      <div className="d-flex flex-row justify-content-center align-items-center mt-3">
        {" "}
  
      </div>{" "}

      <div className="text mt-3">
      <p>Reservations</p>
        <ul>
        {userBookings.length > 0 ? (
                <>
				{ userBookings.map(c => <li>{c}</li>) }
			 </> )
			 : 
			 <h4 className="noClasses">No bookings found.</h4>}
        </ul>

        <p>Posts</p>
        <ul>
          
        {userPosts.length > 0 ? (
                <>
				{ userPosts.map(c => <li>{c}</li>) }
			 </> )
			 : 
			 <h4 className="noClasses">No posts found.</h4>}
        </ul>
      </div>{" "}
     
    </div>{" "}
  </div>
</div>

    )
}