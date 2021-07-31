import React, { Suspense, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import AboutPage from './components/about/About';
import Loading from './components/Loading';
import PokeEnvironment from './components/poke-app/poke-collection/poke-shell/poke-panel/poke-environment/PokeEnvironment';
import PokePanel from './components/poke-app/poke-collection/poke-shell/poke-panel/PokePanel';
const PokeApp = React.lazy(() => import('./components/poke-app/PokeApp'));

const App = () => {
    const [isPokeDexHidden, setIsPokeDexHidden] = useState(false);
    const [isAboutHidden, setIsAboutDexHidden] = useState(false);
    const [bannerMessage, setBannerMessage] = useState('Welcome to the Pokedex Project');


    return (
        <div className='home-container'>
            <header>
                <h1 className='banner-message'>{bannerMessage}</h1>
                <img src='https://img.rankedboost.com/wp-content/uploads/2017/09/Pokemon-GO-GEN-4-Pokedex.png'
                    alt='Pokedex' />
            </header>
            <div className='home-main'>
                <Link hidden={isPokeDexHidden} to='/pokedex'>
                    <button onClick={() => {
                        setIsPokeDexHidden(true)
                        setIsAboutDexHidden(true)
                        setBannerMessage('Pokedex')
                    }}>Enter!</button>
                </Link>
                <Link hidden={isAboutHidden} to='/about'>
                    <button onClick={() => {
                        setIsAboutDexHidden(true)
                        setIsPokeDexHidden(false)
                        setBannerMessage('About the Pokedex Project')
                    }}>About</button>
                </Link>
            </div>

            <Route exact path='/pokedex'>
                <Suspense fallback={<Loading setBannerMessage={setBannerMessage} />}>
                    <PokeApp setBannerMessage={setBannerMessage} />
                </Suspense>
            </Route>

            <Route path='/pokedex/pokemon/:id'
                render={({ history, location }) => <PokePanel pokemon={location.state.pokemon} />}
            />
            
            <Route path='/pokedex/pokemon/:id/environment'
                render={({ history, location }) => <PokeEnvironment encounters={location.state.encounters} />  }
            />

            <Route exact path='/about' component={AboutPage} />

            <Route path='/wat/404' render={() => <div className='error-404'><p><i>404</i>, my bro</p></div>} />
        </div>
    )
}
export default App