import {
  getPokemonList,
  getNextPokemonList,
  getPokemonSingle,
} from '../../requests/PokemonListRequests';

export function requestPokemonList() {
  getPokemonList().then(pokemonListResponse => {
    this.execute('SET_POKEMON_LIST', pokemonListResponse);
  });
}

export function requestNextPokemonList(nextUrl) {
  getNextPokemonList(nextUrl).then(pokemonListResponse => {
    this.execute('SET_POKEMON_LIST', pokemonListResponse);
  });
}

export function requestSinglePokemon(searchParam) {
  getPokemonSingle(searchParam).then(response => {
    console.log(response);
    // TODO: execute to save a successful response
    // TODO: throw when nothing found
    // TODO: error boundaries
  })
}
