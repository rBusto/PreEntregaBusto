import React from 'react';
import PokemonData from '../PokemonData';

const ItemListContainer = () => {
return (
    <div>
        {PokemonData.map(pokemon => (
            <div key={pokemon.id}>
                <img src={pokemon.image} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
                <p>Tipo: {pokemon.type}</p>
            </div>
        ))}
    </div>
);
};

export default ItemListContainer;