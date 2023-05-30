// import './Header.scss'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className='header__logo'>ZtSells</h1>
                <nav className="header__nav">
                    <a className="header__link" href="" target="_blank" rel="noopener noreferrer">Inicio</a>
                    <a className="header__link" href="" target="_blank" rel="noopener noreferrer">Componentes</a>
                    <a className="header__link" href="" target="_blank" rel="noopener noreferrer">Periféricos</a>
                    <a className="header__link" href="" target="_blank" rel="noopener noreferrer">Ofertas</a>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar