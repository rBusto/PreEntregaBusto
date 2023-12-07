import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imgPortada from '../../assets/star.png';
import PokemonData from '../PokemonData';


const CartasDestacadas = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="container-xxl main-sections__slider">
            <div className="text-white py-2 d-flex align-items-center m-3">
                <img className="img-fluid h-40px ps-5" src={imgPortada} alt="gear icon" style={{width: 100}}/>
                <span className="fs-3 ps-3" style={{fontWeight: 'bold'}}>Cartas Destacadas</span>    
            </div>
            <Carousel responsive={responsive}>
                {PokemonData.map((pokemon) => (
                    <div key={pokemon.id} className="card bg-dark bg-gradient text-white border-2.5 border-light" style={{width: 224}}>
                        <img className="card--image" src={pokemon.image} alt={pokemon.name} width="222"/>
                        <hr></hr>
                        <h4 className="text-center">{pokemon.name}</h4>
                        <h6 className="price m-2">$ {pokemon.price} ARS</h6>
                        <p className="m-2">Tipo: {pokemon.type}</p>
                        <div className="d-grid gap-2 text-center mt-1">
                            <Link to={`/pokemon/${pokemon.id}`} className="btn btn-warning m-0 fw-bold">
                                Ver detalles
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default CartasDestacadas;