import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./navbar.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar">
          <div className="left">
            <Link to="/orderHistory">Order History</Link>
            <li>
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </div>
          <div className="right">
            <div className="icons">
              <Link to="/login">
                <AccountCircleIcon />
              </Link>
              <Link to="/cart">
                <FavoriteIcon />
              </Link>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <div className="left">
            <Link to="/" className="name">
              Plants
            </Link>
          </div>
          <div className="right">
            <div className="icons">
              <Link to="/login">
                <AccountCircleIcon />
              </Link>
              <Link to="/signup" className="signup">
                Sign up
              </Link>
              <Link to="/cart">
                <FavoriteIcon />
              </Link>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <nav>{showNavigation()}</nav>
    // <div className="navbar">
    //   <div className="left">
    //     <Link to="/" className="name">
    //       Plants
    //     </Link>
    //   </div>
    //   <div className="right">
    //     <div className="icons">
    //       <Link to="/login">
    //         <AccountCircleIcon />
    //       </Link>
    //       <Link to="/cart">
    //         <FavoriteIcon />
    //       </Link>
    //       <Link to="/cart">
    //         <ShoppingCartIcon />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Nav;
