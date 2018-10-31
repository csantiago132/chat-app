import Loadable from 'react-loadable'

export default Loadable({
  loader: (): any => import('./ProfileCard'),
  loading: (): any => null
});
