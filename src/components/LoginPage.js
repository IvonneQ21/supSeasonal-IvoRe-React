import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import {findUser} from '../actions/index';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';





const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({findUser}, dispatch);
}


const style = {
  color: 'blue',
  backgroundColor: 'grey',
  labelColor: "blue"
}


class UserLogIn extends Component {
  render() {
    const { handleSubmit } = this.props.findUser;
    return (
      <div style={style} className="loginForm">

        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" label="input"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" label="input"/>
        </div>
        <RaisedButton a href="/home" label="submit"/>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(reduxForm({ form:'LoginForm'})(UserLogIn));
