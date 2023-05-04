import "./product.css";
import "../pages/products";

export const Product = (props) => {
  const { name, description, price, image, quantity } = props.data;
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image} alt="plant" />
      <p>{description}</p>
      <p>${price}</p>
      <p>{quantity}</p>

      <button>Add to cart</button>
    </div>
  );
};
