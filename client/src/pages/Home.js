import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
// import Slider from "../components/Slider/Slider";
import "../components/ProductList/product.css";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      {/* <Slider /> */}
      <ProductList />
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
