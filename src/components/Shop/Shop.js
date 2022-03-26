import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";

import "./Shop.css";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://knrbokhari.github.io/fakeData1/products.JSON")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addToCart = (item) => {
    if (cart.length < 4) {
      if (cart.length === 0) {
        const newCart = [...cart, item];
        setCart(newCart);
      } else {
        const exists = cart.find((cartItem) => cartItem.id === item.id);
        if (!exists) {
          const newCart = [...cart, item];
          setCart(newCart);
        } else {
          alert("you add this item");
        }
      }
    }
  };

  const removeItemFromCart = (cartItem) => {
    for (const item of cart) {
      if (item.id === cartItem.id) {
        const index = cart.indexOf(item);
        let savedCart = [...cart];
        savedCart.splice(index, 1);
        setCart(savedCart);
      }
    }
  };

  // Math.round(Math.random()*4);

  return (
    <div className="shop-container">
      <div className="item-container">
        {items.map((item) => (
          <Item items={item} key={item.id} addToCart={addToCart}></Item>
        ))}
      </div>
      <div className="cart-container">
        <div className="cart">
          <h1>Selected Items</h1>
          <div className="cart-items">
            {cart.map((cartItem) => (
              <Cart
                cartItem={cartItem}
                key={cartItem.id}
                removeItemFromCart={removeItemFromCart}
              ></Cart>
            ))}
          </div>
          <button>CHOOSE 1 FOR ME</button>
          <br></br>
          <button>CLEAR</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
