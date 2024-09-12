import React, { useContext, useState } from "react";
// import { pizzaCart as initialCart } from "../pizzas";
import formatoNumero from "../utils/formatoNumero";
import { CartContext } from "../context/CartContext";

import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <div className="pizza-details">
              <h2>{pizza.name}</h2>
              <p>Precio: ${formatoNumero(pizza.price)}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    background: "black",
                    color: "whitesmoke",
                    borderRadius: "10px",
                  }}
                  onClick={() => removeFromCart(pizza.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${formatoNumero(getTotalPrice())}</h2>
      </div>
      <button className="pay-button">Pagar</button>
    </div>
  );
};

export default Cart;
