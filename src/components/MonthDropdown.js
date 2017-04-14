import React from 'react';
// import { Component } from 'react';
import { connect } from 'react-redux';
import months from '../data/months';
import { bindActionCreators } from 'redux';
import { setMonth, getIngredients, getRecipes } from '../actions';
import { Dropdown, Button } from 'semantic-ui-react'

const mapStateToProps = (state, ownProps) => {
  return ({
    ingredients: state.ingredients,
    recipes: state.recipes,
    currentSelectedMonth: state.currentSelectedMonth
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setMonth, getIngredients, getRecipes }, dispatch)
}

class MonthDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.props.setMonth(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getIngredients(this.props.currentSelectedMonth);
    this.props.getRecipes(this.props.currentSelectedMonth);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="dropdownMonth">
          <Dropdown placeholder='Select A Month' fluid selection options={months} onChange={(event, result) => { const {value} = result; this.props.setMonth(value) } } />
        </div>
        <div className="SearchButton">
          <Button color='blue'>Submit!</Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthDropdown);
