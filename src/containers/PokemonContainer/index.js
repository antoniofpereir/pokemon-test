import React from 'react';

/* Material UI */
import CircularProgress from '@material-ui/core/CircularProgress';

/* Components */
import PokemonListItem from '../../components/PokemonListItem';

/* Requests */
import { getPokemonList } from '../../requests/PokemonListRequests';

/* Context */
import { AppContext } from '../../contextLibrary';

/* Utils */
import LoadingPlaceholder from 'loading-placeholder';

class PokemonContainer extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    getPokemonList().then(pokemonListResponse => this.context.execute('setPokemonList', pokemonListResponse));
  }

  renderPokemonList = () => {
    const { pokemonListResponse } = this.context.pokemonData;
    return pokemonListResponse.results.map(item => <PokemonListItem key={"pkmn-" + item.name} item={item} />)
  }

  render() {
    return (
      <LoadingPlaceholder mustHave={Object.keys(this.context.pokemonData.pokemonListResponse)} placeholder={<CircularProgress />} >
        {this.renderPokemonList}
      </LoadingPlaceholder>
    );
  }
}

export default PokemonContainer;
