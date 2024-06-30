import React from 'react';
import '../styles/CharacterCard.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-image" />
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <p><strong>Quote:</strong> {character.quote}</p>
      <p><strong>Abilities:</strong> {character.abilities}</p>
    </div>
  );
};

export default CharacterCard;
