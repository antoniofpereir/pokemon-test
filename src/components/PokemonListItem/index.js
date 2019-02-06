import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

import history from '../../resources/navigation/history';

import { routes } from '../../resources/navigation/routes';

import { getPokemonData } from '../../requests/PokemonListRequests';

import { capitalize } from '../../utils/capitalize';

/* Context */
import { AppContext } from '../../contextLibrary';

const styles = {
  avatar: {
    width: 80,
    height: 80,
  },
  listItem: {
    alignItems: 'center',
    width: '60%',
  }
}
class PokemonListItem extends React.Component {
  static contextType = AppContext;

  constructor() {
    super();
    this.state = {
      pokemonData: {},
      hasData: false,
    }
  }

  selectPokemonItem = () => {
    this.context.execute('SET_SELECTED_POKEMON_DATA', this.state.pokemonData);
    history.push(routes.pokemonData);
  };

  renderPokemonList = () => {
    const { name } = this.props.item;
    const { pokemonData } = this.state;

    return (
      <ListItem button style={styles.listItem} onClick={this.selectPokemonItem} >
        <ListItemAvatar>
          <Avatar alt={name} src={pokemonData.sprites.front_default} style={styles.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={capitalize(name)}
          secondary={`#${pokemonData.id}`}
        />
      </ListItem>
    );
  }

  componentDidMount() {
    getPokemonData(this.props.item.url).then(pokemonData => this.setState({ pokemonData, hasData: true }));
  }

  render() {
    if (this.state.hasData === false) {
      return <CircularProgress />
    }
    return this.renderPokemonList();
  }
}

export default PokemonListItem;
