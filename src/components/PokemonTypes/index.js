import React from 'react';

import { capitalize } from '../../utils';

const PokemonTypes = ({ main, secondary }) => {
  return (
    <div>
      {
        capitalize(main.type.name)}
        {secondary !== undefined && ` / ${capitalize(secondary.type.name)}`
      }
    </div>
  );
}

export default PokemonTypes;
