import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart/index";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

// import "./navbar.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        // <div className="navbar">
        //   <div className="left">
        <ul className="flex-row">
          {/* </ul> */}
          {/* // </div> */}
          {/* <div className="right">
            <div className="icons">

              <ul> */}
          <li className="mx-1">
            <Link to="/Install">Install</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <Link to="/cart">
              <FavoriteIcon />
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        //   </div>
        // </div>
        // </div>

      );
    } else {
      return (
        // <div className="navbar">
        //   <div className="left">
        <ul className="flex-row">
          {/* </div>
          <div className="right">
            <div className="icons"> */}

          <li className="mx-1">
            <Link to="/login">
              <AccountCircleIcon />
            </Link>
          </li>
        </ul>
        //     </div>
        //   </div>
        // </div>
      );
    }
  }
  return (
    <header className="flex-row px-1">
      <h1 className="app-name">
        <Link to="/">Plant Shop</Link>
      </h1>
      <div className="flex-row">
        <nav>{showNavigation()}</nav>
        <Cart />
      </div>
    </header>
  );
}

export default Nav;
