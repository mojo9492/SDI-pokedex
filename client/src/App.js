import React, { useState, useEffect } from 'react';
import PokeCollection from './components/poke-collection/PokeCollection';

const App = () => {
  const [pokemonArray, setPokemonArray] = useState([]);


  useEffect(() => {
      //option 1
      const pokemonPromiseArray = [];
      // for loop 1-151
      for(let i = 1; i <= 151; i++) {
        const pokePromise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
        // console.log('promise ', pokePromise);
        pokemonPromiseArray.push(pokePromise);
      }

      Promise.all(pokemonPromiseArray)
      .then(loadedPokemonArray => setPokemonArray(loadedPokemonArray))
      .catch(error => console.error(error))
  }, [setPokemonArray])

  return (
    <div>
      <PokeCollection pokemonArray={pokemonArray} />
    </div>
  );
}

export default App;
