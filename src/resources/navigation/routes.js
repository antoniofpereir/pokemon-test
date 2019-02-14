/* Components */
import PokemonHome from '../../containers/PokemonHome';
import PokemonContainer from '../../containers/PokemonContainer';
import PokemonData from '../../containers/PokemonData';

import { createRoute } from '../../utils';

export const routes = {
  pokemonHome: '/',
  pokemonContainer: '/list',
  pokemonData: '/pokemon',
}

export const routesMapping = [
  createRoute(routes.pokemonHome, PokemonHome, true),
  createRoute(routes.pokemonContainer, PokemonContainer, false),
  createRoute(routes.pokemonData, PokemonData, false),
]
