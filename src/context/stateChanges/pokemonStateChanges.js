import deepCopy from '../../utils/deepCopy';

export function setPokemonList(currentState, newData) {
  let state = deepCopy(currentState);
  state.loginInformation.authenticationDetails = newData;
  state.loginInformation.isLogged = true;
  return state;
}

export function setSelectedPokemonData(currentState, newData) {
  let state = deepCopy(currentState);
  state.loginInformation.authenticationDetails = newData;
  state.loginInformation.isLogged = true;
  return state;
}