import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware';
import initialState from './reducers/initialState';
import thunkMiddleware from 'redux-thunk';
import supseasonalReducers from './reducers';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import App from './App';
import Home from './Home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';

const store = createStore(
  supseasonalReducers,
  initialState,
  composeWithDevTools(applyMiddleware( thunkMiddleware, promiseMiddleware() ))
)

console.log('render forthcoming');
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  console.log('module.hot === true');
  module.hot.accept()
}
