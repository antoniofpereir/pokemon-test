import React from 'react';

/* Material UI */
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';


import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

/* Components */
import PokemonListItem from '../../components/PokemonListItem';

/* Requests */
import {
  getPokemonList,
  getNextPokemonList,
} from '../../requests/PokemonListRequests';

/* Context */
import { AppContext } from '../../contextLibrary';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  list: {
    width: '90%',
  },
  listItem: {
    justifyContent: 'center',
  }
}

class PokemonContainer extends React.Component {
  static contextType = AppContext;

  constructor() {
    super();
    this.state = {
      hasData: false,
    }

    this.loadList = this.loadList.bind(this);
  }

  componentDidMount() {
    getPokemonList().then(pokemonListResponse => {
      this.context.execute('SET_POKEMON_LIST', pokemonListResponse);
      this.setState({ hasData: true });
    });
  }

  renderPokemonList = () => {
    const { pokemonListResponse } = this.context.pokemonData;
    return pokemonListResponse.results.map(item => <PokemonListItem key={"pkmn-" + item.name} item={item} />);
  }

  loadList = (orientation) => () => {
    const nextUrl = this.context.pokemonData.pokemonListResponse[orientation];
    this.setState({ hasData: false });

    getNextPokemonList(nextUrl).then(pokemonListResponse => {
      this.context.execute('SET_POKEMON_LIST', pokemonListResponse);
      this.setState({ hasData: true });
    });
  }

  render() {
    if (this.state.hasData === false) {
      return <CircularProgress />
    }

    return (
      <div style={style.container}>
        <List style={style.list} >
          {this.context.pokemonData.pokemonListResponse.previous !== null &&
            <ListItem button onClick={this.loadList('previous')} style={style.listItem} >
              <IconButton color="inherit" aria-label="Open drawer">
                <ArrowUpward />
              </IconButton>
            </ListItem>}
          {this.renderPokemonList()}
          <ListItem button onClick={this.loadList('next')} style={style.listItem} >
            <IconButton color="inherit" aria-label="Open drawer">
              <ArrowDownward />
            </IconButton>
          </ListItem>
        </List>
      </div>
    );
  };
}

export default PokemonContainer;
