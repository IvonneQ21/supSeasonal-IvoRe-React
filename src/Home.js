import React, {Component} from 'react';
// import {FieldGroup} from 'react-bootstrap';
// import LogIn from './components/Login_page';

import NavBar from './components/NavBar_Heroku';
import IngredientsList from './components/IngredientsList';
import RecipesList from './components/RecipesList';
import './Home.css';

const style = {
 // color: blue

}

export default class Home extends Component {


  render() {
    console.log('src/Home.js/render');
    return (
      <div style={style} className="Home">
        <div className="Home-header">
          <NavBar />
          <IngredientsList />
          <RecipesList />
        </div>
      </div>
    );
  }
}
