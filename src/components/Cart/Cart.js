import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  return (
    <div className="cart-irem">
      <img src={props.cartItem.img} alt="" />
      <p>{props.cartItem.name}</p>
      <button>
        <FontAwesomeIcon icon={faBackspace} />
      </button>
    </div>
  );
};

export default Cart;
