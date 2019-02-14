import {
  getPokemonList,
  getNextPokemonList,
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
