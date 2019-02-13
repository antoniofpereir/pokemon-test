import ACTIONS from './constants';

import {
  getPokemonList,
  getNextPokemonList,
} from '../../requests/PokemonListRequests';

function startLoadingPokemonData() {
  return {
    type: ACTIONS.POKEMON.START_LOADING,
  };
}

function stopLoadingPokemonData() {
  return {
    type: ACTIONS.POKEMON.STOP_LOADING,
  };
}

function fetchPokemonDataSuccess(data) {
  return {
    type: ACTIONS.POKEMON.SET,
    data,
  };
}

export function fetchPokemonData() {
  return dispatch => {
    dispatch(startLoadingPokemonData());
    getPokemonList()
      // .then(response => response.json())
      .then(responseJson => {
        dispatch(fetchPokemonDataSuccess(responseJson));
        dispatch(stopLoadingPokemonData());
      });
  }
}

