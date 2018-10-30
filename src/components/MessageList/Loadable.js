import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./MessageList'),
  loading: () => null,
});
