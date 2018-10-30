import React from 'react';
import { Helmet } from 'react-helmet';
import { Map } from 'immutable';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatRooms from 'containers/ChatRooms/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import ProtectedRoute from 'containers/ProtectedRoute';
import LandingPage from 'containers/LandingPage/Loadable';
import firebase from '../../secretApiInfo/firebase';
import guestAvatar from '../../assets/placeholderImages/placeholderAvatar.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Map({
        isAuthenticaded: false,
        authUser: 'Guest User',
        profilePicture: guestAvatar,
        userUniqueID: String(''),
      }),
      firebaseConfig: firebase,
    };
  }

  googleAuthentication(event) {
    event.preventDefault();
    const { data } = this.state;
    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = firebase.auth();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        this.setState({
          data: data
            .set('isAuthenticaded', true)
            .set('authUser', result.additionalUserInfo.profile.name)
            .set('profilePicture', result.additionalUserInfo.profile.picture)
            .set('userUniqueID', result.additionalUserInfo.profile.id),
        });
      })
      .catch((error) => console.error(error.message));
  }

  handleLogout(event) {
    event.preventDefault();
    const { data } = this.state;
    const auth = firebase.auth();

    auth
      .signOut()
      .then(() => {
        this.setState({
          data: data
            .set('isAuthenticaded', false)
            .set('authUser', 'Guest User')
            .set('profilePicture', guestAvatar)
            .set('userUniqueID', String('')),
        });
      })
      .catch((error) => console.error(error.message));
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
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute
            isAuthenticated={data.get('isAuthenticaded')}
            path="/application"
            component={() => (
              <ChatRooms
                firebase={firebaseConfig}
                displayName={data.get('authUser')}
                displayImage={data.get('profilePicture')}
                userUniqueID={data.get('userUniqueID')}
                logout={(event) => this.handleLogout(event)}
              />
            )}
          />
          <Route
            path="/login"
            component={() => (
              <LoginPage
                isAuthenticated={data.get('isAuthenticaded')}
                authenticateWithGoogle={(event) =>
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
