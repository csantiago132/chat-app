import Loadable from 'react-loadable'

export default Loadable({
  loader: (): any => import('./LoginComponent'),
  loading: (): any => null
});
