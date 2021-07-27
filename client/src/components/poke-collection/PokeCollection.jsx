import React from 'react';
import PokeShell from '../poke-shell/PokeShell';

const PokeCollection = (props) => {
    let [clickState, setClickState] = React.useState(false);
    // if (!clickState) {
         const { pokemonArray } = props;
    // } else if (clickState) {
    //     const pokemonArray = [];
    // }
    
    return (
        pokemonArray.map(pokemon => <PokeShell setClickState={(newState) => {setClickState(newState)}} key={pokemon.id} pokemon={pokemon}/>)
    )
}
export default PokeCollection