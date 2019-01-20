import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/* Internal */
import PokemonAppBar from './components/PokemonAppBar';
import PokemonDrawer from './components/PokemonDrawer';
import PokemonHome from './containers/PokemonHome';
import PokemonContainer from './containers/PokemonContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false,
    }
  }

  toggleDrawer = (state) => () => {
    this.setState({ drawerOpen: state });
  }

  render() {

    return (
      <div className="App">
        <PokemonAppBar toggleDrawer={this.toggleDrawer} />
        <PokemonDrawer drawerOpen={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />

        <Route path='/' exact component={PokemonHome} />
        <Route path='/list' component={PokemonContainer} />
      </div>
    );
  }
}

export default App;
