//import initialState from './initialState';
import  * as CONST from '../constants/constants'

const ingredients = (state = [], action) => {
  // console.log('src/reducers/ingredientsReducer/const_ingredients()');
  switch(action.type) {
    case CONST.GET_INGREDIENTS:
    //  return 'Ingredients Loading!';
    //case 'GET_INGREDIENTS_FULFILLED':
    //  console.log('src/reducers/ingredientsReducer/const_ingredients()/GET_INGREDIENTS_FULFILLED');
      return action.payload;
    default:
    //  console.log('src/reducers/ingredientsReducer/const_ingredients()/default');
      return state;
  }
}

// this file is missing multiple action types, im not sure what the total count is
// would need to review the api provided.
// but it seems that you are doing some sort of fullfiullment,
// fiullfillment will have various stages





export default ingredients;
