/* eslint-disable react/prop-types */
import ItemCard from './ItemCard'

const ItemList = ({ items }) => {

    return (
        <div>
            <h2>Bienvenidos a ZtSells</h2>
            <hr />


            <div className="row">
                {items.map((producto) => <ItemCard key={producto.ID} {...producto} />
                )}
            </div>
        </div>
    )
}

export default ItemList