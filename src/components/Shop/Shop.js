import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";

import "./Shop.css";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [oneItem, setOneItem] = useState([]);

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
        } else if (exists) {
          alert("you add this item");
        }
      }
    } else {
      alert("You can't add more then 4 items");
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

  const chooseOneItem = () => {
    const cartItemLength = cart.length - 1;
    let chooseItem = [];
    const randomNumber = Math.round(Math.random() * cartItemLength);
    chooseItem.push(cart[randomNumber]);
    setOneItem(chooseItem);
  };

  const clearAll = () => {
    console.log("clearAll");
    let oldArray = [];
    setCart(oldArray);
    setOneItem(oldArray);
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
          <div className="cart-items">
            {cart.map((cartItem) => (
              <Cart
                cartItem={cartItem}
                key={cartItem.id}
                removeItemFromCart={removeItemFromCart}
              ></Cart>
            ))}
          </div>
          <button onClick={chooseOneItem} className="chooseOneItem-btn">
            CHOOSE 1 FOR ME
          </button>
          <br></br>
          <button onClick={clearAll} className="clear-btn">
            CLEAR
          </button>
          <div>
            <h3>You can buy this:</h3>
            <p className="item-name">{oneItem[0]?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
