import './Cart.css';
export const Cart = ({
  carrito,
  onClearCart,
  onAddUnit,
  onRemoveUnit,
  onDeleteProduct
}) => {
  // Calcular el total general
  const totalGeneral = carrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );

  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {carrito.map((prod, idx) => (
              <li key={idx}>
                <img src={prod.img} alt={prod.nombre} width={50} />
                {prod.nombre} - ${prod.precio} &nbsp;
                <strong>x{prod.cantidad}</strong>
                <span style={{ marginLeft: "10px" }}>
                  Total: ${ (prod.precio * prod.cantidad).toFixed(2) }
                </span>
                <button onClick={() => onAddUnit(prod.id)}>+</button>
                <button onClick={() => onRemoveUnit(prod.id)}>-</button>
                <button onClick={() => onDeleteProduct(prod.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total-general">
            <strong>Total general: ${ totalGeneral.toFixed(2) }</strong>
          </div>
        </>
      )}
      <button onClick={onClearCart} disabled={carrito.length === 0}>
        Vaciar Carrito
      </button>
    </div>
  );
};