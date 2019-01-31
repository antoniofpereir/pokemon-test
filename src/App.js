import React, { Component } from 'react';

/* Internal */
import PokemonAppBar from './components/PokemonAppBar';
import PokemonDrawer from './components/PokemonDrawer';

/* Utils */
import { renderRoutes } from './utils/routesMapping';

/* Resources */
import { routesMapping } from './resources/routes';

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
        {renderRoutes(routesMapping)}
      </div>
    );
  }
}

export default App;
