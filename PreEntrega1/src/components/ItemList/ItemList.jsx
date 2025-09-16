import { Item } from '../Item/Item'

export const ItemList = ({lista}) => {
    return (
        <>
            {lista.length? (
                lista.map((prod) => (
                <Item key={prod.id} {...prod}>
                <button>Soy un boton</button>
                </Item>
                ))
             ) : (
                <p>No hay productos</p>
            )}
        </>
    );
};