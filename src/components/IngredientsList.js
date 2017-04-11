import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIngredients } from '../actions';

import './IngredientsList.css';
import { Row, Col, Chip } from 'react-materialize';

const _renderIngredients = (ingredients) => {
  // console.log('src/components/IngredientsList/_renderIngredients');
  if (ingredients.length === 0) {
    // console.log('src/components/IngredientsList/_renderIngredients/ingredientsList.payload.length===0');
    return 'Select your current month & hit submit to see a list of all the freshest ingredients that can be found!';
  } else {
    // console.log('src/components/IngredientsList/_renderIngredients/ingredientsList.payload.length!==0');
    return ingredients.map((item) => {
      console.log('src/components/IngredientsList/_renderIngredients/ingredientsList.ingredientsList===0/ingredientsList.map');
      if (item.food_name === '') { return '' } else {
        return    <Chip className="ingredientChip">
                    {item.food_name}
                  </Chip>
      }
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('src/components/IngredientsList/mapStateToProps');
  console.log(state.ingredients);
  return {
    ingredients: state.ingredients,
    currentSelectedMonth: state.currentSelectedMonth
  }
}

// const mapDispatchToProps = (dispatch) => {
//   console.log('src/components/ingredientsList/mapDispatchToProps');
//   return bindActionCreators({ getIngredients }, dispatch)
// }

class IngredientsList extends Component {
  render(ingredients, i) {
    console.log('src/components/IngredientsList/render()');
    return (
      <Row>
        <Col s={12}>
          {_renderIngredients(this.props.ingredients)}
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps)(IngredientsList);
