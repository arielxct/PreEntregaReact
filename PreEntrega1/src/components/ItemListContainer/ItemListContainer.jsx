
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = ({titulo, productos}) => {
    // estado

    // llamado a una Api, y <article key={prod.id}> es la etiqueta padre de los productos

    return (
        <section>
            <h1>{titulo}</h1>
            <ItemList lista={productos}/> 
        </section>
    )
}