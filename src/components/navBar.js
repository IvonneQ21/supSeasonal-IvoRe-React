import React from 'react';

import { connect } from 'react-redux';
import { setMonth, getIngredients, getRecipes } from '../actions';
import { bindActionCreators } from 'redux';

import Months from './MonthDropdown';

import {Navbar} from 'react-bootstrap';

const mapStateToProps = (state, ownProps) => {
  return ({
    ingrList: state.ingredients,
    recList: state.recipes,
    month: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch);
}

// class const NavBar = () => {
//   return (
    // <div>
    //   would like to render an image associated with the time of the month. might need to be a separate component.
    // </div>
//     <Navbar>
//       {/* <Navbar.Header> */}
//         {/* <Navbar.Brand> */}
//
//           <div>
//           <a href="#">supSeasonal</a>
//           {/* <div clasName={props.newDate}</div> */}
//           </div>
//         </Navbar.Brand>
//       </Navbar.Header>
//       <Months onChange={(event) => {
//         this.props.setMonth(event.target.value);
//       }}/>
//     </Navbar>
//   )
// }

class NavBar extends Component {
  render () {
    return (
      <div>
        <Navbar />
          <h1>supSeasonal</h1>
        <MonthDropdown/>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
