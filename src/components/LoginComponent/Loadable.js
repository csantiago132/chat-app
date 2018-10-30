/**
 *
 * Asynchronously loads the component for LoginComponent
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./LoginComponent'),
  loading: () => null,
});
