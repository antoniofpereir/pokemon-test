import React from 'react';

const PokemonSprites = ({ front_default, back_default }) => {
  return (
    <React.Fragment>
      <img src={front_default} alt="front_default"></img>
      <img src={back_default} alt="back_default"></img>
    </React.Fragment>
  );
}

export default PokemonSprites;
