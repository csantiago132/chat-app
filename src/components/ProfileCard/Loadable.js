import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./ProfileCard'),
  loading: () => null,
});
