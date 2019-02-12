import ACTIONS from './constants';

import {
  startLoading,
  stopLoading
} from './loadingActions';

import {
  getPokemonList,
  getNextPokemonList,
} from '../../requests/PokemonListRequests';

function fetchPokemonDataSuccess(data) {
  return {
    type: ACTIONS.POKEMON.SET,
    data,
  };
}

export function fetchPokemonData() {
  return dispatch => {
    dispatch(startLoading());
    getPokemonList()
      // .then(response => response.json())
      .then(responseJson => {
        dispatch(fetchPokemonDataSuccess(responseJson));
        dispatch(stopLoading());
      });
  }
}