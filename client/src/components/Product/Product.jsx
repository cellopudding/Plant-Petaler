import "./product.css";
import "../pages/products";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { name, description, price, image, quantity, id } = props.data;
  return (
    <div className="card">
      <img src={image} alt="plant" />
      <p className="name">{name}</p>
      <p>{description}</p>
      <p>${price}</p>
      <p>{quantity}</p>
      <p>{id}</p>
      <p>
        {/* might need to update this link */}
        <Link to={`/product/${id}`}>More info</Link>
      </p>
      <button>Add to cart</button>
    </div>
  );
};
