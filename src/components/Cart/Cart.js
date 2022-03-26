import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartItem, removeItemFromCart }) => {
  // console.log(props);
  return (
    <div className="cart-item">
      <img src={cartItem.img} alt="" />
      <p>{cartItem.name}</p>
      <a onClick={() => removeItemFromCart(cartItem)}>
        <FontAwesomeIcon icon={faBackspace} />
      </a>
    </div>
  );
};

export default Cart;
