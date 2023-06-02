/* eslint-disable react/jsx-key */
// import './ItemListContainer.css'
import { useState } from "react"
import { useEffect } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from './ItemList'




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
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListConainer