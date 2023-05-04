import React from "react";
import { PRODUCTS } from "../pages/products";
import { Product } from "../Product/Product";
import "./store.css";

function Store() {
  return (
    <div className="store">
      <div className="storeTitle">
        <h1>All Plants</h1>
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
