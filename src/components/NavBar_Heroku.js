import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';
import { setMonth, getIngredients, getRecipes } from '../actions';
import { bindActionCreators } from 'redux';
import MonthDropdown from './MonthDropdown';
import Home from '../Home';

const mapStateToProps = (state, ownProps) => {
  return ({
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch);
}

const NavBar = (props) => {
  return (
          <Router>
            <div>
              <Route path="/home" component={Home}/>
            </div>
          </Router>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
