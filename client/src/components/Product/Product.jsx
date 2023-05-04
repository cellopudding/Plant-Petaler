import "./product.css";
import "../pages/products";

export const Product = (props) => {
  const { name, description, price, image, quantity } = props.data;
  return (
    <div className="card">
      <img src={image} alt="plant" />
      <p className="name">{name}</p>
      <p>{description}</p>
      <p>${price}</p>
      <p>{quantity}</p>
      <p>
        {/* might need to update this link */}
        <a href="./products/{id}">More info</a> 
      </p>
      <button>Add to cart</button>
    </div>
  );
};
