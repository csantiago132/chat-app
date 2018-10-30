import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Find the component property defined on props
// (lowercase component) and assign it to a new location
// in state we call Component.
// Then, take all remaining properties defined on the
// props object and collect them inside an argument called {...rest}
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  // pulling off the 'rest' of the properties defined
  // into a new argument called rest.
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
};

export default ProtectedRoute;
