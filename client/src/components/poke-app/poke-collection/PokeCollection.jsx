import React from 'react';
import PokeShell from './poke-shell/PokeShell';

const PokeCollection = (props) => {
    const [clickState, setClickState] = React.useState(false);
    const { pokemonArray, setPokemonArray } = props;

    return (
        <div title='poke-collection' className='poke-collection'>
        {pokemonArray.map(pokemon => <PokeShell key={pokemon.id} clickState={clickState} setClickState={(newState) => { setClickState(newState) }}  pokemon={pokemon} setPokemonArray={setPokemonArray} />)}
        </div>
    );
};

export default PokeCollection