/* eslint-disable react/jsx-key */
// import './ItemListContainer.css'
import { useState } from "react"
import { useEffect } from "react"
import { pedirDatos } from "../helpers/pedirDatos"




// eslint-disable-next-line react/prop-types
const ItemListConainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setTimeout(() => { setProductos(res) }, 2000)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div className="list__container">
            <h2>Bienvenidos a ZtSells</h2>
            <hr />

            <p>{productos.length === 0 ? 'No hay productos' : 'Productos cargados'}</p>

            <div className="row">
                {productos.map((producto) => (
                    <div key={producto.ID}>
                        <img src={producto.img} alt={producto.ID} />
                        <h2>{producto.ID} {producto.Nombre}</h2>
                        <h3>{producto.Precio}</h3>
                        <p>{producto.Descripción}</p>
                    </div>
                )
                )}
            </div>



        </div>
    )
}

export default ItemListConainer