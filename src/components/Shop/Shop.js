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
    let saveCart = [];
    for (const item of items) {
      //   const addCart = item.find(());
      //   if (id === item.id) {
      //     newCart = [...newCart, item];
      //     setCart(newCart);
      //   }
    }
    // console.log(cart);
  };

  return (
    <div className="shop-container">
      <div className="item-container">
        {items.map((item) => (
          <Item items={item} key={item.id} addToCart={addToCart}></Item>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
