/* Components */
import PokemonHome from '../containers/PokemonHome';
import PokemonContainer from '../containers/PokemonContainer';

import { createRoute } from '../utils/routesMapping';

export const routes = {
  pokemonHome: '/',
  pokemonContainer: '/list',
}

export const routesMapping = [
  createRoute(routes.pokemonHome, PokemonHome, true),
  createRoute(routes.pokemonContainer, PokemonContainer, false),
]
