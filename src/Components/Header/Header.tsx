import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css'
import { useEffect, useState } from 'react';

const Header = () => {
    const [theme, setTheme] = useState(false)
    const [cart, setCart] = useState(false)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        if (theme) {
            document.body.classList.add('dark-theme')
        }
        else {
            document.body.classList.remove('dark-theme')
        }
    }, [theme])
    {/*Adj a theme ikonhoz egy olyan funkciót amivel váltogatni lehet a light és dark mode között*/ }

    {/*Adj egy funkciót a toggle ikonhoz amivel mobilnézetben le lehet nyitni a navigációs menüt a close ikonnal meg bezárni*/ }

    {/*
    Adj egy funkciót a cart-shop ikonhoz amivel le lehet nyitni a vásárlási listát
    A vásárlási lista egy külön komponens.
    */}

    {/* Állítsd be az App.css-ben az ul osztályszelektornak, hogy a listaelemek pontok nélkül jelenjenek meg */ }



    return (
        <>
            <header className="header" id="header">
                <nav >
                    <a href="#" className="nav__logo">
                        <i className='bx bxs-watch nav__logo-icon'></i> Rolex
                    </a>
                    <div className={`nav__menu ${toggle && 'show-menu'}`} id="nav-menu">
                        <ul className="nav__list">
                            {["HOME", "FEATURED", "PRODUCTS", "NEW"].map(item => (
                                <li className='nav__item'>
                                    <a className='nav__link' href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                            {/*
                Készítsd el a Header-eket: Home, Featured, Products, New
                Mindegyik egy listaelem, és azon belül egy hivatkozás
                a listaelem ostrálya nav__item, a hivatkozás osztálya nav__link
                */}
                        </ul>
                        <div onClick={() => setToggle(false)} className="nav__close" id="nav-close">
                            <i className='bx bx-x' ></i>
                        </div>
                    </div>
                    <div className="nav__btns">
                        <i onClick={() => setTheme(!theme)} className='bx bx-moon change-theme' id="theme-button"></i>
                        <div className="nav__shop" id="cart-shop" >
                            <i onClick={() => setCart(true)} className='bx bx-shopping-bag'></i>
                        </div>
                        <div onClick={() => setToggle(true)} className="nav__toggle" id="nav-toggle">
                            <i className='bx bx-grid-alt' ></i>
                        </div>
                    </div>
                </nav>
            </header>
            {cart && <Cart onClick={setCart} />}
        </>
    )
}

export default Header