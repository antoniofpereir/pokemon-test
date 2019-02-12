import { combineReducers } from 'redux';

/* Reducers */
import pokemonData from './pokemonReducer';

const rootReducer = combineReducers({
  pokemonData,
});

export default rootReducer;
