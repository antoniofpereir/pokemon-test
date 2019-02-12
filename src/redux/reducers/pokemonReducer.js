import ACTIONS from '../actions/constants';

const initialState = {
  pokemonListResponse: {},
  selectedPokemon: {},
};

export default function pokemonData(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.POKEMON.SET:
    return {
      ...state,
      pokemonListResponse: action.data,
    }
    // return {
    //   ...state,
    //   loading: true,
    // };
    default:
      return state;
  }
}
