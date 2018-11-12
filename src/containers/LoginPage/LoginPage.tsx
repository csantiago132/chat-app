/**
 * Homepage
 *
 * Landing page of the app
 *
 */

import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import Styled from "./styles/Styled";

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
    <Styled.Main as="main" fluid={true}>
      <LoginComponent {...rest} />
    </Styled.Main>
  );
};

export default withRouter(LoginPage);
