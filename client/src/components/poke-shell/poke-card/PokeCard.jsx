import React from 'react';

const PokeCard = (props) => {
    const pokeTypes = props.pokemon.types;
    let strPokeTypes = ''
    for (let i = 0; i < pokeTypes.length; i++) {
        const pokeType = pokeTypes[i].type.name;
        const newPokeTypeName = pokeType.charAt(0).toUpperCase() + pokeType.slice(1);

        strPokeTypes += `${newPokeTypeName}, `
    }
    const pokemonTypesRestructured = strPokeTypes.slice(0, strPokeTypes.length - 2);

    // const pokeMoves = props.pokemon.moves;
    // const pokeMovesArray = [];
    // for (let i = 0; i <= 3; i++) {
    //     const pokeMove = pokeMoves[i].move.name;
    //     if (pokeMove) {
    //         const newPokeMoveName = pokeMove.charAt(0).toUpperCase() + pokeMove.slice(1);
    //         console.log(newPokeMoveName)
    //         pokeMovesArray.push(newPokeMoveName)
    //     }
    // }

    if (props.pokemon) {
        return (
            <div className='poke-card'>
                <div className='poke-card-header'>
                    <div>{props.pokemon.name.toUpperCase()}</div>
                </div>
                <div className='poke-card-img'>
                    <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
                </div>
                <div className='poke-card-body'>
                    <p>
                        NO. {props.pokemon.id} {pokemonTypesRestructured} HT: {props.pokemon.height}' WT: {props.pokemon.weight} lbs.
                    </p>
                    <label>
                        {/*
                        <ul>
                            {pokeMovesArray.map((move, index) => <li key={index}>{move}</li>)}
                        </ul> 
                        */}
                        <ul>
                            {props.pokemon.abilities.map((ability, index) => {
                                const oldAbilityName = ability.ability.name;
                                const newAbilityName = oldAbilityName.charAt(0).toUpperCase() + oldAbilityName.slice(1);

                                return (
                                    <li key={index}>{newAbilityName}</li>
                                )
                            })}
                        </ul>

                    </label>
                </div>
                <div className='poke-card-header'></div>
            </div >
        )
    }
}
export default PokeCard;