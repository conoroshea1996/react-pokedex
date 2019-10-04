import React from 'react';
import '../Pokecard/Pokecard.css';

function PokeCard({ pokemon }) {
    const { id, name, type, base_experience } = pokemon;
    const baseImgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    return (
        <div className='pokecard'>
            <h2>{name}</h2>
            <h4>{type}</h4>
            <img src={baseImgUrl + id.toString().padStart(3, '0') + '.png'} />
        </div>
    )
}

export default PokeCard;