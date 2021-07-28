import React, { useState, useContext } from 'react';
import PokeCollection from './components/poke-collection/PokeCollection';
import TopBar from './components/top-bar/TopBar';
import { PokeContext } from './PokeContext';

const App = () => {

  //filter (type)
  //dropdownmenue filters pokemon array
  //
  //
  //
  // types dropdown
  // moves on stats


  const thePokemonArray = useContext(PokeContext)

  return (
    <div>
      <TopBar />
      <PokeCollection pokemonArray={thePokemonArray} />
    </div>
  );
}

export default App;
