import React, { useContext, useEffect, useState } from 'react';
import PokeCollection from './components/poke-collection/PokeCollection';
import TopBar from './components/top-bar/TopBar';
import { PokeContext } from './PokeContext';

const App = () => {
  const pokemonArrayContext = useContext(PokeContext)
  const [ pokemonArray, setPokemonArray ] = useState([]);

  useEffect(() => {
    setPokemonArray(pokemonArrayContext)
  }, [pokemonArrayContext, setPokemonArray])

  //filter (type)
  //dropdownmenue filters pokemon array
  //
  //
  //
  // types dropdown
  // moves on stats



  return (
    <div>
      <TopBar setPokemonArray={filteredPokemonArray => setPokemonArray(filteredPokemonArray)}/>
      <PokeCollection pokemonArray={pokemonArray} />
    </div>
  );
}

export default App;
