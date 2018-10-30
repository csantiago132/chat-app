import reactLoadable from 'react-loadable';

export default reactLoadable({
  loader: (): any => import('./ProfileCard'),
  loading: (): any => null,
});
