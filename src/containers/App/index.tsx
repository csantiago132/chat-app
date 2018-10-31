/**
 * App container
 * 
 * Main container of the app, handles global state,
 * authentication provider (Google) and routing
 *  
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as Immutable from 'immutable';
import { auth } from 'firebase';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatRooms from '../ChatRooms/ChatRooms';
import NotFoundPage from '../NotFoundPage/NotFound';
import LoginPage from '../LoginPage/LoginPage';
import ProtectedRoute from '../ProtectedRoute';
import LandingPage from '../LandingPage/LandingPage';
import firebase from '../../secretApiInfo/firebase';
import placeholderAvatarJpg from '../../assets/placeholderImages/placeholderAvatar.jpg';

interface IAppState {
  data: Immutable.Map<string, any>;
  firebaseConfig: object;
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

  // google provider method
  googleAuthentication(event: any) {
    const { data } = this.state;
    event.preventDefault();
    const googleProvider = new auth.GoogleAuthProvider();
    const googleAuth = firebase.auth();

    googleAuth
      //sends user to a new tab to authenticate with Google
      .signInWithPopup(googleProvider)
      // when done, sets state based on user information credentials
      .then((result: any) => {
        this.setState({
          data: data
            .set('isAuthenticaded', true)
            .set('authUser', result.additionalUserInfo.profile.name)
            .set('profilePicture', result.additionalUserInfo.profile.picture)
            .set('userUniqueID', result.additionalUserInfo.profile.id)
        });
      })
      // catch any errors on the auth method
      // TODO: maybe redirect to a login error page?
      .catch((error: any) => console.error(error.message));
  }

  // logs out user from the app
  handleLogout(event: any) {
    const { data } = this.state;
    event.preventDefault();
    const googleAuth = firebase.auth();

    googleAuth
      .signOut()
      // when done, clears user information and sets state to default
      .then(() => {
        this.setState({
          data: data
            .set('isAuthenticaded', false)
            .set('authUser', 'Guest User')
            .set('profilePicture', placeholderAvatarJpg)
            .set('userUniqueID', String(''))
        });
      })
      // catch any errors on the auth method
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
            component={() => (
              // passing down state to chatrooms as props
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
                // if user is not logged in, redirect route to login page 
                isAuthenticated={data.get('isAuthenticaded')}
                authenticateWithGoogle={(event: any) =>
                  this.googleAuthentication(event)
                }
              />
            )}
          />
          {/* if route doesn't exists, redirect to 404  */}
          <Route path="/404" component={NotFoundPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
