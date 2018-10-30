import reactLoadable from 'react-loadable';

export default reactLoadable({
  loader: (): any => import('./CreateMessage'),
  loading: (): any => null,
});
