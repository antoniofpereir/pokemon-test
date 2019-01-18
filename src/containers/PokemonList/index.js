import React from 'react';

/* Material UI */
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';

/* Components */
import PokemonListItem from '../../components/PokemonListItem';

/* Requests */
import { getPokemonList } from '../../requests/PokemonListRequests';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonListResponse: [],
    }
  }

  componentDidMount() {
    getPokemonList().then(pokemonListResponse => console.log(pokemonListResponse) || this.setState({ pokemonListResponse }));
  }

  renderPokemonList() {
    const { pokemonListResponse } = this.state;

    return pokemonListResponse.results.map(item => <PokemonListItem key={"pkmn-" + item.name} item={item} />)
  }

  render() {
    if (this.state.pokemonListResponse.length === 0) {
      return <CircularProgress />
    }
    return (
      <List>
        {this.renderPokemonList()}
      </List>
    );
  }
}

export default PokemonList;
