import React, { Component } from 'react';
import PokemonList from './containers/PokemonList';

// https://ironhack-pokeapi.herokuapp.com/pokemon
class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonList />
      </div>
    );
  }
}

export default App;
