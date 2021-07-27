import React from 'react';
import PokeDetails from './poke-details/PokeDetails'

const PokePanel = (props) => {
    let [environment, setEnvironment] = React.useState(false);
    return (
        <div className='pokePanel'>
            <PokeDetails pageContents={environment} stats={props.stats} abilities={props.abilities} location={props.location}/>
            <button id='envToggleButton' onClick={(e) => {
                e.preventDefault()
                setEnvironment(!environment);
            }} value='environment'>{
                !environment ? 'Show Environment' : 'Show Details'
            }</button>
        </div>
    );
};

export default PokePanel;