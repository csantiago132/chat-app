import reactLoadable from 'react-loadable';

export default reactLoadable({
  loader: (): any => import('./MessageList'),
  loading: (): any => null,
});
