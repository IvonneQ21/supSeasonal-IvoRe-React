import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMonth, getIngredients, getRecipes } from '../actions';
import { Dropdown, NavItem, Button } from 'react-materialize';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
const mapStateToProps = (state, ownProps) => {
  // console.log('src/components/MonthDropdown/mapStateToProps');
  return ({
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  // console.log('src/components/MonthDropdown/mapDispatchToProps');
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch)
}

class MonthDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('src/components/MonthDropdown/handleChange');
    console.log('event.target.value', event.target.value);
    this.props.setMonth(event.target.value);
  }

  handleSubmit(event) {
    console.log('src/components/MonthDropdown/handleSubmit');
    event.preventDefault();
    this.props.getIngredients(this.props.currentSelectedMonth);
    this.props.getRecipes(this.props.currentSelectedMonth);
  }

  render() {
    console.log('src/components/MonthDropdown/render');
    return (
      // return (
    // <div>
    //   <DropDownMenu value={this.state.value} onChange={this.handleChange}>
    //     <MenuItem value={1} primaryText="Never" />
    //     <MenuItem value={2} primaryText="Every Night" />
    //     <MenuItem value={3} primaryText="Weeknights" />
    //     <MenuItem value={4} primaryText="Weekends" />
    //     <MenuItem value={5} primaryText="Weekly" />
    //   </DropDownMenu>

    <div>
      <DropDownMenu value={this.props.currentSelectedMonth} onChange={this.handleChange}>

            <MenuItem value="jan">January</MenuItem>
            <MenuItem value="feb">February</MenuItem>
            <MenuItem value="mar">March</MenuItem>
            <MenuItem value="apr">April</MenuItem>
            <MenuItem value="may">May</MenuItem>
            <MenuItem value="jun">June</MenuItem>
            <MenuItem value="jul">July</MenuItem>
            <MenuItem value="aug">Aug</MenuItem>
            <MenuItem value="sep">September</MenuItem>
            <MenuItem value="oct">October</MenuItem>
            <MenuItem value="nov">November</MenuItem>
            <MenuItem value="dec">December</MenuItem>

      </DropDownMenu>
        </div>


      //
      // {/* <form onSubmit={this.handleSubmit}>
      //   <label>
      //     Pick your current month for fresh ingredients:
      //     <select value={this.props.currentSelectedMonth} onChange={this.handleChange}>
      //       <option value="jan">January</option>
      //       <option value="feb">February</option>
      //       <option value="mar">March</option>
      //       <option value="apr">April</option>
      //       <option value="may">May</option>
      //       <option value="jun">June</option>
      //       <option value="jul">July</option>
      //       <option value="aug">August</option>
      //       <option value="sep">September</option>
      //       <option value="oct">October</option>
      //       <option value="nov">November</option>
      //       <option value="dec">December</option>
      //     </select>
      //   </label>
      //   <input type="submit" value="Submit" />
      // </form> */}
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthDropdown);
