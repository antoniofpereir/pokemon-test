import deepCopy from '../../utils/deepCopy';

export function setPokemonList(currentState, pokemonListResponse) {
  let pokemonData = deepCopy(currentState.pokemonData);
  pokemonData.pokemonListResponse = pokemonListResponse;
  return { pokemonData };
}

export function setSelectedPokemonData(currentState, newData) {
  let state = deepCopy(currentState);
  state.loginInformation.authenticationDetails = newData;
  state.loginInformation.isLogged = true;
  return state;
}