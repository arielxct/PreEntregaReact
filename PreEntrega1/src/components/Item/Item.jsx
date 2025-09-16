export const Item = ({nombre, precio, descripcion, children}) => {
    return (
        <article > 
                    <h2>{nombre}</h2>
                    <p>Precio: ${precio}</p>
                    <p>Descripción: {descripcion}</p>
                    {children}
                </article>
    )
}