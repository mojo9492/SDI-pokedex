import React, { useState, useEffect, useContext } from 'react';
import PokeCollection from './components/poke-collection/PokeCollection';
import TopBar from './components/top-bar/TopBar';
import { PokeContext } from './PokeContext';

const App = () => {

  const [pokemonArray, setPokemonArray] = useState([])

  //filter (type)
  //dropdownmenue filters pokemon array
  //
  //
  //
  // types dropdown
  // moves on stats


  const thePokemonArray = useContext(PokeContext)
  console.log('flavortext', thePokemonArray)

  return (
    <div>
      <TopBar setPokemonArray={(valuesArray) => setPokemonArray(valuesArray)}></TopBar>
      <PokeCollection pokemonArray={pokemonArray} />
    </div>
  );
}

export default App;
