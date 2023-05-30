// import './ItemListContainer.css'


// eslint-disable-next-line react/prop-types
const ItemListConainer = ( {mensaje} ) => {

    return(
        <div className="list__container">
            <h2>Bienvenidos a ZtSells</h2>
            <hr />

            <p>{mensaje}</p>
        </div>
    )
}

export default ItemListConainer