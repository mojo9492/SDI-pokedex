import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PokeContext } from '../../PokeContext';

const TopBar = (props) => {
    const pokemonArray = useContext(PokeContext);
    const [formError, setFormError] = useState('')
    const typesArray = ['', 'Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Fighting', 'Poison',
        'Electric', 'Ground', 'Rock', 'Psychic', 'Ice', 'Bug', 'Ghost', 'Steel', 'Dragon', 'Dark', 'Fairy'];
    const optionInputRef = useRef();
    const optionSecondInputRef = useRef();

    const formHandler = (event) => {
        event.preventDefault();

        if (optionInputRef.current.value && !optionSecondInputRef.current.value) {

            const currentPokeTypeInput = optionInputRef.current.value.toUpperCase()
            const resultArray = [];

            pokemonArray.filter(pokemon => {
                const alteredTypeName = pokemon.types[0].type.name.toUpperCase();
                let alteredSecondTypeName;

                if (pokemon.types[1]) {
                    alteredSecondTypeName = pokemon.types[1].type.name.toUpperCase();
                    if (alteredTypeName === currentPokeTypeInput || alteredSecondTypeName === currentPokeTypeInput) {
                        props.setPokemonArray(resultArray.push(pokemon));
                    }
                } else if (alteredTypeName === currentPokeTypeInput) {
                    resultArray.push(pokemon);
                } else {
                    setFormError('No pokemon found.')
                    setTimeout(() => {
                        setFormError('')
                    }, 2700);
                }
            })

            props.setPokemonArray(resultArray)
        } else if (optionSecondInputRef.current.value && !optionInputRef.current.value) {

            const currentSecondPokeTypeInput = optionSecondInputRef.current.value.toUpperCase();
            const resultArray = [];

            pokemonArray.filter(pokemon => {
                const alteredTypeName = pokemon.types[0].type.name.toUpperCase();
                let alteredSecondTypeName;

                if (pokemon.types[1]) {
                    alteredSecondTypeName = pokemon.types[1].type.name.toUpperCase();
                    if (alteredTypeName === currentSecondPokeTypeInput || alteredSecondTypeName === currentSecondPokeTypeInput) {
                        props.setPokemonArray(resultArray.push(pokemon));
                    }
                } else if (alteredTypeName === currentSecondPokeTypeInput) {
                    resultArray.push(pokemon);
                } else {
                    setFormError('No pokemon found.')
                    setTimeout(() => {
                        setFormError('')
                    }, 2700);
                }
            })

            props.setPokemonArray(resultArray)
        } else if (optionInputRef.current.value && optionSecondInputRef.current.value) {
            setFormError('');

            const currentPokeTypeInput = optionInputRef.current.value.toUpperCase();
            const currentSecondPokeTypeInput = optionSecondInputRef.current.value.toUpperCase();
            const resultArray = [];

            pokemonArray.filter(pokemon => {
                const alteredTypeName = pokemon.types[0].type.name.toUpperCase();
                let alteredSecondTypeName;

                if (pokemon.types[1]) {
                    alteredSecondTypeName = pokemon.types[1].type.name.toUpperCase();
                    if ((alteredTypeName === currentPokeTypeInput &&
                        alteredSecondTypeName === currentSecondPokeTypeInput) ||
                        alteredTypeName === currentPokeTypeInput ||
                        alteredSecondTypeName === currentSecondPokeTypeInput
                    ) {
                        setFormError('')
                        props.setPokemonArray(resultArray.push(pokemon));
                    }
                } else {
                    setFormError('No pokemon found.')
                    setTimeout(() => {
                        setFormError('')
                    }, 2700);
                }
            })

            props.setPokemonArray(resultArray)
        } else {
            setFormError('No pokemon found.')
            setTimeout(() => {
                setFormError('')
            }, 2700);
        }
    }


    return (
        <div className='top-bar'>
            <div>
                <h1>Pokedex</h1>
                {/* <Link to='/about'>About</Link> */}
            </div>
            <form onSubmit={formHandler}>
                <label>
                    <span>Type Search </span>
                    <label>
                        <span>1: </span>
                        <select ref={optionInputRef}>
                            {typesArray.map((type, index) => <option defaultValue={''} key={index}>{type}</option>)}
                        </select>
                    </label>
                    <label>
                    </label>
                    <span>2: </span>
                    <select ref={optionSecondInputRef}>
                        {typesArray.map((type, index) => <option key={index}>{type}</option>)}
                    </select>

                </label>
                <button type='submit'>Filter</button>
                <span className='error-form-span'>{formError}</span>
            </form>
        </div>
    )
}
export default TopBar