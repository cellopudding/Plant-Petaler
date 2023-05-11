import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./navbar.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar">
          <div className="left">
            <Link to="/" className="name">
              Plants
            </Link>
          </div>
          <div className="right">
            <div className="icons">
              <ul>
              <li>
              <Link to="/Install">Install</Link>
                </li>
                <li>
                  <Link to="/orderHistory">Order History</Link>
                </li>
                <li>
                  <Link to="/cart">
                    <FavoriteIcon />
                  </Link>
                </li>
                <li>
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                </li>
              </ul>
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
              <ul>
                <li>
                  <Link to="/login">
                    <AccountCircleIcon />
                  </Link>
                </li>
              </ul>
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
