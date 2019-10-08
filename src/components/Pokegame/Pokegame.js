import React from 'react';
import Pokehand from '../Pokehand/Pokehand';

function PokeGame() {
    const pokemons = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ];

    let playerHand1 = [];
    let playerHand2 = [...pokemons];

    while (playerHand1.length < playerHand2.length) {
        const randomIndex = Math.floor(Math.random() * playerHand2.length);
        playerHand1.push(playerHand2.splice(randomIndex, 1)[0]);
    }

    let player1Exp = playerHand1.reduce((a, b) => a + b.base_experience, 0);
    let player2Exp = playerHand2.reduce((a, b) => a + b.base_experience, 0);

    return (
        <div>
            <Pokehand hand={playerHand1} totalExp={player1Exp} winner={player1Exp > player2Exp} />
            <Pokehand hand={playerHand2} totalExp={player2Exp} winner={player2Exp > player1Exp} />
        </div>
    )
}

export default PokeGame;
