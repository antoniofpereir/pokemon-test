import React from 'react';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { getPokemonList } from '../../requests/PokemonListRequests';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonList: [],
    }
  }

  componentDidMount() {
    getPokemonList().then(pokemonList => this.setState({ pokemonList }));
    
  }

  render() {
    return (
      <div>
        sadfasdf
      </div>
    );
  }
}

export default PokemonList;
