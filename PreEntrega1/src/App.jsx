import './App.css'
import { useState } from "react";
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import Main from './components/Main/Main'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Boton } from "./components/Boton";
import Form from './components/Form/Form';
import { Form2 } from './components/Form/Form2';
import { ProductList } from './components/ProductList/ProductList';
import { Cart } from './components/Carrito/Cart';
// importo imagenes

import { Gallery } from './components/Gallery/Gallery';
import clienteImg1 from './assets/image/cliente1.png';
import clienteImg2 from './assets/image/cliente2.png';
import clienteImg3 from './assets/image/cliente3.png';
import clienteImg4 from './assets/image/cliente4.png';
// fin de imagenes

function App() {
  const arrayProductos = [
    { id: 1, nombre: "The Legend of Zelda: Breath of the Wild", precio: 59.99, descripcion: "Aventura" },
    { id: 2, nombre: "God of War", precio: 49.99, descripcion: "Acción" },
    { id: 3, nombre: "Minecraft", precio: 26.95, descripcion: "Sandbox" },
  ];

  const [carrito, setCarrito] = useState([]);

  const handleAddToCart = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const handleClearCart = () => {
    setCarrito([]);
  };

  const clientes = [
    { nombre: "Ariel", edad: 69, direccion: "Calle Del Sol 100", img: clienteImg1 },
    { nombre: "Lucía", edad: 34, direccion: "Av. Siempre Viva 742", img: clienteImg2 },
    { nombre: "Carlos", edad: 45, direccion: "Ruta 3 Km 12", img: clienteImg3 },
    { nombre: "María", edad: 28, direccion: "Calle Luna 456", img: clienteImg4 },
  ];

  return (
    <>
      <div>
        <Header />
        <main className="layout-ecommerce">
          <section>
            <ProductList productos={arrayProductos} onAddToCart={handleAddToCart} />
          </section>
          <section>
            <Cart carrito={carrito} onClearCart={handleClearCart} />
          </section>
      </main>

        <Form2/>
        <Main />
        <ItemListContainer titulo={"Bienvenidos a la tienda de videojuegos!"} productos={arrayProductos} />
        <Footer />
        <Boton color={"green"} texto={"Saludar"} />
        <Form />
      </div>
      <div className="tarjetas-container">
        {clientes.map((cliente, idx) => (
          <Gallery key={idx} {...cliente} />
        ))}
      </div>
    </>
  );
}


export default App