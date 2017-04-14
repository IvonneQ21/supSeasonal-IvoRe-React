import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRecipes } from '../actions';

import { Card, CardTitle } from 'react-materialize';
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table';

const _renderRecipeExtendedIngredients = (ingredients) => {
  return ingredients.map((ingr) => {
    return  <TableRow>
      <TableRowColumn><img src={ingr.image} alt="" /></TableRowColumn>
      <TableRowColumn>{ingr.name}</TableRowColumn>
      <TableRowColumn>{ingr.originalString}</TableRowColumn>
    </TableRow>
  })
}

const _renderRecipes = (recipes) => {
  if (recipes.length === 0) {
    return 'Select your current month & see a list of awesome recipes that include ingredients listed above!'
  } else if (recipes === 'Recipes Loading!') {
    return 'Recipes Loading!';
  } else {
    return recipes.map((item) => {
      return (
        <div>
          <Card header={<CardTitle reveal image={item.image} waves="light" />}
                title={item.title}
                reveal={
                  <div>
                    <Table>
                      <TableHeader>
                        <TableHeaderColumn>Visual</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Description</TableHeaderColumn>
                      </TableHeader>
                      <TableBody>
                        {_renderRecipeExtendedIngredients(item.extendedIngredients)}
                      </TableBody>
                    </Table>
                    <p dangerouslySetInnerHTML={{ __html: item.instructions}} />
                  </div>
                  }>
                   <p>Ready to Eat in {item.readyInMinutes} Minutes</p>
                   <p>Yields {item.servings} Servings</p>
          </Card>
        </div>
      )
    })
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes,
    ingredients: state.ingredients,
    currentSelectedMonth: state.currentSelectedMonth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getRecipes }, dispatch);
}

class RecipesList extends Component {
  render() {
    return (
      <div>
        {_renderRecipes(this.props.recipes)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
