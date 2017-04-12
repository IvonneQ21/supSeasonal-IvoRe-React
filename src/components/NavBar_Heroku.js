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
  console.log('src/components/NavBar/mapStateToProps');
  return ({
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  console.log('src/components/NavBar/mapDispatchToProps');
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch);
}

const NavBar = (props) => {
  console.log(props)
  return (
          <Router>
            <div>
              {/* <ul>
                <li><Link to={`${props.match}/home`}><h3>supSeasonal!!</h3></Link></li>
                <li><Link to={`${props.match}/login`}><h3>Login</h3></Link></li>
              </ul> */}
              {/* <Route exact path="/" component={LoginPage}/> */}
              <Route path="/home" component={Home}/>
              {/* <Route path="/login" component={LoginPage}/> */}
            </div>
          </Router>
  )
}

// class NavBar extends Component {
//   render() {
//     return (
//       <div>
//         <header>
//           <div>
//             <Router>
//               <Link to={`${match.url}/home`}><h3>supSeasonal!!</h3></Link>
//               <Link to={`${match.url}/login`}><h3>Login</h3></Link>
//             </Router>
//           </div>
//
//           <MonthDropdown />
//         </header>
//       </div>
//     )
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
