import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import imgInicio from '../../assets/eevee.png'
import imgPokédex from '../../assets/pokedex.png'
import imgCartas from '../../assets/pokeball.png'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light main-navbar">
                <div className="container-xxl">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mx-auto my-2 my-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active main-navbar__inicio" href="/">
                                    <span className="mx-4">
                                        <img className="main-navbar__icon" src={imgInicio} alt="inicio-logo"/>
                                    </span>
                                    <span className="fw-bold">Inicio</span>
                                </Link>       
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active main-navbar__pokedex" href="/Pokedex">
                                    <span className="mx-4">
                                        <img className="main-navbar__icon" src={imgPokédex} alt="inicio-logo"/>
                                    </span>
                                    <span className="fw-bold">Pokédex</span>
                                </Link>       
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link active main-navbar__cartas" href="/Cartas">
                                    <span className="mx-4">
                                        <img className="main-navbar__icon" src={imgCartas} alt="inicio-logo"/>
                                    </span>
                                    <span className="fw-bold">Cartas Coleccionables</span>
                                </Link> 
                            </li>
                        </ul>
                    </div>
                    <Link class="position-relative carrito" href="/cart">
                        <CartWidget />
                    </Link>
                </div>
            </nav>    
        </div>

    )
}

export default Navbar;