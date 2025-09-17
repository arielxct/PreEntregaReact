// import React from "react";
import './Cart.css';

export const Cart = ({ carrito, onClearCart }) => (
  <div className="cart">
    <h2>Carrito de compras</h2>
    {carrito.length === 0 ? (
      <p>El carrito está vacío</p>
    ) : (
      <ul>
        {carrito.map((prod, idx) => (
          <li key={idx}>
            {prod.nombre} - ${prod.precio}
          </li>
        ))}
      </ul>
    )}
    <button onClick={onClearCart} disabled={carrito.length === 0}>
      Vaciar Carrito
    </button>
  </div>
);