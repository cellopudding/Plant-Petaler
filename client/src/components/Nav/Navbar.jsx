import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./navbar.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Plants</Link>
        <Link to="/login">
          <AccountCircleIcon />
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
