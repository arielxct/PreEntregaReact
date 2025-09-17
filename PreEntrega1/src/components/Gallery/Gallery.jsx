// import clienteImg from '../assets/cliente.png';
import './Gallery.css';

export const Gallery = ({ nombre, edad, direccion, img }) => {
  return (
    <article>
      <div className="cuadro-cliente">
        <img src={img} alt={`Foto de ${nombre}`} width={100} className="foto-cliente" />
        <div className="datos-cliente">
          <p>Datos del Cliente</p>
          <p>Nombre: {nombre}</p>
          <p>Edad: {edad}</p>
          <p>Dirección: {direccion}</p>
        </div>
      </div>
    </article>
  );
};