import React from 'react';
import PokeCard from './poke-card/PokeCard';
import PokePanel from './poke-panel/PokePanel';

const PokeShell = (props) => {

    if (!props.clickState) {
       

        return (
            <div onClick={(e) => {
                e.preventDefault()
                props.setClickState(true)
            }}>
                <PokeCard pokemon={props.pokemon}/>
            </div>
        );
        
    } else if (props.clickState) {
        return (
            <div>
                <PokeCard pokemon={props.pokemon} />
                <PokePanel stats={props.stats} abilities={props.abilities} location={props.location_area_encounters} />
                <button  onClick={(e) => {
                e.preventDefault()
                props.setClickState(false)
            }}>Go Back</button>
            </div>
        );
    };
};

export default PokeShell;