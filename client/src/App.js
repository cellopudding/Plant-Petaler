import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Nav from "./components/Nav/Navbar";
import Store from "./components/Store/Store";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          {/* home page */}
          <Route path="/" element={<Store />} />
          {/* cart page */}
          <Route path="/cart" element={<Cart />} />
          {/* login page */}
          {/* <Route path="/login" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
