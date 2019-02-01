import React from 'react';

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
        <img src={this.context.pokemonData.selectedPokemon.sprites.front_default} alt="front_default"></img>
        <img src={this.context.pokemonData.selectedPokemon.sprites.back_default} alt="back_default"></img>
      </div>
    );
  }
}

export default PokemonData;
