import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from './ItemCount'

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ ID, Nombre, Precio, Categoria, Descripcion, img, stock }) => {

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            ID,
            Nombre,
            Precio,
            Categoria,
            Descripcion,
            img,
            stock,
            cantidad
        }
        //agregarAlCarrito(item)
    }

    const handleVolver = () => {
        navigate(-1)
    }



    return (
        <div>
            <h2>{Nombre}</h2>
            <img src={img} alt={Nombre} />
            <p>{Descripcion}</p>

            <h4>Precio: {Precio}</h4>
            <br />
            <small>Categoría: {Categoria}</small>

            <ItemCount
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />


            <hr />
            <button onClick={handleVolver} className='button'>Volver</button>
        </div>
    )
}

export default ItemDetail