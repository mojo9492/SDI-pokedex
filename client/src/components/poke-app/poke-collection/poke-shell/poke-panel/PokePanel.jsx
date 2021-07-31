import React, { useState, useEffect } from 'react';
import PokeDetails from './poke-details/PokeDetails'
import { Link } from 'react-router-dom';

const PokePanel = ({ pokemon }) => {
    const [encounters, setEncounters] = useState('Unknown');
    const [hideButton, setHideButton] = useState(false)
    console.log('pokemon panel encounters', pokemon.location_area_encounters)

    useEffect(() => {
        const helper = async () => {
            try {
                const res = await fetch(pokemon.location_area_encounters)
                if (res.ok) {
                    const encounters = await res.json();
                    setEncounters(encounters)
                } else {
                    throw new Error('Error fetching encounters')
                }
            } catch (error) {
                console.error(error)
            }

        }

        helper()
    }, [pokemon.location_area_encounters, setEncounters])
    //render noop TODO(Render error components)
    if (!pokemon) {
        return (
            <div>noop from panel</div>
        )
    }

    const { id, name, abilities, moves, types, stats } = pokemon;
    //loop to add a comma for formatting the types div
    const mappedTypes = [];
    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const pokeType = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        i < types.length - 1 ?
            mappedTypes.push(<p key={pokemon.id + pokeType}>{pokeType},&nbsp;</p>) :
            mappedTypes.push(<p key={id + pokeType}>{pokeType}</p>)
    }

    return (
        <div>
            <Link className='poke-panel-back-button' to={`/pokedex`}><button>Back</button></Link>
            <div className='poke-panel'>
                <h2>{name.toUpperCase()}</h2>
                <div className='poke-panel-nav'>
                    <Link hidden={hideButton}
                        to={
                            {
                                pathname: `/pokedex/pokemon/${id}/environment`,
                                state: { encounters: encounters }
                            }
                        }>
                        <button onClick={() => setHideButton(!hideButton)}>
                            Environment
                        </button>
                    </Link>
                    
                    <Link hidden={!hideButton} to={`/pokedex/pokemon/${id}`}>
                        <button onClick={() => setHideButton(!hideButton)}>
                            Details
                        </button>
                    </Link>
                </div>

                <div className='poke-panel-types'>
                    <p><i>Type:</i></p>&nbsp;{mappedTypes}
                </div>
                <PokeDetails
                    id={id}
                    name={name}
                    abilities={abilities}
                    moves={moves}
                    stats={stats}
                />
            </div>
        </div>
    );
};

export default PokePanel;