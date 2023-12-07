import React from 'react';

const Item = ({ pokemonData }) => {
    return (
    <div className="pokemon-details">
        <img src={pokemonData.image} alt={pokemonData.name} />
        <h2>{pokemonData.name}</h2>
        <p>Tipo: {pokemonData.type}</p>
    </div>
    );
};

export default Item;