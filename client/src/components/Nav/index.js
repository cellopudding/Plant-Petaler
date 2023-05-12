import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart/index";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">
              <AccountCircleIcon />
            </Link>
          </li>
        </ul>
      );
    }
  }
  return (
    <header className="flex-row px-1">
      <h1 className="app-name">
        <Link to="/">Plant Petaler</Link>
      </h1>
      <div className="flex-row">
        <nav>{showNavigation()}</nav>
        <Cart />
      </div>
    </header>
  );
}
export default Nav;










