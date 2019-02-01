import React from 'react';

/* Material UI */
import CircularProgress from '@material-ui/core/CircularProgress';

/* Components */
import PokemonListItem from '../../components/PokemonListItem';

/* Requests */
import { getPokemonList } from '../../requests/PokemonListRequests';

/* Context */
import { AppContext } from '../../contextLibrary';

class PokemonContainer extends React.Component {
  static contextType = AppContext;

  constructor() {
    super();
    this.state = {
      hasData: false,
    }
  }

  componentDidMount() {
    getPokemonList().then(pokemonListResponse => {
      this.context.execute('SET_POKEMON_LIST', pokemonListResponse);
      this.setState({ hasData: true });
    });
  }

  renderPokemonList = () => {
    const { pokemonListResponse } = this.context.pokemonData;
    return pokemonListResponse.results.map(item => <PokemonListItem key={"pkmn-" + item.name} item={item} />)
  }

  render() {
    if (this.state.hasData === false) {
      return <CircularProgress />
    }

    return this.renderPokemonList();
  };
}

export default PokemonContainer;
