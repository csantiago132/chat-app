import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./CreateMessage'),
  loading: () => null,
});
