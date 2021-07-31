import React from 'react';
import PokeDetails from './poke-details/PokeDetails'

const PokePanel = (props) => {
    let [environment, setEnvironment] = React.useState(false);

    if (!props.pokemon) {
        return (
            <div>
                <h3>no pokemon</h3>
            </div>
        )
    }
    const { name, abilities, moves, stats, location_area_encounters } = props.pokemon

    return (
        <div className='poke-panel'>
            <button id='envToggleButton' onClick={(e) => {
                e.preventDefault()
                setEnvironment(!environment);
            }} value='environment'>{
                    !environment ? 'Encounters' : 'Show Details'
                }</button>
            <PokeDetails pageContents={environment} name={name} abilities={abilities} moves={moves} stats={stats} location={location_area_encounters} />
        </div>
    );
};

export default PokePanel;