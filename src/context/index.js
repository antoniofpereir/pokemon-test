// Init Context
import { initContext } from '../contextLibrary';

// Actions
import { actions } from './actions';

// Contexts
const pokemonData = {
  pokemonList: {},
  selectedPokemon: {},
};

const localStorageName = 'pokemon_context';

// Generating Context Provider
export const ContextProvider = initContext(localStorageName, actions, {
  pokemonData
});