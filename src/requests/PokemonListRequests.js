//import * as urls from './urls';

export async function getPokemonList() {
  return await fetch('https://ironhack-pokeapi.herokuapp.com/pokemon')
    .then(result => result.json());
}