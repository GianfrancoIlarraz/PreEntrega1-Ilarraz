/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const ItemCard = ({ ID, Nombre, Precio, Descripcion, img }) => {

    return (
        <div >

            <Link className="" to={`/detalle/${ID}`}><img src={img} alt={ID} /></Link>
            <h2>{Nombre}</h2>
            <h3>{Precio}</h3>
            <p>{Descripcion}</p>
            <Link className="" to={`/detalle/${ID}`}>Ver más</Link>
        </div>
    )
}

export default ItemCard