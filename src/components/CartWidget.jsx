import cart from '../assets/cart.png'

const CartWidget = () => {
    return (
        <div className='cart__container'>
            <img className='cart__icon' src={cart} alt="Carrito" />
            <p className='cart__counter'>1</p>
        </div>
    )
}

export default CartWidget