import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMonth, getIngredients, getRecipes } from '../actions';
import { Dropdown, NavItem, Button } from 'react-materialize';

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
      <Dropdown

        trigger={<Button>Select A Month</Button>} >
        <form onSubmit={this.handleSubmit}>
          <label>
            <NavItem value="jan">January</NavItem>
            <NavItem value="feb">February</NavItem>
            <NavItem value="mar">March</NavItem>
            <NavItem value="apr">April</NavItem>
            <NavItem value="may">May</NavItem>
            <NavItem value="jun">June</NavItem>
            <NavItem value="jul">July</NavItem>
            <NavItem value="aug">Aug</NavItem>
            <NavItem value="sep">September</NavItem>
            <NavItem value="oct">October</NavItem>
            <NavItem value="nov">November</NavItem>
            <NavItem value="dec">December</NavItem>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Dropdown>


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
