import React from 'react';
import { Link } from 'react-router-dom';
import PokeCard from './poke-card/PokeCard';


const PokeShell = ({ pokemon }) => {

    
    return (
        <div className='poke-shell'>
            <Link
                className='poke-shell-link'
                to={{
                    pathname: `/pokedex/pokemon/${pokemon.id}`,
                    state: { pokemon: pokemon }
                }}>
                <PokeCard pokemon={pokemon} />
            </Link>
        </div>
    )
};

export default PokeShell;