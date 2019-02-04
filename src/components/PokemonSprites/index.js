import React from 'react';

const style = {
  container: {
    display: 'flex',
  },
}

const PokemonSprites = ({ front_default, back_default }) => {
  return (
    <div style={style.container} >
      <img src={front_default} alt="front_default"></img>
      <img src={back_default} alt="back_default"></img>
    </div>
  );
}

export default PokemonSprites;
