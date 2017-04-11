import initialState from './initialState';

const recipes = (state = [], action) => {
  // console.log('src/reducers/recipesReducer/const_recipesReducer()');
  switch(action.type) {
    case 'GET_RECIPES_FULFILLED':
      // console.log('src/reducers/recipesReducer/const_recipesReducer()/GET_RECIPES');
      return action.payload;
    default:
      // console.log('src/reducers/recipesReducer/const_recipesReducer()/default');
      return state
  }
}

export default recipes;
// this file seems fine
