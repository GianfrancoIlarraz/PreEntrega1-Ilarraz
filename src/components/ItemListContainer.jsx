// import './ItemListContainer.css'
import { useState } from "react"
import { useEffect } from "react"

//MOCKDATABASE
const MOCK_DATA = [
    {
        ID: 1,
        Precio: 1500,
        Descripción: 'Lorem ipsum dolor sit',
        img: "http://dummyimages.com/"
    },
    {
        ID: 2,
        Precio: 1500,
        Descripción: 'Lorem ipsum dolor sit',
        img: "http://dummyimages.com/"
    },
    {
        ID: 3,
        Precio: 1500,
        Descripción: 'Lorem ipsum dolor sit',
        img: "http://dummyimages.com/"
    },
    {
        ID: 4,
        Precio: 1500,
        Descripción: 'Lorem ipsum dolor sit',
        img: "http://dummyimages.com/"
    },

]




// eslint-disable-next-line react/prop-types
const ItemListConainer = () => {

    const [productos, setProductos] = useState([])
    console.log(productos)

    const pedirDatos = () => {
        return new Promise((resolve) => {

            resolve(MOCK_DATA)
        })
    }



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


        </div>
    )
}

export default ItemListConainer