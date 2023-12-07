import React from 'react';
import { useParams } from 'react-router-dom';
import pokemonData from '../../data/pokemonData.json';

const PokemonPage = () => {
    const { id } = useParams(); 

    const pokemon = pokemonData.find(pokemon => pokemon.id === parseInt(id));

    return (
        <div>
            <h2>Esta es la sección de compra para la carta de ID: {pokemon.id}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <p>Tipo: {pokemon.type}</p>
        </div>
    );
};

export default PokemonPage;