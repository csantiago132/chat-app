import Loadable from 'react-loadable'

export default Loadable({
  loader: (): any => import('./MessageList'),
  loading: (): any => null
});
