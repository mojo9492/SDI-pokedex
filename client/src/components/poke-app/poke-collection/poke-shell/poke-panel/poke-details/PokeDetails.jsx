import React from 'react';

const PokeDetails = ({ id, name, moves, stats }) => {
    return (
        <div className='details-container'>
            <h2>Details:</h2>
            <div className='details-body'>
                <label>
                    <p>Stats: </p>
                    <ul>
                        {stats.map((stat, index) => <li key={id + name + index}>{stat.stat.name}: {stat.base_stat} </li>)}
                    </ul>
                </label>
                <label className='details-body-moves'>
                    <p>Moves: </p>
                    <ul>
                        {moves.map((move, index) => <li key={id + move.move.name + index}>{move.move.name}</li>)}
                    </ul>
                </label>
            </div>
        </div>
    );
};

export default PokeDetails;