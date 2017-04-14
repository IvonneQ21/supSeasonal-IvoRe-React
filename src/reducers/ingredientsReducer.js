import initialState from './initialState';

const ingredients = (state = initialState.ingredients, action) => {
  switch(action.type) {
    case 'GET_INGREDIENTS_PENDING':
      return 'Ingredients Loading!';
    case 'GET_INGREDIENTS_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export default ingredients;
