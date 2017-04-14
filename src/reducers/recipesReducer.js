import initialState from './initialState';

const recipes = (state = initialState.recipes, action) => {
  switch(action.type) {
    case 'GET_RECIPES_PENDING':
      return 'Recipes Loading!';
    case 'GET_RECIPES_FULFILLED':
      return action.payload;
    default:
      return state
  }
}

export default recipes;
