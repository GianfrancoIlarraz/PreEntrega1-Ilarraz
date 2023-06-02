/* eslint-disable react/prop-types */


const ItemCard = ({ ID, Nombre, Precio, Descripcion, img }) => {

    return (
        <div >
            <img src={img} alt={ID} />
            <h2>{ID} {Nombre}</h2>
            <h3>{Precio}</h3>
            <p>{Descripcion}</p>
        </div>
    )
}

export default ItemCard