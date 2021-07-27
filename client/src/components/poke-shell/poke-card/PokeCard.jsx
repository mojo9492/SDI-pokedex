import React from 'react';

const PokeCard = (props) => {
    let pokeTypes = props.pokemon.types
    let strPokeTypes = ''
    for (let i=0;i < pokeTypes.length;i++) {
        strPokeTypes += `${pokeTypes[i].type.name}, `
    }
    const newName = strPokeTypes.slice(0, strPokeTypes.length-2);
    
    if (props.pokemon) {
        return (
            <div className='poke-card'>
                <div className='poke-card-header'>
                    <span># {props.pokemon.id}</span>
                    <br />
                    <div>{props.pokemon.name.toUpperCase()}</div>
                </div>
                <div>
                    <div className='poke-card-img'>
                        <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
                    </div>
                    <div className='poke-card-body'>
                        <span>{newName}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default PokeCard;