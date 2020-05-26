import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { handleAuthenticationCallback } from '../store/actions/auth';

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

let Callback = ({ dispatch, user }) => {
  console.log(user)
  if (user) return <Redirect to="/" />;
  dispatch(handleAuthenticationCallback());

  return <div className="text-center">Loading user profile.</div>;
};
Callback = connect(mapStateToProps)(Callback);

export default Callback;