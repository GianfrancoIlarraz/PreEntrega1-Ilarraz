import ItemList from './ItemList'
import useProductos from "../hooks/useProductos"





const ItemListContainer = () => {



    const { productos, loading } = useProductos()


    return (
        <div className="list__container">
            {
                loading ? <h2>Cargando...</h2> : <ItemList items={productos} />
            }
        </div>
    )
}

export default ItemListContainer