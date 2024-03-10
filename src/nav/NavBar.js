import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./navbar.css";
import {
  FaSearch,
} from "react-icons/fa";
const Navbar = () => {
  const { isLoggedIn, setLoggedIn } = useAuth();

  const handleLogout = () => {
    // Implement your logout logic and set isLoggedIn to false
    setLoggedIn(false);
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <span>V</span>ote
          <span className="for">F</span>or
          <span>C</span>hange
        </h2>
      </div>
      <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>
            <FaSearch />
          </button>
        </div>
      <div className="menu-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
         
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/Login" className="loginbutton">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
