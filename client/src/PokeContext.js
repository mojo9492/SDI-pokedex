import React from 'react';

export const PokeContext = React.createContext([]);

function PokeContextProvider({children}) {

    const [pokemonArray, setPokemonArray] = React.useState([]);

    React.useEffect(() => {
        //option 1
        const pokemonPromiseArray = [];
        // for loop 1-151
        for (let i = 1; i <= 898; i++) {
            const pokePromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
            // console.log('promise ', pokePromise);
            pokemonPromiseArray.push(pokePromise);
        }

        Promise.all(pokemonPromiseArray)
            .then(loadedPokemonArray => setPokemonArray(loadedPokemonArray))
            .catch(error => console.error(error))
    }, [setPokemonArray])

    return <PokeContext.Provider value={pokemonArray}>{children}</PokeContext.Provider>
}


export default PokeContextProvider;