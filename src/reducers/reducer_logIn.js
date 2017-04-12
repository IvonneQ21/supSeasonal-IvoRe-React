import intialState from './initialState';


//creating my reducer.
//for authentication, 2 case switches is fine. success/reject
// eg, LOGIN_SUCCESSFUL / LOGIN_FAILED
// the "PENDING" state is close to non existing in authentication, unless you are using jwt

/*
const logIn = (state = intitalState.loggedIn, action) => {
  console.log('userlogIn in logIn reducer');
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


*/

const logIn = (state = intitalState.loggedIn, action) => {
  console.log('userlogIn in logIn reducer');
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
