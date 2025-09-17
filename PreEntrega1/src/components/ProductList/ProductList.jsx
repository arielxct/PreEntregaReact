// import React from "react";
import './ProductList.css';

export const ProductList = ({ productos, onAddToCart }) => (
  <div className="product-list">
    <h2>Productos disponibles</h2>
    <ul>
      {productos.map((prod) => (
        <li key={prod.id}>
          <span>{prod.nombre} - ${prod.precio}</span>
          <button onClick={() => onAddToCart(prod)}>Agregar al carrito</button>
        </li>
      ))}
    </ul>
  </div>
);