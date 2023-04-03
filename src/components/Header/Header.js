import { Link } from "react-router-dom";
import "./Header.css"
import Blog from "../Blog/Blog";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import AuthContext from "../contexts/AuthContext";
import { signOut, getAuth } from "firebase/auth";

export default function Header() {


  const {userInfo, setUserInfo, refreshLogin} = useContext(AuthContext);
  const isAuth = userInfo.isAuth
  const navigate = useNavigate();
  const auth = getAuth();

  const [isLogged, setIsLogged] = useState(isAuth);

  async function handleLogout(e) {
    e.preventDefault();

    signOut(auth).then(() => {
      localStorage.clear();
      navigate("/login");
      refreshLogin(false);
     
    }).catch((error) => {
        console.log(error.message)
    })

}
  return (
    <header className="header fixed-top">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-header">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/home"><img src="/assets/images/logo/logo.png" alt="logo img" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link className="nav-link " to="/home">
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">about</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">schedule</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">blog</Link>
            </li>
           
          {isAuth ? (
            <>
            <li className="nav-item">
              <Link className="nav-link" to="/book">booking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">profile</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link " onClick={handleLogout} to="/home">
                Log out
              </Link>
            </li> 
            </> ) :  (
              <>
               <li className="nav-item dropdown">
               <a className="nav-link " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Sign up / Sign In<span className="sr-only">(current)</span>
               </a>
               <div className="dropdown-menu animation  slideUpIn">
                 <Link className="dropdown-item" to="/login">Sign In</Link>
                 <Link className="dropdown-item" to="/register">Sign Up</Link>
               </div>
             </li>
             </>
            )
              }
            
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}