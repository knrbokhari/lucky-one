import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";

import "./Shop.css";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  console.log();
  useEffect(() => {
    fetch("https://knrbokhari.github.io/fakeData1/products.JSON")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addToCart = (item) => {
    // console.log(id);
    if (cart.length < 4) {
      const newCart = [...cart, item];
      setCart(newCart);
    }
  };

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
          {cart.map((cartItem) => (
            <Cart cartItem={cartItem} key={cartItem.id}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
