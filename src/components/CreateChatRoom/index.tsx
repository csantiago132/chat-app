import reactLoadable from 'react-loadable';

export default reactLoadable({
  loader: (): any => import('./CreateChatRoom'),
  loading: (): any => null,
});
