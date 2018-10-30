import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as Immutable from 'immutable';
import { auth } from 'firebase';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatRooms from '../ChatRooms';
import NotFoundPage from '../NotFoundPage';
import LoginPage from '../LoginPage';
import ProtectedRoute from '../ProtectedRoute';
import LandingPage from '../LandingPage';
import firebase from '../../secretApiInfo/firebase';

const placeholderAvatarJpg = require('../../assets/placeholderImages/placeholderAvatar.jpg');

interface IAppState {
  data: Immutable.Map<string, any>;
  firebaseConfig: any;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: Immutable.Map({
        authUser: 'Guest User',
        isAuthenticaded: true,
        profilePicture: placeholderAvatarJpg,
        userUniqueID: String('')
      }),
      firebaseConfig: firebase
    };
  }
  googleAuthentication(event: any) {
    const { data } = this.state;
    event.preventDefault();
    const googleProvider = new auth.GoogleAuthProvider();
    const googleAuth = firebase.auth();

    googleAuth
      .signInWithPopup(googleProvider)
      .then((result: any) => {
        this.setState({
          data: data
            .set('isAuthenticaded', true)
            .set('authUser', result.additionalUserInfo.profile.name)
            .set('profilePicture', result.additionalUserInfo.profile.picture)
            .set('userUniqueID', result.additionalUserInfo.profile.id)
        });
      })
      .catch((error: any) => console.error(error.message));
  }
  handleLogout(event: any) {
    const { data } = this.state;
    event.preventDefault();
    const googleAuth = firebase.auth();

    googleAuth
      .signOut()
      .then(() => {
        this.setState({
          data: data
            .set('isAuthenticaded', false)
            .set('authUser', 'Guest User')
            .set('profilePicture', placeholderAvatarJpg)
            .set('userUniqueID', String(''))
        });
      })
      .catch((error: any) => console.error(error.message));
  }
  render() {
    const { data, firebaseConfig } = this.state;
    return (
      <React.Fragment>
        <Helmet titleTemplate="%s - Slack Chat" defaultTitle="Slack Chat">
          <meta
            name="description"
            content="A clone(ish) of the Slack application"
          />
        </Helmet>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          <ProtectedRoute
            isAuthenticated={data.get('isAuthenticaded')}
            path="/application"
            // TODO: refactor to not use Lambda
            // https://github.com/csantiago132/slack-chat/issues/44
            component={() => (
              <ChatRooms
                firebase={firebaseConfig}
                displayName={data.get('authUser')}
                displayImage={data.get('profilePicture')}
                userUniqueID={data.get('userUniqueID')}
                logout={(event: any) => this.handleLogout(event)}
              />
            )}
          />
          <Route
            path="/login"
            component={() => (
              <LoginPage
                isAuthenticated={data.get('isAuthenticaded')}
                authenticateWithGoogle={(event: any) =>
                  this.googleAuthentication(event)
                }
              />
            )}
          />
          <Route path="/404" component={NotFoundPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
