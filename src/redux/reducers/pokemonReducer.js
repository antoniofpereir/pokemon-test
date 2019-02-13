import ACTIONS from '../actions/constants';

const initialState = {
  pokemonListResponse: {},
  selectedPokemon: {},
  hasData: false,
  loading: false,
};

export default function pokemonData(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.POKEMON.SET:
      return {
        ...state,
        pokemonListResponse: action.data,
        hasData: true,
      };
    case ACTIONS.POKEMON.START_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ACTIONS.POKEMON.STOP_LOADING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}
