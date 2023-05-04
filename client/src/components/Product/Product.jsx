import "./product.css";
import "../pages/products";

export const Product = (props) => {
  const { name, description, price, image, quantity } = props.data;
  return (
    <div className="card">
      <div className="item">
        <img src={image} alt="plant" />
        <p className="name">{name}</p>
        <p>{description}</p>
        <p>${price}</p>
        <p>{quantity}</p>
        <p>
          <a href="./cart">More info</a>
        </p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
