import reactLoadable from 'react-loadable';

export default reactLoadable({
  loader: (): any => import('./LoginComponent'),
  loading: (): any => null,
});
