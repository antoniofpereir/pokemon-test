import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getPokemonData } from '../../requests/PokemonListRequests';

import { capitalize } from '../../utils/capitalize';

const styles = {
  avatar: {
    width: 80,
    height: 80,
  },
  listItem: {
    alignItems: 'center',
  }
}
class PokemonListItem extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonData: {},
    }
  }

  componentDidMount() {
    getPokemonData(this.props.item.url).then(pokemonData => this.setState({ pokemonData }));
    // getPokemonCharacteristic(this.props.item.id + 1).then(response => {
    //   const pokemonCharacteristic = response.descriptions[0].description;
    //   this.setState({ pokemonCharacteristic });
    // })
  }

  render() {
    const { name } = this.props.item;
    const { pokemonData } = this.state;

    if (Object.keys(this.state.pokemonData).length === 0) {
      return <CircularProgress />
    }
    return (
      <ListItem style={styles.listItem}>
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
}

export default PokemonListItem;
