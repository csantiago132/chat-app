import reactLoadable from 'react-loadable';

export default reactLoadable({
  loader: (): any => import('./LoginPage'),
  loading: (): any => null,
});
