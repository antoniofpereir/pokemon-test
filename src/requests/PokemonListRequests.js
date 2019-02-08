import * as remoteResources from './urls';

export async function getPokemonList() {
  const result =  await fetch(remoteResources.pokemonApiList)
  return result.json();
}

export async function getNextPokemonList(url) {
  const result =  await fetch(url)
  return result.json();
}

export async function getPokemonData(url) {
  const result = await fetch(url)
  return result.json();
}

// export async function getPokemonCharacteristic(id) {
//   return await fetch(remoteResources.pokemonCharacteristics + id)
//     .then(result => console.log(result) || result.json());
// }