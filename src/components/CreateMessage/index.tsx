import Loadable from 'react-loadable'

export default Loadable({
  loader: (): any => import('./CreateMessage'),
  loading: (): any => null
});
