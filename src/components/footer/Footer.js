import React from 'react'
import {Link} from 'react-router-dom'
import imgTitulo from '../../assets/titulo-pokemon.png'
import './footer.css'


const Footer = () => {

    return (
        <div className='footer-bg'>
            <footer className='text-white py-4'></footer>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img className='mx-2' src={imgTitulo} alt="title" height={80}/>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-center'>ENLACES</li>
                            <li>
                                <Link to ='/Pokedex' className='text-reset links'>Pokedex</Link>
                            </li>
                            <li>
                                <Link to ='/cartas' className='text-reset'>Cartas Coleccionables</Link>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-center'>SÍGUENOS</li>
                            <li className='d-flex justify-content-between'>
                                <a href='https://www.facebook.com/Pokemon/?locale=es_LA' className='text-decoration-none text-white'><i className="bi bi-facebook"/></a>
                                <a href='https://www.instagram.com/pokemon/?hl=es' className='text-decoration-none text-white'><i className="bi bi-instagram"/></a>
                                <a href='https://twitter.com/Pokemon' className='text-decoration-none text-white'><i className="bi bi-twitter"/></a>
                                <a href='https://www.youtube.com/user/PokemonOficialES' className='text-decoration-none text-white'><i className="bi bi-youtube"/></a>
                            </li>
                        </ul>
                        <div className='container m-2 text'>
                            <p className='text-center'>made by    
                                <span className='text-white'>
                                    <a href="https://github.com/rBusto" class="text-decoration-none text-white" aria-current="page"> rBusto</a>
                                    <a> </a>
                                    <i className="bi bi-github github--text"></i>
                                </span>

                            </p>
                        </div>

                    </nav>
                </div>
        </div>
    )
}

export default Footer