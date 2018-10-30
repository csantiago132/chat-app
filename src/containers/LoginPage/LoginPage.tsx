import * as React from 'react';
import { withRouter } from 'react-router';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import './LoginPage.scss';

interface ILoginPage {
  isAuthenticated?: string;
  history: any;
  location: any;
  match: any;
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
