import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import {findUser} from '../actions/index';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({findUser}, dispatch);
}

class UserRegistration extends Component {
  render() {
    const { handleSubmit } = this.props.findUser;
    return (
      <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" label="input"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" label="input"/>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="username" label="input"/>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form:'LoginForm'})(UserRegistration));
