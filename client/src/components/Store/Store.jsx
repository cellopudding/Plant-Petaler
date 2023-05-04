import React from "react";
import { PRODUCTS } from "../pages/products";
import { Product } from "../Product/Product";
import "./store.css";

function Store() {
  return (
    <div className="store">
      <div className="store-menu">
        <h2>All Plants</h2>
        <h2>Indoor</h2>
        <h2>Outdoor</h2>
        <h2>Edible</h2>
        <h2>Poisonous</h2>
      </div>
      <div className="product-container">
        {""}
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Store;
