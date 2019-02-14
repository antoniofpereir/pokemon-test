import React, { Component } from 'react';

/* Internal */
import PokemonAppBar from './components/PokemonAppBar';
import PokemonDrawer from './components/PokemonDrawer';

/* Utils */
import { renderRoutes } from './utils';

/* Resources */
import { routesMapping } from './resources/navigation/routes';

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
        <div style={{paddingTop: 56}}>
        {renderRoutes(routesMapping)}
        </div>
      </div>
    );
  }
}

export default App;
