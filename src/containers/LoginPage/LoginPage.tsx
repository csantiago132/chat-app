import * as React from 'react';
import { withRouter } from 'react-router';
import LoginComponent from '../../components/LoginComponent';
import './LoginPage.scss';

interface ILoginPage {
  isAuthenticated?: string;
  history: any;
  push: (...args: any[]) => any;
  location: any;
  match: any;
}

const LoginPage: React.SFC<ILoginPage> = (props) => {
  const { isAuthenticated, history } = props;
  if (isAuthenticated) {
    history.push(`/application`);
  }

  return (
    <main className="login-page-container">
      <LoginComponent {...props} />
    </main>
  );
};

export default withRouter(LoginPage);
