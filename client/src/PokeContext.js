import React, { useEffect } from 'react';

export const PokeContext = React.createContext([]);

function PokeContextProvider({ children }) {
    const [pokemonArray, setPokemonArray] = React.useState([]);
    //Uses a 'net' to pull all pokemon in one go, slow loading of 5 seconds...
    useEffect(() => {
        const pokemonPromiseArray = [];
        for (let i = 1; i <= 898; i++) {
            const pokePromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
            pokemonPromiseArray.push(pokePromise);
        }

        Promise.all(pokemonPromiseArray)
            .then(loadedPokemonArray => setPokemonArray(loadedPokemonArray))
            .catch(error => console.error(error))
    }, [setPokemonArray])

    return <PokeContext.Provider value={pokemonArray}>{children}</PokeContext.Provider>
}


export default PokeContextProvider;