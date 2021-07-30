import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import AboutPage from './components/about/About'
import PokeApp from './components/poke-app/PokeApp'

const App = () => {
    const [isPokeDexHidden, setIsPokeDexHidden] = useState(false);
    const [isAboutHidden, setIsAboutDexHidden] = useState(false);
    const [bannerMessage, setBannerMessage] = useState('Welcome')

    return (
        <div className='home-container'>
            <header>
                <h1 className='banner-message'>{bannerMessage}</h1>
                <img src='https://img.rankedboost.com/wp-content/uploads/2017/09/Pokemon-GO-GEN-4-Pokedex.png' alt='Pokedex' />
            </header>
            <div className='home-main'>
                <Link hidden={isPokeDexHidden} to='/pokedex'>
                    <button onClick={() => {
                        setBannerMessage('Pokedex')
                        setIsPokeDexHidden(true)
                        setIsAboutDexHidden(true)
                    }}>Enter!</button>
                </Link>
                <Link hidden={isAboutHidden} to='/about'>
                    <button onClick={() => {
                        setBannerMessage('About the Pokedex')
                        setIsAboutDexHidden(true)
                        setIsPokeDexHidden(false)
                    }}>About</button>
                </Link>
            </div>

            <Route exact path='/pokedex' component={PokeApp}></Route>
            <Route exact path='/about' component={AboutPage}></Route>
        </div>
    )
}
export default App