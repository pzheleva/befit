import { Link } from "react-router-dom";
import "./Header.css"
import Blog from "../Blog/Blog";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate(`/home`);
  }

  return (
    <header className="header fixed-top">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html"><img src="/assets/images/logo/logo.png" alt="logo img" /></a>
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
            <li className="nav-item dropdown">
              <a className="nav-link " href="about-us.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                about<span className="sr-only">(current)</span>
              </a>
              <div className="dropdown-menu animation  slideUpIn">
                <a className="dropdown-item" href="about-us.html">about us</a>
                <a className="dropdown-item" href="services.html">services</a>
                <a className="dropdown-item" href="service-single.html">service single</a>
                <a className="dropdown-item" href="trainers.html">trainers</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/book">
                Booking<span className="sr-only">(current)</span>
              </Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">schedule</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link " to="/blog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                blog<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sign up / Sign In<span className="sr-only">(current)</span>
              </a>
              <div className="dropdown-menu animation  slideUpIn">
                <Link className="dropdown-item" to="/login">Sign In</Link>
                <Link className="dropdown-item" to="/register">Sign Up</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link " onClick={logout} to="/home">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}