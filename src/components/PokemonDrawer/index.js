import React from 'react';

/* Material UI Core */
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import history from '../../resources/navigation/history';

import { routes } from '../../resources/navigation/routes';

const PokemonDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button key="pokemon-home" onClick={() => history.push(routes.pokemonHome)} >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="pokemon-list" onClick={() => history.push(routes.pokemonContainer)} >
            <ListItemText primary="Pokémon List" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default PokemonDrawer;
