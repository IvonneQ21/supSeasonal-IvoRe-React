// This file contains informaiton on how a requests with a particular month
//will be resolved.

// First, install with npm: npm i redux-promise-middleware -S
//
// Second, import the middleware and include it in applyMiddleware when creating the Redux store:
//
// import promiseMiddleware from 'redux-promise-middleware';

composeStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);

// To use the middleware, dispatch a promise as the value of the payload
// property of the action. You can also explicitly dispatch a promise as the
// value of payload.promise.


// Link to Sup Seasonal API http://supseasonal.herokuapp.com/

// implicit promise
const foo = () => ({
  type: 'FOO',
  payload: new Promise()
});

// explicit promise
const foo = () => ({
  type: 'FOO',
  payload: {
    promise: new Promise()
  }
});

// A "pending" action is dispatched immediately with the original type string
// and a suffix of _PENDING.
// pending action
{
  type: 'FOO_PENDING'
}
// fulfilled action
{
  type: 'FOO_FULFILLED'
  payload: {
    ...
  }
}

// rejected action
{
  type: 'FOO_REJECTED'
  error: true,
  payload: {
    ...
  }
}
///////////////////////////
// example on how to make the call to the api.
//reducers and actions forlder

// Note: once the information from playload is passed to the reducers
//webpack will resolve the proimised data

//create a fetch function that will format the URL we are sending.
//


const API_URL = `http://supseasonal.herokuapp.com/api/months/${month}`


// creating fetching function
