import './ProductList.css';

export const ProductList = ({ productos, onAddToCart }) => (
  <div className="product-list">
    <h2>Productos disponibles</h2>
    <ul>
      {productos.map((prod) => (
        <li key={prod.id}>
          <img src={prod.img} alt={prod.nombre} width={60} style={{ marginRight: "12px", borderRadius: "8px" }} />
          <span>{prod.nombre} - ${prod.precio}</span>
          <button onClick={() => onAddToCart(prod)}>Agregar al carrito</button>
        </li>
      ))}
    </ul>
  </div>
);