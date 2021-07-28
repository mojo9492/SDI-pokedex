import React from 'react';
import PokeShell from '../poke-shell/PokeShell';

const PokeCollection = (props) => {
    const [clickState, setClickState] = React.useState(false);
    const { pokemonArray } = props;

    return (
        <div className='poke-collection'>
        {pokemonArray.map(pokemon => <PokeShell clickState={clickState} setClickState={(newState) => { setClickState(newState) }} key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
};

export default PokeCollection