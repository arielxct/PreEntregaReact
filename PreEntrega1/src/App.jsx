
import './App.css'
import { Header } from './components/Header/Header'


import { Footer } from './components/Footer/Footer'

import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";

function App() {
  const arrayProductos = [
    { id: 1, nombre: "The Legend of Zelda: Breath of the Wild", precio: 59.99, descripcion: "Aventura" },
    { id: 2, nombre: "God of War", precio: 49.99, descripcion: "Acción" },
    { id: 3, nombre: "Minecraft", precio: 26.95, descripcion: "Sandbox" },
  ];

  return (
    <>
      <div>
        <Header />
       
        <ItemListContainer titulo={"Bienvenidos a la tienda de videojuegos!"} productos={arrayProductos} />
        <Footer />
        
      </div>
    </>
  );
}


export default App