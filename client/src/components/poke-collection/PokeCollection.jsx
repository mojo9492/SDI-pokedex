import React, { useState } from 'react';
import PokeShell from '../poke-shell/PokeShell';

const PokeCollection = (props) => {
    const [clickState, setClickState] = React.useState(false);
    const {pokemonArray} = props;


    


    return (
        pokemonArray.map(pokemon => <PokeShell clickState={clickState} setClickState={(newState) => {setClickState(newState)}} key={pokemon.id} pokemon={pokemon}/>)
    );
};

export default PokeCollection