import { combineReducers } from 'redux';
import currentSelectedMonth from './monthReducer';
import ingredients from './ingredientsReducer';
import recipes from './recipesReducer';

const supseasonalReducers = combineReducers({
  ingredients,
  recipes,
  currentSelectedMonth
  // missing a few calls, ingridients fetched individually.
});

export default supseasonalReducers;
//q
