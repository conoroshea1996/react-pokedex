import React from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokehand.css';

function Pokehand({ hand, totalExp, winner }) {
    return (
        <div>
            <div className='hand-info'>
                <h1>Your Hand</h1>
                <h3> Total Exp : {totalExp}</h3>
                <h2>{winner ? 'You won!' : 'You lose!!'}</h2>
            </div>
            <div className='hand'>
                {hand.map(p => (
                    <Pokecard pokemon={p} />
                ))}
            </div>
        </div>
    )
}
export default Pokehand;