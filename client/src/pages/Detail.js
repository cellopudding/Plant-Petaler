import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import YardIcon from "@mui/icons-material/Yard";
import MapIcon from "@mui/icons-material/Map";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { products, cart } = state;
  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
      console.log(products);
    }

    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);
  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };
  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });
    idbPromise("cart", "delete", { ...currentProduct });
  };
  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1">
          <Link to="/" className="my-2 arrows">
            <ArrowBackIcon /> Back to Plants
          </Link>
          <div className="flex-row details-container">
            <div className="details-image">
              <img
                src={`${currentProduct.image}`}
                alt={currentProduct.name}
                id="details-image"
              />
              {loading ? <img src={spinner} alt="loading" /> : null}
            </div>
            <div className="details-text">
              <h2>{currentProduct.name}</h2>
              <h4 id="price">${currentProduct.price} </h4>
              <p id="description">{currentProduct.description}</p>
              <p id="watering">
                <WaterDropIcon style={{ color: "#0fa3b1" }} />
                Watering: {currentProduct.watering}
              </p>
              <p id="sun">
                <WbSunnyIcon style={{ color: "#f5cb5c" }} />
                Sun: {currentProduct.sun}{" "}
              </p>
              <p id="hardiness_zone">
                <MapIcon style={{ color: "#333131" }} />
                Hardiness Zone: {currentProduct.hardiness_zone}{" "}
              </p>
              <p id="maintenance">
                <HourglassBottomIcon style={{ color: "#f9627d" }} />
                Maintenance: {currentProduct.maintenance}{" "}
              </p>
              <p id="care_level">
                <YardIcon style={{ color: "#ae76a6" }} />
                Care Level: {currentProduct.care_level}{" "}
              </p>
              <p>
                <button onClick={addToCart} className="addCartBtn">
                  Add to Cart
                </button>
                <button
                  disabled={!cart.find((p) => p._id === currentProduct._id)}
                  onClick={removeFromCart}
                  className="addCartBtn"
                >
                  Remove from Cart
                </button>
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <Cart />
    </>
  );
}
export default Detail;
