import * as React from 'react';
import googleAsset from '../../assets/google_signin_buttons/web/2x/btn_google_signin_light_normal_web2x.png';
import './LoginComponent.scss';

interface ILoginComponent {
  authenticateWithGoogle: (...args: any[]) => any;
}

const LoginComponent: React.SFC<ILoginComponent> = ({
  authenticateWithGoogle
}) => (
  <article className="login-component">
    <h3>Login</h3>
    <button
      className="login-component__sign-in-button"
      onClick={authenticateWithGoogle}
    >
      <img className="google-asset" src={googleAsset} alt={googleAsset} />
    </button>
    <p>
      Authentication is handled by Firebase, it does not share your sensitive
      data with this app.
    </p>
  </article>
);

export default LoginComponent;
