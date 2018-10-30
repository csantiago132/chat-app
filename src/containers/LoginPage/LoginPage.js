import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import LoginComponent from '../../components/LoginComponent/Loadable';
import './LoginPage.scss';

const LoginPage = (props) => {
  const isAuthenticated = props.isAuthenticated;

  if (isAuthenticated) {
    props.history.push(`/application`);
  }

  return (
    <main className="login-page-container">
      <LoginComponent {...props} />
    </main>
  );
};

LoginPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default withRouter(LoginPage);
