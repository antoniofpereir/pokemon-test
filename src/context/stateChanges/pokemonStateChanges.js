import deepCopy from '../../utils/deepCopy';

export function setPokemonList(currentState, pokemonListResponse) {
  let pokemonData = deepCopy(currentState.pokemonData);
  pokemonData.pokemonListResponse = pokemonListResponse;
  return { pokemonData };
}

export function setSelectedPokemonData(currentState, newData) {
  let state = deepCopy(currentState);
  state.pokemonData.selectedPokemon = newData;
  return state;
}

export function resetSelectedPokemonData(currentState) {
  let state = deepCopy(currentState);
  state.pokemonData.selectedPokemon = {};
  return state;
}