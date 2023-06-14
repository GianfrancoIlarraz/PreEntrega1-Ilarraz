/* eslint-disable react/jsx-key */
// import './ItemListContainer.css'
import ItemList from './ItemList'
import useProductos from "../hooks/useProductos"





// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {

    

    const {productos, loading} = useProductos()


    return (
        <div className="list__container">
            {
                loading ? <h2>Cargando...</h2> : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer