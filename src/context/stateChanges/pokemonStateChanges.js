export function setPokemonList(currentState, pokemonListResponse) {
  let pokemonData = currentState.pokemonData;
  pokemonData.pokemonListResponse = pokemonListResponse;
  return { pokemonData };
}

export function setSelectedPokemonData(currentState, newData) {
  let pokemonData = currentState.pokemonData;
  pokemonData.selectedPokemon = newData;
  return { pokemonData };
}

export function resetSelectedPokemonData(currentState) {
  let pokemonData = currentState.pokemonData;
  pokemonData.selectedPokemon = {};
  return { pokemonData };
}
