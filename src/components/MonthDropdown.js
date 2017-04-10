import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {ButtonGroup, MenuItem, DropdownButton} from 'react-bootstrap';
// import
import { Dropdown, Button } from 'semantic-ui-react'
import { setMonth } from '../actions';

// import { DropdownButton } from 'react-bootstrap';
// import {NavDropdown, MenuItem, Nav} from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';


//Ivonne Working here:
//on click dispatch to the properties on the component

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators( {setMonth:setMonth}, dispatch )
}

const mapStateToProps = (state) => {
  return {
    month: state.month
  }
}

//creating a class component because we will need to keep track
//of the state of this component's state.

// class MonthsDropDown extends Component {
//   render () {
//     return (
//       <form onSubmit={(event) => {
//         event.preventDefault()
//         this.props.setMonth(event.target.value)
//       }
//     }>
//       <div>
//         <Dropdown placeholder="Select A Month"  fluid selection options={months}/>
//       </div>
//
//       <div>
//         <Button color='grey'>Select A Month</Button>
//       </div>
//     </form>
//     )
//   }
// }
//






////

class MonthList extends Component {
      renderList (){
        console.log('there');
        return this.props.month.map((month)=> {
            return (
            <li
              key={month.apiname}
              onClick={()=> this.props.setMonth(month)}
              className="list-group-item">
              {month.name}
            </li>
          );
      });
  }
  render() {
    return
    <ul className='list-group col-sm-12'>{this.renderList()}</ul>
}
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthList)

//         <select>
//             <option onChange={(event) => {setMonth(event.target.value);}} onClick={()=>this.props.selectMonth(Month)}>jan</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>feb</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>mar</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>apr</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>may</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>jun</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>jul</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>aug</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>sep</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>oct</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>nov</option>
//             <option onChange={(event) => {
//               setMonth(event.target.value);
//             }}>dec</option>
//         </select>
//   );
// };

// export default MonthList
