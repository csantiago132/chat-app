import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProtectedRoute {
  component: (...arg: any[]) => any;
  isAuthenticated: boolean;
  location?: any;
  path: string;
}
// Find the component property defined on props
// (lowercase component) and assign it to a new location
// in state we call Component.
// Then, take all remaining properties defined on the
// props object and collect them inside an argument called {...rest}
const ProtectedRoute: React.SFC<IProtectedRoute> = ({
  component,
  isAuthenticated,
  ...rest
}) => (
  // pulling off the 'rest' of the properties defined
  // into a new argument called rest.
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default ProtectedRoute;
