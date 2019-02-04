import React from 'react';

import PokemonSprites from '../../components/PokemonSprites';

/* Context */
import { AppContext } from '../../contextLibrary';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}

class PokemonData extends React.Component {
  static contextType = AppContext;

  cleanup = () => this.context.execute('RESET_SELECTED_POKEMON_DATA');

  componentDidMount() {
    window.addEventListener('beforeunload', this.cleanup);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.cleanup);
    this.context.execute('RESET_SELECTED_POKEMON_DATA');
  }

  render() {
    return (
      <div style={style.container} >
        <PokemonSprites
          front_default={this.context.pokemonData.selectedPokemon.sprites.front_default}
          back_default={this.context.pokemonData.selectedPokemon.sprites.back_default}
        />
      </div>
    );
  }
}

export default PokemonData;
