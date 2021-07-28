import React, { useEffect, useState } from 'react';

const PageDetails = ({ name, abilities, moves, stats, location, pageContents }) => {
    const [locationsFound, setLocationsFound] = useState('Unknown');


    useEffect(() => {
        fetch(location)
            .then(res => res.ok ? res.json() : console.error(res.statusText))
            .then(encounters => setLocationsFound(encounters))
            .catch(error => console.error(error))
    })

    if (!pageContents) {
        return (
            <div className='details-container'>
                <h2>Details:</h2>
                <div className='details-body'>
                    <label>
                        <p>Stats: </p>
                        <ul>
                            {stats.map((stat, index) => <li key={name + stat.base_stat + index}>{stat.stat.name}: {stat.base_stat} </li>)}
                        </ul>
                    </label>
                    <label className='details-body-moves'>
                        <p>Moves: </p>
                        <ul>
                            {moves.map((move, index) => <li key={name + move.move.name + index}>{move.move.name}</li>)}
                        </ul>
                    </label>
                </div>
            </div>
        );
    } else {
        return (
            <div className='details-container'>
                <div>
                    <h2>Locations found in:</h2>
                    <p>{locationsFound === 'Unknown' ? <li>Unknow location</li> : locationsFound.map((location, index) => <li key={name + location + index}>{location.location_area.name}</li>)}</p>
                </div>
            </div>
        );
    };
};

export default PageDetails;