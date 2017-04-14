import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RegistrationPage from './components/LoginPage';


import NavBar from './components/NavBar_Heroku';
import MonthDropdown from './components/MonthDropdown';
import IngredientsList from './components/IngredientsList';
import RecipesList from './components/RecipesList';
import UserLogIn from './components/LoginPage';

import './App.css';

export default class App extends Component {
  render() {
    return (
        <Router>
          <div className="">
                  <h3>SupSeasonal</h3>
            <div>
              <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li>{this.props.username}</li>
              </ul>
            </div>

            {/* <Route exact path="/" component={NavBar} /> */}
            <Route exact path="/" component={UserLogIn} />
            {/* <Route path="/home" component={NavBar} /> */}
            <Route path="/home" component={MonthDropdown} />
            <Route path="/home" component={IngredientsList} />
            <Route path="/home" component={RecipesList} />
          </div>
        </Router>
    );
  }
}
