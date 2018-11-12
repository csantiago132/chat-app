/**
 * Homepage
 *
 * Landing page of the app
 *
 */

import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import LoginComponent from "../../components/LoginComponent/LoginComponent";

interface ILoginPage extends RouteComponentProps {
  authenticateWithGoogle: any;
  isAuthenticated: string;
}

const LoginPage: React.SFC<ILoginPage> = (props) => {
  const { isAuthenticated, history, ...rest } = props;
  if (isAuthenticated) {
    history.push(`/application`);
  }

  return (
    <main className="login-page-container">
      <LoginComponent {...rest} />
    </main>
  );
};

export default withRouter(LoginPage);
