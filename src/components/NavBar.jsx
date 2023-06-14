// import './Header.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className='header__logo'>ZtSells</h1>
                <nav className="header__nav">
                    <Link className="header__link" to='/'>Inicio</Link>
                    <Link className="header__link" to='/nosotros'>Nosotros</Link>
                    <Link className="header__link" to='/contacto'>Contacto</Link>
                    <Link className="header__link" to='/productos/perifericos'>Periféricos</Link>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar