import React from 'react'
import imgInicio from '../../assets/carousel/inicio.png'
import imgPokédex from '../../assets/carousel/pokedex.jpg'
import imgCartas from '../../assets/carousel/cartas.jpg'
import './carousel.css'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide border-bottom border-primary-subtle border-2">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgInicio} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>¡Bienvenido a nuestra tienda Pokémon!</h5>
                            <p>¡Sumérgete en el emocionante mundo de Pokémon y 
                                encuentra las cartas más extraordinarias para tu colección! 
                                ¡Prepárate para descubrir la diversión, la estrategia y la 
                                emoción que solo el universo Pokémon puede ofrecer!
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src= {imgPokédex} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>¡Explora nuestra sección de Pokédex!</h5>
                            <p>¡Cada Pokémon tiene su historia única por descubrir!, 
                                sumérgete en un mundo lleno de datos fascinantes, 
                                habilidades sorprendentes y curiosidades 
                                emocionantes sobre cada criatura.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src= {imgCartas} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>¡Explora la sección de Cartas Coleccionables!</h5>
                            <p> ¡Aqui los sueños de entrenadores se hacen realidad! 
                                Encuentra las cartas más codiciadas de Pokémon aquí, 
                                desde las clásicas hasta las más recientes. 
                            </p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    )
}

export default Carousel