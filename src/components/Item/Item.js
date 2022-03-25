import React from "react";
import "./Item.css";

const Item = ({ items, addToCart }) => {
  const { img, name, brand, Processor, price } = items;
  return (
    <div className="item">
      <img src={img} alt="" />
      <div className="info">
        <h2>{name}</h2>
        <p>Brand : {brand}</p>
        <p>Processor: {Processor}</p>
        <h3>Price: {price} </h3>
      </div>
      <button onClick={() => addToCart(items)}>ADD TO CART</button>
    </div>
  );
};

export default Item;
