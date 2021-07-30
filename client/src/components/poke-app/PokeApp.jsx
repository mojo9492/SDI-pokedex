import React, { useContext, useEffect, useState } from 'react';
import { PokeContext } from '../../PokeContext';
import TopBar from './top-bar/TopBar';
import PokeCollection from './poke-collection/PokeCollection'

const PokeApp = () => {
  const pokemonArrayContext = useContext(PokeContext)
  const [ pokemonArray, setPokemonArray ] = useState([]);

  useEffect(() => {
    setPokemonArray(pokemonArrayContext)
  }, [pokemonArrayContext, setPokemonArray])

  return (
    <>
      <TopBar setPokemonArray={filteredPokemonArray => setPokemonArray(filteredPokemonArray)}/>
      <PokeCollection setPokemonArray={setPokemonArray} pokemonArray={pokemonArray} />
    </>
  );
}

export default PokeApp;
