import React, { useContext, useRef, useState } from 'react';
import { PokeContext } from '../../../PokeContext';

const TopBar = (props) => {
    const pokemonArray = useContext(PokeContext);
    const [formError, setFormError] = useState('')
    const typesArray = [undefined, 'Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison',
        'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy'];
    const optionInputRef = useRef();
    const optionSecondInputRef = useRef();

    const formHandler = (event) => {
        event.preventDefault();
        const currentPokeTypeInput = optionInputRef.current.value.toUpperCase();
        const currentSecondPokeTypeInput = optionSecondInputRef.current.value.toUpperCase();

        if (optionInputRef.current.value && !optionSecondInputRef.current.value) {
            const resultArray = [];

            pokemonArray.filter(pokemon => {
                const alteredTypeName = pokemon.types[0].type.name.toUpperCase();
                let alteredSecondTypeName;

                if (alteredTypeName === currentPokeTypeInput) {
                    resultArray.push(pokemon)
                } else if (pokemon.types[1]) {
                    alteredSecondTypeName = pokemon.types[1].type.name.toUpperCase();

                    if (alteredSecondTypeName === currentPokeTypeInput) {
                        resultArray.push(pokemon);
                    }
                } else {
                    setFormError(`No pokemonfound with type ${optionInputRef.current.value}.`)
                    setTimeout(() => {
                        // props.setPokemonArray(pokemonArray)
                        setFormError('')
                    }, 2700);
                }
                return true
            })

            props.setPokemonArray(resultArray)
        } else if (!optionInputRef.current.value && optionSecondInputRef.current.value) {
            const resultArray = [];

            pokemonArray.filter(pokemon => {
                const alteredTypeName = pokemon.types[0].type.name.toUpperCase();
                let alteredSecondTypeName;

                if (alteredTypeName === currentSecondPokeTypeInput) {
                    resultArray.push(pokemon)
                } else if (pokemon.types[1]) {
                    alteredSecondTypeName = pokemon.types[1].type.name.toUpperCase();

                    if (alteredSecondTypeName === currentSecondPokeTypeInput) {
                        alteredSecondTypeName = pokemon.types[1].type.name.toUpperCase();
                    } else {
                        setFormError(`No pokemon found with type ${optionSecondInputRef.current.value}`)
                        setTimeout(() => {
                            setFormError('')
                        }, 2700);
                    }
                } else {
                    setFormError(`No pokemonfound with type ${optionSecondInputRef.current.value}.`)
                    setTimeout(() => {
                        // props.setPokemonArray(pokemonArray)
                        setFormError('')
                    }, 2700);
                }
                props.setPokemonArray(resultArray)
                return true
            })

        } else if (optionInputRef.current.value && optionSecondInputRef.current.value) {
            setFormError('');
            console.log('1 ', currentPokeTypeInput, '2 ', currentSecondPokeTypeInput)
            let resultArray = [];

            pokemonArray.filter(pokemon => {
                const alteredTypeName = pokemon.types[0].type.name.toUpperCase();

                if (alteredTypeName === currentPokeTypeInput) {
                    if (pokemon.types[1] && pokemon.types[1].type.name.toUpperCase() === currentSecondPokeTypeInput) {
                        resultArray.push(pokemon)
                    }
                } else {
                    setFormError(`No ${optionInputRef.current.value} and ${optionSecondInputRef.current.value} pokemon`)
                    setTimeout(() => {
                        setFormError('')
                    }, 2700);
                }

                props.setPokemonArray(resultArray)
                return resultArray
            })
        } else {
            setFormError('No pokemon found.')
            setTimeout(() => {
                setFormError('')
                props.setPokemonArray(pokemonArray);
            }, 2800);
        }
    }


    return (
        <div className='top-bar'>
            <label>
                <span>Type Search</span>
                <form onSubmit={formHandler}>
                    <label>
                        <span>1:  </span>
                        <select ref={optionInputRef}>
                            {typesArray.map((type, index) => <option defaultValue={undefined} key={index}>{type}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>2:  </span>
                        <select ref={optionSecondInputRef}>
                            {typesArray.map((type, index) => <option key={index}>{type}</option>)}
                        </select>
                    </label>
                    <button type='submit'>Filter</button>
                    <span className='error-form-span'><p>{formError}</p></span>
                </form>
            </label>
        </div>
    )
}
export default TopBar