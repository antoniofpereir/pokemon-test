import React from 'react';
import { debounce } from "throttle-debounce";

/* Material UI Core */
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

/* Material UI Icons */
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

/* Context */
import { Context } from '../../contextLibrary';

import history from '../../resources/navigation/history';

import { capitalize } from '../../utils';

import { requestSinglePokemon } from '../../context/requestActions/pokemonRequestActions';

const styles = (theme) => ({
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
})

class PokemonAppBar extends React.Component {
  static contextType = Context;

  constructor() {
    super();
    this.state = {
      pokemonSearch: '',
    }

    this.debounceSearch = debounce(1000, this.searchForSinglePokemon);
  }

  goBack = () => history.goBack();

  searchOnChange = (event) => this.setState({ pokemonSearch: event.target.value });

  // debounceSearch = (event) => {
  //   console.log(event);
  //   debounce(1000, this.searchForSinglePokemon, event);
  // }

  searchForSinglePokemon = (value) => {
    console.log('event.target.value', value);
    this.context.executeRequest(requestSinglePokemon, value);
  }

  renderIconButton = () => {
    const { classes, toggleDrawer } = this.props;

    let iconButton = {};

    if (Object.keys(this.context.pokemonData.selectedPokemon).length > 0 && history.location.pathname === '/pokemon') {
      iconButton = (
        <IconButton onClick={this.goBack} className={classes.menuButton} color="inherit" aria-label="Open drawer">
          <KeyboardArrowLeft />
        </IconButton>
      );
    } else {
      iconButton = (
        <IconButton onClick={toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Open drawer">
          <MenuIcon />
        </IconButton>
      );
    }
    return iconButton;
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed" >
        <Toolbar>
          {this.renderIconButton()}
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Pokémon
          </Typography>
          {
            (Object.keys(this.context.pokemonData.selectedPokemon).length > 0 && history.location.pathname === '/pokemon') ?
              capitalize(this.context.pokemonData.selectedPokemon.name)
              :
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={event => this.debounceSearch(event.target.value)}
                />
              </div>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(PokemonAppBar);
