import React, { useState } from 'react';
import Item from '../Item/Item'; // Asegúrate de importar el componente Item

const ItemListContainer = () => {
  // Datos de ejemplo de Pokémon (aquí podrían venir de una API o de otro lugar)
    const [pokemonData] = useState([
    { id: 1, name: 'Ampharos', type: 'Electrico', image: 'bulbasaur.png' },
    { id: 2, name: 'Snivy', type: 'Planta', image: 'charmander.png' },
    { id: 3, name: 'Volcarona', type: 'Volcarona', image: 'bulbasaur.png' },
    { id: 4, name: 'Oshawott', type: 'Agua', image: 'charmander.png' },
    { id: 5, name: 'Sylveon', type: 'Hada', image: 'bulbasaur.png' },
    { id: 6, name: 'Kyurem Blanco', type: 'Dragon', image: 'charmander.png' },
    ]);

    return (
    <div>
        {pokemonData.map(pokemon => (
        <Item key={pokemon.id} pokemonData={pokemon} />
        ))}
    </div>
    );
};

export default ItemListContainer;