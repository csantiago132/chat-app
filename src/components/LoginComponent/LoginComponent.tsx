/**
 * LoginComponent
 *
 * Holds the login button that triggers Firebase authentication
 *
 */

import * as React from "react";
import btn_google_signinPng from "./assets/btn_google_signin.png";
import Styled from "./styles/Styled";

interface ILoginComponent {
  authenticateWithGoogle: (args: React.ButtonHTMLAttributes<any>) => void;
}

const LoginComponent: React.SFC<ILoginComponent> = ({
  authenticateWithGoogle
}) => (
  <Styled.Article as="article" sm={4} md={6} lg={4}>
    <Styled.H3>Login</Styled.H3>
    <Styled.Button onClick={authenticateWithGoogle}>
      <Styled.Img src={btn_google_signinPng} alt={btn_google_signinPng} />
    </Styled.Button>
    <Styled.P>
      Authentication is handled by Firebase, it does not share your sensitive
      data with this app.
    </Styled.P>
  </Styled.Article>
);

export default LoginComponent;
