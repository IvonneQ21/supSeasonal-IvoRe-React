import intialState from './initialState';

const logIn = (state = intitalState.loggedIn, action) => {
  switch(action.type) {
   case 'LOGIN_PENDING':
     return state;
    case 'LOGIN_FULFILLED':
      return action.payload.data;
    case 'LOGIN_REJECTED':
      return action.payload;
    default:
      return state;
  }
}

export default logIn;
