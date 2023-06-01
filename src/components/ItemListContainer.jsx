// import './ItemListContainer.css'


//MOCKDATABASE
const MOCK_DATA ={
    
}


//Promises
const procesoAsync = (bool) => {
    return new Promise((resolve, reject) => {
        if (bool) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    }
    )
}

// El res y el err de then y catch, son los valores de resolucion o de rechazo de la promesa
procesoAsync(false)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })



// eslint-disable-next-line react/prop-types
const ItemListConainer = ({ mensaje }) => {

    return (
        <div className="list__container">
            <h2>Bienvenidos a ZtSells</h2>
            <hr />

            <p>{mensaje}</p>
        </div>
    )
}

export default ItemListConainer