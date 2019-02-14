// Functional Set States
import {
  setPokemonList,
  setSelectedPokemonData,
  resetSelectedPokemonData,
} from '../stateChanges/pokemonStateChanges';

import { increment } from '../stateChanges/randomStateChanges';

// Actions
export const actions = {
  'SET_POKEMON_LIST': setPokemonList,
  'SET_SELECTED_POKEMON_DATA': setSelectedPokemonData,
  'RESET_SELECTED_POKEMON_DATA': resetSelectedPokemonData,
  'RANDOM_INCREMENT': increment,
}
