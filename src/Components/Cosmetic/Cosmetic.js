import React from "react";
import { addToDB } from "../Utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    addToDB(id)
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
    </div>
  );
};

export default Cosmetic;
