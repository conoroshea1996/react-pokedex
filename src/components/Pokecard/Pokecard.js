import React from 'react';

function PokeCard({ pokemon }) {
    const { id, name, type, base_experience } = pokemon;
    return (
        <div>
            <h2>{name}</h2>
            <h4>{type}</h4>
        </div>
    )
}

export default PokeCard;