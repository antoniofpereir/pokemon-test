import React from 'react';
import { withRouter } from 'react-router-dom';

/* Material UI Core */
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const PokemonDrawer = ({ drawerOpen, toggleDrawer, history }) => {
  return (
    <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button key="pokemon-home" onClick={() => history.push('/')} >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="pokemon-list" onClick={() => history.push('/list')} >
            <ListItemText primary="Pokémon List" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default withRouter(PokemonDrawer);
