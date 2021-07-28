import React, { useContext } from 'react';
import { PokeContext } from '../../../../PokeContext';
import PokeCard from './poke-card/PokeCard';
import PokePanel from './poke-panel/PokePanel';

const PokeShell = (props) => {
    const pokemonArray = useContext(PokeContext)
    if (!props.clickState) {
       

        return (
            <div onClick={(event) => {
                event.preventDefault()
                props.setClickState(true)
                props.setPokemonArray([props.pokemon])

            }}>
                <PokeCard pokemon={props.pokemon}/>
            </div>
        );
        
    } else if (props.clickState) {
        return (
            <div className='poke-shell'>
                <PokeCard pokemon={props.pokemon} />
                <button  onClick={(event) => {
                event.preventDefault()
                props.setClickState(false)
                props.setPokemonArray(pokemonArray)
            }}>Go Back</button>
             <PokePanel pokemon={props.pokemon} />
            </div>
        );
    };
};

export default PokeShell;