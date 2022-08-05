import React from "react";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    console.log(`Item Added`, id);
  };

  const addToCartWithParam = () => addToCart(id);

  return (
    <div className="product">
      <h2>Product Name: {name} </h2>
      <p>Price: ${price} </p>
      <p>
        <small>Product ID: {id} </small>
      </p>
      <button onClick={addToCartWithParam}>Add to Cart</button>
      <button onClick={() => addToCart(id)}>Purchase</button>
    </div>
  );
};

export default Cosmetic;
