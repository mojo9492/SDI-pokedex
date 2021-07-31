import React, { useContext, useEffect, useState } from 'react';
import { PokeContext } from '../../PokeContext';
import TopBar from './top-bar/TopBar';
import { Link } from 'react-router-dom';
const PokeCollection = React.lazy(() => import('./poke-collection/PokeCollection'));

const PokeApp = ({ setBannerMessage }) => {
  const pokemonArrayContext = useContext(PokeContext)
  const [pokemonArray, setPokemonArray] = useState([]);
  const [isHomeButtonHidden, setIsHomeButtonHidden] = useState(true);

  useEffect(() => {
    setPokemonArray(pokemonArrayContext)
  }, [pokemonArrayContext, setPokemonArray, setBannerMessage])

  if (!pokemonArrayContext) {
    setBannerMessage('Cannot load the pokedex')

    setIsHomeButtonHidden(false)
  }



  return (
    <>
      <Link to='/' hidden={isHomeButtonHidden}><button className='error-button'>Back</button></Link>
      <TopBar setPokemonArray={filteredPokemonArray => setPokemonArray(filteredPokemonArray)} />
      <PokeCollection setPokemonArray={setPokemonArray} pokemonArray={pokemonArray} />
    </>
  );
}

export default PokeApp;
