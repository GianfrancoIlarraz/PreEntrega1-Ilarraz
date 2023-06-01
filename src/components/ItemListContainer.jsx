/* eslint-disable react/jsx-key */
// import './ItemListContainer.css'
import { useState } from "react"
import { useEffect } from "react"

//MOCKDATABASE
const MOCK_DATA = [
    {
        ID: 1,
        Nombre: 'Producto1',
        Precio: 1500,
        Descripción: 'Lorem ipsum dolor sit',
        img: "https://dummyimage.com/300x300/000/e3e3e3.png"
    },
    {
        ID: 2,
        Nombre: 'Producto2',
        Precio: 1200,
        Descripción: 'Lorem ipsum dolor sleep',
        img: "https://dummyimage.com/300x300/000/e3e3e3.png"
    },
    {
        ID: 3,
        Nombre: 'Producto3',
        Precio: 500,
        Descripción: 'Lorem ipsum dolor stand',
        img: "https://dummyimage.com/300x300/000/e3e3e3.png"
    },
    {
        ID: 4,
        Nombre: 'Producto4',
        Precio: 1700,
        Descripción: 'Lorem ipsum dolor jump',
        img: "https://dummyimage.com/300x300/000/e3e3e3.png"
    },
    {
        ID: 5,
        Nombre: 'Producto5',
        Precio: 1700,
        Descripción: 'Lorem ipsum dolor jump',
        img: "https://dummyimage.com/300x300/000/e3e3e3.png"
    },
    {
        ID: 6,
        Nombre: 'Producto6',
        Precio: 1700,
        Descripción: 'Lorem ipsum dolor jump',
        img: "https://dummyimage.com/300x300/000/e3e3e3.png"
    },
    {
        ID: 7,
        Nombre: 'Producto7',
        Precio: 1700,
        Descripción: 'Lorem ipsum dolor jump',
        img: "https://dummyimage.com/300x300/000/e3e3e3.png"
    },
    {
        ID: 8,
        Nombre: 'Producto8',
        Precio: 1700,
        Descripción: 'Lorem ipsum dolor jump',
        img: "https://dummyimage.com/300x300/000/e3e3e3.png"
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

    // const productosMap = MOCK_DATA.map((producto) => {
    //     <div>
    //         <h2>{producto.ID}</h2>;
    //         <h3>{producto.Precio}</h3>;
    //         <p>{producto.Descripción}</p>;
    //         <img src={producto.img} alt={producto.ID} />
    //     </div>
    // }
    // )

    return (
        <div className="list__container">
            <h2>Bienvenidos a ZtSells</h2>
            <hr />

            <p>{productos.length === 0 ? 'No hay productos' : 'Productos cargados'}</p>

            <div className="row">
                {productos.map((producto) => (
                    <div key={producto.ID}>
                        <h2>{producto.ID} {producto.Nombre}</h2>
                        <h3>{producto.Precio}</h3>
                        <p>{producto.Descripción}</p>
                        <img src={producto.img} alt={producto.ID} />
                    </div>
                )
                )}
            </div>



        </div>
    )
}

export default ItemListConainer