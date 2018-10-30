import React from 'react';
import PropTypes from 'prop-types';
import GoogleAsset from '../../assets/google_signin_buttons/web/2x/btn_google_signin_light_normal_web@2x.png';
import './LoginComponent.scss';

const LoginComponent = ({ authenticateWithGoogle }) => (
  <article className="login-component">
    <h3>Login</h3>
    <button
      className="login-component__sign-in-button"
      onClick={authenticateWithGoogle}
    >
      <img className="google-asset" src={GoogleAsset} alt={GoogleAsset} />
    </button>
    <p>
      Authentication is handled by Firebase, it does not share your sensitive
      data with this app.
    </p>
  </article>
);

LoginComponent.propTypes = {
  authenticateWithGoogle: PropTypes.func.isRequired,
};

export default LoginComponent;
