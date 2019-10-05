import React from 'react';
import Pokecard from '../Pokecard/Pokecard';

function Pokehand({ hand }) {
    return (
        <div>
            {hand.map(p => (
                <Pokecard pokemon={p} />
            ))}
        </div>
    )
}
export default Pokehand;