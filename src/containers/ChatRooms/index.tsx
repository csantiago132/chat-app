import reactLoadable from 'react-loadable';

export default reactLoadable({
  loader: (): any => import('./ChatRooms'),
  loading: (): any => null,
});
