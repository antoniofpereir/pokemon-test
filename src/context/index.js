// Init Context
import { initContext } from '../contextLibrary';

// Actions
import { actions } from './actions';

// Contexts
const pokemonData = {
  pokemonListResponse: {},
  selectedPokemon: {},
};

const randomStuffThatIDoNotNeedYet = {
  notNeeded: 'indeed not needed',
}

const localStorageName = 'pokemon_context';

// Generating Context Provider
export const ContextProvider = initContext(localStorageName, actions, {
  pokemonData,
  randomStuffThatIDoNotNeedYet
});