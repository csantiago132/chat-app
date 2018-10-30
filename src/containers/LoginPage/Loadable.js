import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./LoginPage'),
  loading: () => null,
});
