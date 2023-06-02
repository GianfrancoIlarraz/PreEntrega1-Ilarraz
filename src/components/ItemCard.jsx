/* eslint-disable react/prop-types */


const ItemCard = ({ items }) => {

    return (
        <div >
            <img src={items.img} alt={items.ID} />
            <h2>{items.ID} {items.Nombre}</h2>
            <h3>{items.Precio}</h3>
            <p>{items.Descripción}</p>
        </div>
    )
}

export default ItemCard