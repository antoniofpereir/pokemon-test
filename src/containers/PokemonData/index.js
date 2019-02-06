import React from 'react';

import PokemonSprites from '../../components/PokemonSprites';
import PokemonTypes from '../../components/PokemonTypes';

/* Context */
import { AppContext } from '../../contextLibrary';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}

class PokemonData extends React.Component {
  static contextType = AppContext;

  collectTypes = () => {
    const { types } = this.context.pokemonData.selectedPokemon;

    let typesProps = {
      main: {},
      secondary: {},
    };

    typesProps.main = types.find(item => {
      return item.slot === 1;
    });
    typesProps.secondary = types.find(item => {
      return item.slot === 2;
    });

    return typesProps;
  }

  cleanup = () => this.context.execute('RESET_SELECTED_POKEMON_DATA');

  componentDidMount() {
    // window.addEventListener('beforeunload', () => this.context.execute('RESET_SELECTED_POKEMON_DATA'));
  }

  componentWillUnmount() {
    // window.removeEventListener('beforeunload', () => this.context.execute('RESET_SELECTED_POKEMON_DATA'));
    this.context.execute('RESET_SELECTED_POKEMON_DATA');
  }

  render() {
    return (
      <div style={style.container} >
        <PokemonSprites
          front_default={this.context.pokemonData.selectedPokemon.sprites.front_default}
          back_default={this.context.pokemonData.selectedPokemon.sprites.back_default}
        />
        <PokemonTypes
          {...this.collectTypes()}
        />
      </div>
    );
  }
}

export default PokemonData;
